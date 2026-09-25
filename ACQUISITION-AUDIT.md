# PediaMetrics Website Acquisition Audit and Growth Plan

Date: September 24, 2026  
Primary business KPI: website-attributed app installs  
Website conversion event: `app_store_click`

## Executive diagnosis

The pre-redesign site was a two-page brochure: a homepage and a privacy policy. The homepage accurately named WHO growth standards, Z-scores, and percentiles, but it did not demonstrate the product. The hero used a large app icon rather than the real interface; major workflows such as measurement validation, longitudinal charts, patient profiles, fluid calculations, and PDF reports were absent. There was one App Store badge near the top and no final App Store action. The competing “Contact us” action appeared twice above the fold even though support email is not the acquisition goal.

No historical analytics or Search Console data was available in the repository, so it is not possible to make evidence-based claims about which old page, channel, country, or query generated traffic or installs. The correct first measurement period begins when the connected event layer is deployed.

The redesigned system now does three jobs:

1. The homepage explains and proves the product with real interface screens.
2. A commercial-intent landing page addresses people looking for a pediatric growth calculator.
3. An educational WHO growth-chart guide answers the immediate query before connecting the reader to assessment and tracking in PediaMetrics.

## 1. Existing website diagnosis

### Pre-redesign page contribution

| Page | Previous acquisition role | Diagnosis | Action taken |
|---|---|---|---|
| `/` | Only page capable of an App Store click | Relevant product copy, but one early CTA, no product proof, weak differentiation, no final CTA, and no tracking | Fully restructured around product understanding, proof, trust, and measured App Store exits |
| `/privacy-policy.html` | Trust support only | Useful policy but no product path, missing canonical/Open Graph metadata, and no click tracking | Kept, enhanced metadata, added a restrained App Store path, and instrumented it |

### Keep, change, move, remove

- Keep: product name, existing blue/green visual identity, App Store badge, WHO positioning, privacy-first claims, support email, medical disclaimer, and privacy/terms links.
- Rewrite: hero, audience statement, feature descriptions, methodology claims, privacy presentation, and final action copy.
- Move: detailed professional/caregiver context below the immediate product definition; the disclaimer into trust and footer context.
- Expand: measurement validation, longitudinal tracking, patient profiles, charts, fluid calculations, and reports.
- Remove: decorative hero use of the app icon, remote third-party QR code, duplicated “Contact us” above the fold, and unsupported language such as “validated to align with clinical expectations.”
- Add: actual product screens, explicit App Store destinations, FAQ, methodology links, acquisition pages, structured data, canonical tags, robots, sitemap, and an event data layer.

### Important unresolved trust issue

The public App Store listing says “Data Not Collected,” while the privacy policy says limited app-usage analytics may be collected and retained. The owner must verify the app's real SDK behavior and make the App Store privacy disclosure and policy say the same thing. This was not rewritten automatically because the truthful statement depends on the production app configuration.

## 2. Acquisition-funnel diagnosis

### Before

Search/referral → generic product claim → feature lists → no product evidence → one early App Store opportunity → unmeasured exit

Main leaks:

- The visitor could not see the app solving the problem.
- The first headline did not name Z-scores, percentiles, or growth charts.
- The site described an assessment calculator but omitted tracking and reporting, reducing perceived value relative to a one-off web calculator.
- Visitors reaching the bottom had no download action.
- Educational search intent had no landing page.
- No event identified originating page, CTA, acquisition source, or device.

### Redesigned

High-intent landing page → immediate answer/product definition → real UI proof → workflow/differentiation → methodology/privacy context → explicit App Store action → App Store campaign reporting → install

The site should not infer installs from clicks. The website owns `app_store_click`; App Store Connect owns product-page activity and downloads. Campaign links connect those layers as far as Apple's privacy thresholds allow.

## 3. Recommended positioning

Primary position:

> PediaMetrics is the iPhone and iPad app that turns pediatric measurements into WHO-based Z-scores, percentiles, classifications, charts, longitudinal histories, and structured reports.

Supporting reasons to install:

