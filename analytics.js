(function () {
  "use strict";

  var APP_STORE_HOST = "apps.apple.com";
  var GA4_DESTINATION_ID = "G-FJXLSL7PQT";
  var STORAGE_KEY = "pediametrics_acquisition";

  function clean(value, fallback) {
    if (!value) return fallback || "";
    return String(value).trim().slice(0, 240);
  }

  function getDeviceCategory() {
    var userAgent = navigator.userAgent || "";
    var isIPad = /iPad/i.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (isIPad || /Tablet|Android(?!.*Mobile)/i.test(userAgent)) return "tablet";
    if (/Mobi|iPhone|iPod|Android/i.test(userAgent)) return "mobile";
    return "desktop";
  }

  function safeReferrer(referrer) {
    if (!referrer) return "direct";
    try {
      var url = new URL(referrer);
      return clean(url.origin + url.pathname, "direct");
    } catch (error) {
      return "referral";
    }
  }

  function inferAcquisition(params, referrer) {
    var source = clean(params.get("utm_source"));
    var medium = clean(params.get("utm_medium"));
    var campaign = clean(params.get("utm_campaign"));
    var content = clean(params.get("utm_content"));
    var term = clean(params.get("utm_term"));

    if (!source && referrer) {
      try {
        var hostname = new URL(referrer).hostname.replace(/^www\./, "");
        var organicHosts = /(^|\.)(google|bing|yahoo|duckduckgo|ecosia|baidu|yandex)\./i;
        source = hostname;
        medium = organicHosts.test(hostname) ? "organic" : "referral";
      } catch (error) {
        source = "referral";
        medium = "referral";
      }
    }

    return {
      landing_page: window.location.pathname,
      traffic_source: source || "direct",
      traffic_medium: medium || "none",
      campaign: campaign || "not_set",
      campaign_content: content || "not_set",
      campaign_term: term || "not_set",
      initial_referrer: safeReferrer(referrer)
    };
  }

  function getAcquisition() {
    var params = new URLSearchParams(window.location.search);
    var current = inferAcquisition(params, document.referrer);

    try {
      var stored = window.sessionStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (error) {
      // Tracking still works when sessionStorage is unavailable.
    }

    return current;
  }

  var acquisition = getAcquisition();
  window.dataLayer = window.dataLayer || [];

  function pageContext() {
    return {
      originating_page: window.location.pathname,
      page_type: document.body.dataset.pageType || "other",
      landing_page: acquisition.landing_page,
      traffic_source: acquisition.traffic_source,
      traffic_medium: acquisition.traffic_medium,
      campaign: acquisition.campaign,
      campaign_content: acquisition.campaign_content,
      campaign_term: acquisition.campaign_term,
      device: getDeviceCategory(),
      language: navigator.language || "unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
      referrer: acquisition.initial_referrer
    };
  }

  function track(eventName, properties) {
    var payload = Object.assign(
      {
        event: eventName,
        event_timestamp: new Date().toISOString()
      },
      pageContext(),
      properties || {}
    );

    if (typeof window.gtag === "function") {
      var googleEventParameters = Object.assign({}, payload, { send_to: GA4_DESTINATION_ID });
      delete googleEventParameters.event;
      window.gtag("event", eventName, googleEventParameters);
    } else {
      window.dataLayer.push(payload);
    }
    window.dispatchEvent(new CustomEvent("pediametrics:analytics", { detail: payload }));
  }

  window.PediaMetricsAnalytics = {
    track: track,
    context: pageContext
  };

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[data-app-store-link]");
    if (!link) return;

    var destination;
    try {
      destination = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (destination.hostname !== APP_STORE_HOST) return;

    var image = link.querySelector("img");
    var ctaText = link.getAttribute("aria-label") || link.textContent || (image && image.alt) || "App Store";

    if (!qualifiedTracked) {
      qualifiedTracked = true;
      track("qualified_session", { qualification_rule: "app_store_click" });
    }

    track("app_store_click", {
      cta_location: clean(link.dataset.ctaLocation, "unspecified"),
      cta_text: clean(ctaText.replace(/\s+/g, " "), "App Store"),
      destination_url: destination.href,
      outbound: true
    });
  });

  var productProof = document.querySelector("[data-product-proof]");
  var productProofSeen = false;
  var halfPageSeen = false;
  var qualifiedTracked = false;
  var activeSeconds = 0;

  function maybeTrackQualifiedSession() {
    if (qualifiedTracked || activeSeconds < 20 || (!productProofSeen && !halfPageSeen)) return;
    qualifiedTracked = true;
    track("qualified_session", {
      qualification_rule: productProofSeen ? "20s_and_product_proof" : "20s_and_50pct_scroll"
    });
  }

  if ("IntersectionObserver" in window && productProof) {
    var proofObserver = new IntersectionObserver(
      function (entries) {
        if (!entries[0].isIntersecting || productProofSeen) return;
        productProofSeen = true;
        track("product_proof_view", { section_id: "how_it_works" });
        maybeTrackQualifiedSession();
        proofObserver.disconnect();
      },
      { threshold: 0.25 }
    );
    proofObserver.observe(productProof);
  }

  window.addEventListener(
    "scroll",
    function () {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.5) {
        halfPageSeen = true;
        maybeTrackQualifiedSession();
      }
    },
    { passive: true }
  );

  window.setInterval(function () {
    if (!document.hidden) {
      activeSeconds += 5;
      maybeTrackQualifiedSession();
    }
  }, 5000);

  var sticky = document.querySelector("[data-mobile-store-cta]");
  var heroStoreLink = document.querySelector('[data-cta-location="hero"]');
  var finalStoreLink = document.querySelector('[data-cta-location="final_cta"]');

  if (sticky) {
    var heroVisible = true;
    var finalVisible = false;

    function updateSticky() {
      var shouldShow = window.scrollY > 260 && !heroVisible && !finalVisible;
      sticky.classList.toggle("is-visible", shouldShow);
      sticky.setAttribute("aria-hidden", shouldShow ? "false" : "true");
    }

    if ("IntersectionObserver" in window) {
      if (heroStoreLink) {
        new IntersectionObserver(function (entries) {
          heroVisible = entries[0].isIntersecting;
          updateSticky();
        }).observe(heroStoreLink);
      }
      if (finalStoreLink) {
        new IntersectionObserver(function (entries) {
          finalVisible = entries[0].isIntersecting;
          updateSticky();
        }).observe(finalStoreLink);
      }
    }

    window.addEventListener("scroll", updateSticky, { passive: true });
    updateSticky();
  }
})();