- It carries the workflow beyond a one-time result.
- It checks for unlikely measurements and possible unit-entry mistakes.
- It keeps patient history and charts together on the device.
- It adds BMI, body surface area, and maintenance-fluid estimates without repeated entry.
- It produces structured PDF reports.

Audience order:

1. Pediatricians, nurses, dietitians, and other healthcare professionals.
2. Medical students and trainees.
3. Informed caregivers who need structured growth follow-up.

The site should not claim WHO endorsement, medical-device status, clinical validation, or widespread professional adoption without evidence.

## 4. Redesigned site architecture

### Implemented now

| URL | Role | Primary intent | Primary CTA |
|---|---|---|---|
| `/` | Brand/product hub | PediaMetrics, pediatric growth app, growth tracking app | Get PediaMetrics on the App Store |
| `/pediatric-growth-calculator/` | Commercial-intent landing page | pediatric growth calculator, WHO growth calculator, child percentile calculator | Start assessing pediatric growth |
| `/who-growth-charts/` | Educational/product-bridge guide | WHO growth charts, how to read child growth chart, growth percentile meaning | Track WHO growth in PediaMetrics |
| `/privacy-policy.html` | Trust/legal support | PediaMetrics privacy, patient data storage | View PediaMetrics on the App Store |

### Add only after query and click data justify them

| Candidate | Creation threshold | Why it remains separate |
|---|---|---|
| `/pediatric-z-score/` | Meaningful impressions for “pediatric Z-score” variants and evidence that the chart guide does not satisfy them | Explains numerical distance and use across indicators in depth |
| `/child-growth-tracking/` | Organic/referral demand for longitudinal tracking or strong engagement with current tracking sections | Product-feature intent, not a calculation explainer |
| `/pediatric-bmi-percentile/` | Impressions plus a credible, medically reviewed article scope | Indicator-specific intent; requires careful terminology and age context |

Do not create separate thin pages for every measurement. That would duplicate the calculator page and divide authority.

## 5. Redesigned homepage structure

The implemented homepage follows this sequence:

1. Sticky navigation with two intent pages, features, FAQ, and an App Store action.
2. Hero: WHO-based category, outcome-focused headline, core capabilities, real assessment screen, App Store badge, and privacy/platform proof.
3. Audience strip: professionals, students, and informed caregivers.
4. Product proof: measurement entry → validation → results → trend.
5. Post-demonstration App Store CTA.
6. Core features: assessment, checks, tracking, reports, and additional calculations.
7. Patient/profile and PDF product screens.
8. BMI/BSA/fluid use case and CTA.
9. Trust: official WHO references, local storage, appropriate disclaimer, and support.
10. FAQ addressing installation objections.
11. Final App Store CTA.
12. Footer with product, acquisition-page, privacy, terms, support, and App Store links.
13. Mobile sticky CTA that appears only after the hero CTA leaves view and hides near the final CTA.

## 6. Exact hero recommendation

CURRENT:

> PediaMetrics turns complex growth data into decisions you can trust.

> A professional pediatric growth assessment app that transforms raw measurements into clear, actionable insights using WHO growth standards.

REPLACE WITH — implemented:

> WHO-BASED PEDIATRIC GROWTH ASSESSMENT

> Turn pediatric measurements into clear growth insights.

> Calculate Z-scores and percentiles, review growth classifications, follow trends across visits, and create structured reports—all in one iPhone and iPad app.

CTA:

> Download on the App Store

Proof line:

> WHO 2006 & 2007 references · No account required · Patient data stored on device

Why: the replacement names the job, outputs, longitudinal value, and platform within the first viewport. The real assessment screen makes the value verifiable without scrolling through feature lists.

## 7. CTA strategy

| Location | Copy | Intent stage | Event value |
|---|---|---|---|
| Navigation | View on the App Store | Returning/high-intent | `navigation` |
| Homepage hero | Get PediaMetrics on the App Store | Product understood at a glance | `hero` |
| After workflow | Get PediaMetrics on the App Store | Product proof seen | `product_demo` |
| Feature section | View PediaMetrics on the App Store | Specific utility understood | `feature_section` |
| Educational inline | Track growth with PediaMetrics | Query answered; product bridge | `article_inline` |
| Article end | Download PediaMetrics on the App Store | Full article consumed | `article_bottom` |
| Mobile sticky | App Store | Persistent mobile access after hero | `sticky_mobile` |
| Footer | App Store | Universal fallback | `footer` |

Do not add a CTA to every card. Measure the existing locations first. Keep wording explicit about the App Store destination.

## 8. Product screenshot strategy

Implemented visual sequence:

1. `assessment`: hero proof of outputs, classifications, body metrics, and fluid estimates.
2. `quick-assessment`: measurement entry.
3. `measurement-validation`: invalid/unlikely value handling.
4. `height-for-age-chart` and `weight-for-length-chart`: longitudinal WHO curves.
5. `patient-profiles`: saved patient workflow.
6. `pdf-report`: structured export.
7. `fluid-requirements`: utility beyond growth charts.

Each image has a task-based caption or nearby explanation and descriptive alternative text. Large source PNGs remain available; the website serves optimized WebP versions of roughly 29–50 KB each. The hero image is preloaded; below-fold images use lazy loading and explicit dimensions to reduce layout shift.

Missing proof: there is no dedicated report-generation interaction screenshot, only the generated PDF. Capture that interaction in a future App Store/website asset refresh if it exists.

## 9. SEO strategy centered on high-intent acquisition

Priority order:

1. Commercial/product intent: calculator app, Z-score calculator, percentile calculator, tracking app.
2. Educational intent with direct product bridge: reading WHO charts, understanding Z-scores/percentiles, following growth across visits.
3. Lower intent only when it supports an existing product workflow.

Success criteria per landing page:

- Qualified organic sessions.
- `app_store_click` volume.
- `app_store_click / qualified_session`.
- App Store campaign product-page views and first-time downloads.
- Not rankings or traffic alone.

## 10. Keyword-to-page mapping

| Query group | Intent | Audience/problem | Page | Product bridge | CTA | Install proximity |
|---|---|---|---|---|---|---|
| pediatric growth calculator | Commercial | Needs a repeatable assessment tool | `/pediatric-growth-calculator/` | Multi-indicator assessment + saved history | Start assessing pediatric growth | Very high |
| WHO growth calculator | Commercial | Wants the correct WHO reference | `/pediatric-growth-calculator/` | WHO 2006/2007 logic | Get PediaMetrics on the App Store | Very high |
| pediatric Z-score calculator | Commercial | Wants a numerical WHO result | `/pediatric-growth-calculator/` initially | Z-scores, percentiles, checks | Calculate with PediaMetrics | Very high |
| child/baby percentile calculator | Commercial | Wants age/sex-relative result | `/pediatric-growth-calculator/` | Percentiles + chart + history | View on the App Store | High |
| pediatric growth app | Product | Comparing apps/tools | `/` | Full product proof | Download PediaMetrics | Very high |
| growth tracker for children | Product | Needs repeated-measurement history | `/` initially | Profiles, charts, history | Track growth with PediaMetrics | High |
| WHO growth charts | Mixed | Wants charts or help reading them | `/who-growth-charts/` | Automatic plotting across visits | Track WHO growth in PediaMetrics | Medium-high |
| how to read WHO growth charts | Educational | Needs a clear explanation | `/who-growth-charts/` | Turns explanation into repeatable workflow | Track growth with PediaMetrics | Medium |
| what does a growth percentile mean | Educational | Confused about rank vs target | `/who-growth-charts/` initially | App calculates percentile + Z-score | Calculate and track growth | Medium |
| pediatric Z-score explained | Educational | Needs interpretation context | `/who-growth-charts/` initially; split only with data | Numerical results + trends | View PediaMetrics | Medium |
| BMI percentile child | Mixed | Needs indicator-specific result/context | Calculator page initially | BMI-for-age + BMI calculation | Assess with PediaMetrics | High, but future dedicated page needs review |
| head circumference percentile | Mixed | Needs age-eligible result | Calculator page initially | HCFA result + validation | Assess with PediaMetrics | High, but lower addressable scope |

## 11. Landing-page recommendations

Implemented:

- Pediatric growth calculator: distinct commercial intent and direct App Store destination.
- WHO growth charts: useful educational answer, official references, and a natural transition into calculation/tracking.

Deferred:

- Pediatric Z-score explainer: build if Search Console shows a separable query cluster or the current guide ranks but under-converts those searches.
- Child growth tracking: build if tracking content receives meaningful interaction or paid/referral campaigns need a dedicated message.
- Pediatric BMI: require medically reviewed copy before publishing; do not create a thin calculator-shaped article.

## 12. Content strategy

Every educational page must use this template:

1. Answer the search question directly.
2. Explain limits and measurement/context requirements.
3. Demonstrate the related PediaMetrics workflow with a real screen.
4. Offer one inline CTA after the answer and one bottom CTA.
5. Link to an official primary reference.
6. Track the page and CTA separately.

Content should be rejected if the product bridge is artificial or if medical review is required but unavailable.

## 13. Internal-linking strategy

- Homepage navigation and footer link to both acquisition pages.
- Calculator page links to the WHO chart guide for education.
- WHO chart guide links to the calculator page for action.
- Both pages link back to the homepage feature proof and privacy policy.
- Use descriptive anchors such as “pediatric growth calculator app,” not “learn more.”
- Future indicator pages should link upward to the calculator hub rather than cross-linking every article to every other article.

## 14. Mobile CRO redesign

Implemented:

- One-column hero with the product definition before the screen.
- 44 px or larger primary touch targets.
- App Store badge above the first product image.
- Condensed header with an explicit App Store action.
- System fonts, optimized WebP images, explicit dimensions, lazy loading, and no third-party QR request.
- Workflow cards stack vertically with legible product screens.
- Sticky CTA is delayed until the hero CTA leaves view and hidden near the final CTA.
- Safe-area-aware bottom positioning.
- Reduced-motion support.

Measure mobile versus desktop click-through separately. Do not assume mobile wins; desktop visitors can scan a QR, but the former third-party QR added privacy/performance cost and could not be attributed. If desktop conversion materially lags, test a first-party generated QR later with the same App Store campaign token as the page.

## 15. Trust improvements

Implemented:

- Direct links to WHO standards instead of implying endorsement.
- Explicit statement that PediaMetrics is independent and not WHO-endorsed.
- Local-storage/no-account explanation.
- Clear support-tool disclaimer and no claims of diagnosis.
- Developer/studio identity and support email.
- Privacy and terms available from every page.
- Removed unsubstantiated “validated” and “clinical accuracy” claims.

Required owner action:

- Reconcile “Data Not Collected” in the App Store with the analytics language in the privacy policy.
- Confirm whether “works offline” remains fully accurate for every advertised workflow before reintroducing it as a headline claim.
- Add real ratings or testimonials only when the sample is credible and permission/attribution is clear. Do not turn one rating into broad social proof.

## 16. Technical SEO fixes

Implemented:

- Unique titles, descriptions, H1s, and canonical URLs.
- Index/follow directives.
- `robots.txt` and XML sitemap.
- SoftwareApplication, Article, FAQ, and Breadcrumb structured data where appropriate.
- Open Graph/Twitter metadata.
- Descriptive image alternative text and explicit dimensions.
- Clean directory URLs for acquisition pages.
- Internal links between the homepage, calculator page, guide, privacy, terms, and App Store.
- Local system typography on acquisition pages to remove render-blocking font requests.
- Hero-image preload and below-fold lazy loading.
- Removed the remote QR dependency.

Deployment checks:

- Submit `https://pediametrics.valioralabs.com/sitemap.xml` in Google Search Console.
- Inspect all four canonical URLs after deployment.
- Validate structured data in Google's Rich Results Test.
- Confirm GitHub Pages serves directory URLs with trailing-slash canonicals.
- Run PageSpeed Insights with production caching, not the local server.
- Monitor Core Web Vitals by template and device after field data accumulates.

## 17. Analytics implementation

### Implemented event layer

`analytics.js` now pushes events into `window.dataLayer` and emits a `pediametrics:analytics` browser event. It stores first-touch attribution in session storage without cookies.

Events:

| Event | When it fires | Role |
|---|---|---|
| `app_store_click` | Any instrumented link to `apps.apple.com` is clicked | Primary website conversion |
| `product_proof_view` | At least 25% of the homepage product-proof section enters view | Funnel diagnostic |
| `qualified_session` | 20 active seconds plus product-proof view or 50% scroll; also fires for any App Store click | Denominator for qualified conversion |

Properties on `app_store_click`:

- `originating_page`
- `page_type`
- `cta_location`
- `cta_text`
- `destination_url`
- `landing_page`
- `traffic_source`
- `traffic_medium`
- `campaign`
- `campaign_content`
- `campaign_term`
- `device`
- `language`
- `timezone`
- `referrer`
- `event_timestamp`
- `outbound`

Country should come from the analytics platform's server-side geolocation rather than a client-side lookup. GA4, for example, provides country and device dimensions without adding a third-party geolocation call to the page.

### GA4 connection implemented

The website now loads Google tag `GT-TWDJQSFV` and routes custom events directly to GA4 destination `G-FJXLSL7PQT`. Google Signals and advertising-personalization signals are disabled. The privacy policy now discloses website analytics separately from app data.

Remaining GA4 administration:

1. Deploy the site and verify page views in Realtime and Tag Assistant.
2. Trigger `app_store_click`, `product_proof_view`, and `qualified_session`, then confirm them in GA4 DebugView/Realtime.
3. Mark `app_store_click` as a key event.
4. Register `cta_location`, `cta_text`, `page_type`, `landing_page`, `traffic_source`, `traffic_medium`, and `campaign` as event-scoped custom dimensions where needed.
5. Use GA4 built-in country, device category, source/medium, landing page, and referrer dimensions where they are more reliable than custom values.
6. Confirm analytics retention and consent requirements for the jurisdictions served.

Core report:

- Rows: landing page, originating page, source/medium, campaign, country, device, CTA location.
- Values: qualified sessions, App Store clicks, outbound conversion rate, and absolute clicks.
- Join manually or in a dashboard with App Store campaign product-page views, first-time downloads, and conversion rate.

Formula:

`App Store outbound conversion rate = app_store_click sessions / qualified_session sessions × 100`

Use session-level users for both numerator and denominator to avoid inflating the rate when one person clicks multiple CTAs.

## 18. App Store attribution strategy

Apple App Store Connect campaign links use a provider token (`pt`) and campaign token (`ct`) and can report product-page activity, downloads, usage, sales, and subscriptions subject to privacy thresholds. Generate the links in App Store Connect rather than inventing token values. Apple documents the process here:

- https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links

Start with three campaign tokens to preserve sample size:

- `WebsiteHome`
- `WebsiteCalculator`
- `WebsiteWHOCharts`

Use the corresponding link for every CTA on that page. Keep CTA-location analysis in website analytics; do not fragment App Store campaigns by every button until volume is high enough. Apple notes that campaign reporting requires minimum thresholds, so excessive token granularity can hide data.

Attribution chain:

`source/medium/campaign → landing page → CTA location → app_store_click → App Store campaign product-page view → first-time download`

The last step is aggregate attribution, not user-level identity. Report:

- Website clicks by campaign.
- App Store product-page views by campaign.
- First-time downloads by campaign.
- Click-to-product-page continuation.
- Click-to-first-time-download ratio, with clear date windows and privacy-threshold caveats.

## 19. 30-day implementation roadmap

### Days 1–7: launch and measurement

- Deploy the redesigned homepage, calculator page, chart guide, optimized assets, robots, and sitemap.
- Deploy and verify the connected Google tag and GA4 destination.
- Create the three App Store campaign links and replace generic App Store destinations by page.
- Verify every event/property on iPhone, iPad, and desktop.
- Resolve the App Store/privacy-policy analytics inconsistency.
- Submit the sitemap and inspect canonical URLs in Search Console.

### Days 8–14: establish the baseline

- Exclude internal/test traffic.
- Build page/source/device/country/CTA dashboards.
- Annotate launch date.
- Record App Store campaign product-page views and first-time downloads.
- Check real-user mobile performance and any crawl/index issues.

### Days 15–21: fix observed friction

- Review hero versus post-proof CTA contribution.
- Check whether the sticky mobile CTA assists conversion or merely duplicates hero clicks.
- Inspect pages with qualified sessions but no App Store clicks.
- Improve only the highest-volume friction point; avoid simultaneous broad copy changes.

### Days 22–30: first controlled test

- Test one hero emphasis: “WHO pediatric growth assessment” versus “WHO Z-scores, percentiles, and growth charts.”
- Keep screenshots, traffic allocation, and App Store link constant.
- Evaluate App Store clicks per qualified session and campaign-attributed downloads, not click-through alone.

## 20. 60–90-day growth roadmap

- Use Search Console query/page data to decide whether a dedicated Z-score or tracking page is justified.
- Refresh the highest-impression page's title/description only when search CTR is weak and the query mix is relevant.
- Test one screenshot order or CTA message at a time.
- Build a medically reviewed pediatric BMI page only if demand and product relevance justify it.
- Consider localized acquisition pages only for countries already producing qualified App Store clicks; localize terminology and App Store links, not just prose.
- Align website campaign messaging with App Store custom product pages when traffic volume supports it.
- Compare website campaign downloads with App Store organic discovery so website growth is incremental rather than cannibalized.
- Review privacy, compatibility, screenshots, and feature copy whenever the app release changes.

## 21. Prioritized recommendation register

| Priority | Current problem | Exact change | Why / expected effect | Effort | Measurement |
|---|---|---|---|---|---|
| Critical | No App Store conversion data | Activate the implemented `app_store_click` data layer in GA4/GTM | Establishes the primary conversion and page/source/CTA attribution | Low | DebugView test + event counts |
| Critical | Website clicks cannot be tied to App Store downloads | Generate `WebsiteHome`, `WebsiteCalculator`, and `WebsiteWHOCharts` campaign links | Enables aggregate click-to-download attribution | Low | App Store campaign product-page views and first-time downloads |
| Critical | Old homepage did not show the app | Deploy the implemented real-UI hero and workflow | Raises product understanding and qualified click intent | Medium | Hero/product-demo CTR and campaign downloads |
| High | Only one generic page could rank | Deploy calculator and WHO chart pages with distinct intent | Acquires relevant commercial and educational traffic without thin-page sprawl | Medium | Qualified organic sessions, clicks, downloads by page |
| High | Mobile visitors lost access after hero | Deploy delayed sticky mobile App Store CTA | Reduces return-scroll friction without covering the first viewport | Low | `sticky_mobile` CTR and mobile conversion |
| High | Privacy disclosures may conflict | Audit production SDKs and reconcile policy/App Store answers | Prevents a trust and compliance contradiction | Medium | Owner sign-off; matching public disclosures |
| High | Missing technical discovery signals | Deploy canonical, sitemap, robots, structured data, and internal links | Improves correct discovery and page ownership | Low | Search Console index/canonical reports |
| Medium | No evidence for more SEO pages | Use query + conversion thresholds before adding pages | Prevents cannibalization and low-value traffic | Low | Query clusters and page-level clicks |
| Medium | App Store screenshots and website message can diverge | Review assets/copy each app release | Maintains message continuity through install | Low | Click-to-product-page and download rate |
| Low | Desktop may need a cross-device path | Test a first-party QR only if desktop under-converts | Can reduce desktop-to-phone friction without third-party requests | Low | Desktop App Store campaign continuation |

## Top five changes most likely to increase website-attributed installs

1. Activate click analytics and Apple campaign links so optimization can target installs rather than opinions.
2. Deploy the real-UI homepage hero and four-step product proof.
3. Publish the commercial-intent pediatric growth calculator landing page.
4. Publish the useful WHO growth-chart guide with inline and bottom product bridges.
5. Keep the delayed mobile sticky App Store action and measure it independently.

## Definition of success

The redesign succeeds when both of these move in the right direction over a meaningful comparison window:

- More qualified sessions reach the App Store.
- More first-time downloads are attributed to website campaign links.

Traffic, impressions, rankings, reading time, and design preference are diagnostic inputs—not the outcome.
