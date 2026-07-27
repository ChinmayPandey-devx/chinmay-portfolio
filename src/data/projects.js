export const projects = [
  {
    id: 1,
    title: "Designing Netflix for Senior Citizens",
    company: "Netflix",
    logoDomain: "netflix.com",
    category: "Product Design",
    summary: "Designed a tailored Netflix experience to solve low engagement among senior citizens (60+). Developed solutions for weak eyesight, complex email signups, and overwhelming catalog choices using mobile OTP logins, voice navigation, and simplified font controls.",
    highlights: [
      "Mapped user journey pain points across signup, payment, navigation, and playback",
      "Prioritized solutions using the RICE framework (Reach, Impact, Confidence, Effort)",
      "Selected MVP features: Phone/OTP login, language selector, voice search/nav, larger fonts",
      "Defined success metrics: OTP signup adoption, voice activation rate, and session time"
    ],
    problemStatement: "Design Netflix for senior citizens (60+) in India to increase average engagement time and session duration.",
    clarifyingQuestions: [
      { q: "Target Audience", a: "Senior citizens above age 60 (both genders) in India." },
      { q: "Core Goal", a: "Increase average engagement time by removing physical & digital usage blockers." },
      { q: "Disabilities to consider", a: "Eyesight weakness, lack of email accounts, tech unfamiliarity." }
    ],
    userJourneyPainPoints: [
      "SignUp: Senior citizens often lack email addresses for traditional signup.",
      "Payments: Difficulty setting up recurring digital payments independently.",
      "Content Discovery: Choice overload and overwhelmed by irrelevant content.",
      "App Navigation: Finding language settings, audio tracks, and subtitles."
    ],
    riceTable: [
      { feature: "OTP Based Mobile Login", reach: "5/5", impact: "5/5", confidence: "100%", effort: "2/5", score: "12.5", status: "Must Have (MVP)" },
      { feature: "Language Selection at Start", reach: "5/5", impact: "5/5", confidence: "100%", effort: "2/5", score: "12.5", status: "Must Have (MVP)" },
      { feature: "Voice Enabled Search & Nav", reach: "3/5", impact: "4/5", confidence: "100%", effort: "2-4/5", score: "3.0", status: "Should Have (MVP)" },
      { feature: "Bigger Fonts UI Mode", reach: "3/5", impact: "3/5", confidence: "100%", effort: "1/5", score: "9.0", status: "Could Have (MVP)" }
    ],
    metrics: [
      { name: "Acquisition", detail: "# of senior citizens signing up via OTP flow" },
      { name: "Activation", detail: "% of users engaging via voice search & navigation" },
      { name: "North Star Metric", detail: "% increase in average session duration among senior users" }
    ],
    tools: ["Product Design", "RICE Prioritization", "Voice UI", "UX Research"],
    link: "/chinmay-portfolio/docs/Netflix_PD.pdf",
    gradient: "from-red-600 to-rose-700"
  },
  {
    id: 2,
    title: "Accessible Uber Platform for Disabled Passengers",
    company: "Uber",
    logoDomain: "uber.com",
    category: "Product Design",
    summary: "Designed an end-to-end accessible ride-sharing platform for passengers with physical, visual, hearing, and cognitive disabilities, as well as secondary caregivers. Prioritized accessible app flows, driver sensitivity training, and retrofit vehicles.",
    highlights: [
      "Evaluated mobility, booking, and communication barriers across 4 disability profiles",
      "Structured RICE prioritization framework across app, driver, fleet, and communication layers",
      "Defined high-impact MVP: Accessible App (voice booking, caregiver mode, large fonts) and driver sensitivity badges",
      "Established North Star Metric: % increase in monthly completed rides by disabled users"
    ],
    problemStatement: "How would you design an Uber-like car sharing platform for disabled users and their caregivers?",
    clarifyingQuestions: [
      { q: "User Scope", a: "Primary: Passengers with physical, visual, hearing, or cognitive disabilities. Secondary: Caregivers." },
      { q: "Fleet Strategy", a: "Retrofit/certify existing vehicles while scaling dedicated fleets in long term." },
      { q: "Booking Modes", a: "Support both scheduled rides (medical visits) and on-demand daily rides." }
    ],
    userJourneyPainPoints: [
      "Physical Disabilities: Lack of wheelchair ramps, low entry access, and wheelchair storage.",
      "Visual Impairment: Screen reader compatibility, car identification at pickup, audio navigation.",
      "Hearing/Speech Impairment: In-app communication barriers with drivers.",
      "Dignity & Safety: Driver sensitivity, assistance with door-to-door mobility."
    ],
    riceTable: [
      { feature: "Accessible App (Voice, Caregiver, Large Font)", reach: "5/5", impact: "4/5", confidence: "100%", effort: "2/5", score: "10.0", status: "MVP Priority 1" },
      { feature: "Driver Training & Certification Badges", reach: "4/5", impact: "5/5", confidence: "100%", effort: "3/5", score: "6.7", status: "MVP Priority 2" },
      { feature: "Accessible Vehicle Fleet (Ramps & Locks)", reach: "5/5", impact: "5/5", confidence: "90%", effort: "5/5", score: "4.5", status: "Phase 2 Scaling" }
    ],
    metrics: [
      { name: "Acquisition", detail: "# of disabled users registering monthly" },
      { name: "Engagement", detail: "Repeat rides per user & % booked via caregiver mode" },
      { name: "North Star Metric", detail: "% increase in monthly completed rides by disabled users" }
    ],
    tools: ["Product Design", "RICE Framework", "Accessibility", "Caregiver Mode"],
    link: "/chinmay-portfolio/docs/PD_Uber.pdf",
    gradient: "from-slate-900 to-gray-800"
  },
  {
    id: 3,
    title: "Amazon Prime User Retention Drop Analysis",
    company: "Amazon",
    logoDomain: "amazon.com",
    category: "RCAs",
    summary: "Investigated a 5% drop in 4-day and 7-day user retention across Amazon Prime. Isolated internal revenue model changes to discover that charging Prime subscribers extra for movie/web-series rentals caused significant churn post-search.",
    highlights: [
      "Diagnosed retention drop across 4-day and 7-day returning user cohorts",
      "Evaluated external market factors vs. internal revenue model changes",
      "Identified core friction: new movie rental fee imposed on existing Prime subscribers",
      "Analyzed search-to-watch funnel drop-off for rental-tagged content"
    ],
    problemStatement: "You are a PM at Amazon and notice a 5% drop in user retention on Amazon Prime over 10 days. Identify the root cause.",
    clarifyingQuestions: [
      { q: "Metric Definition", a: "Retention measured by users returning 4 or 7 days post initial visit." },
      { q: "Product Scope", a: "Specific to Amazon Prime video platform across both App and Web." },
      { q: "Decline Behavior", a: "Gradual decline occurring over the past 10 days globally across all genres." }
    ],
    userJourneyPainPoints: [
      "External Check: No new competitor entry, pricing shifts, or major regulatory/PR impact.",
      "Internal Release Check: Introduced a new Movie/Series Rental model charging extra fees.",
      "Funnel Drop-off: Search queries remained steady, but users dropped off sharply after seeing rental price badges."
    ],
    riceTable: [
      { feature: "Clear Rental Badging Pre-Search", reach: "5/5", impact: "4/5", confidence: "100%", effort: "1/5", score: "20.0", status: "Immediate Fix" },
      { feature: "Prime Rental Credits / Discounts", reach: "4/5", impact: "5/5", confidence: "90%", effort: "2/5", score: "9.0", status: "Recommended" }
    ],
    metrics: [
      { name: "Primary Metric", detail: "4-day and 7-day Amazon Prime user retention rate" },
      { name: "Funnel Metric", detail: "Search-to-play conversion rate on Prime Video content" }
    ],
    tools: ["Root Cause Analysis", "Retention Cohorts", "Funnel Drop-off"],
    link: "/chinmay-portfolio/docs/Amazon_RCA.pdf",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 4,
    title: "Google Maps Daily Active Users (DAU) Drop Analysis",
    company: "Google",
    logoDomain: "google.com",
    category: "RCAs",
    summary: "Analyzed a 10% global drop in individual navigation DAUs on Google Maps. Traced the root cause to latency issues during search execution, causing immediate user drop-offs due to delayed map search index responses and unoptimized high-res image payloads.",
    highlights: [
      "Evaluated global DAU decline across individual navigation workflows",
      "Isolated internal technical latency vs. external market/regulatory factors",
      "Pinpointed immediate post-search drop-off driven by search index delays",
      "Recommended search index optimization and image payload compression"
    ],
    problemStatement: "PM at Google observing a 10% drop in Daily Active Users (DAUs) using Google Maps for navigation globally over 1 week.",
    clarifyingQuestions: [
      { q: "DAU Scope", a: "Individual users navigating on Google Maps (excluding API/ride-share integrations)." },
      { q: "Timeline & Geo", a: "Global drop occurring across both iOS and Android for 1 week." },
      { q: "Sanity Check", a: "Metric definitions and tracking telemetry confirmed working accurately." }
    ],
    userJourneyPainPoints: [
      "External Check: No competitor releases or environmental disruptions.",
      "Internal Check: No new features deployed, but severe search latency observed.",
      "Funnel Pinpoint: Users opened app and entered search, but dropped off immediately due to search loading delays."
    ],
    riceTable: [
      { feature: "Search Index Latency Optimization", reach: "5/5", impact: "5/5", confidence: "100%", effort: "2/5", score: "12.5", status: "Priority 1" },
      { feature: "Map Image Asset Compression", reach: "4/5", impact: "4/5", confidence: "100%", effort: "1/5", score: "16.0", status: "Priority 2" }
    ],
    metrics: [
      { name: "Primary Metric", detail: "Navigation DAU recovery to baseline" },
      { name: "Performance Metric", detail: "Map Search Response Time (p95 latency < 200ms)" }
    ],
    tools: ["Root Cause Analysis", "DAU Metrics", "Search Latency", "Technical Diagnostics"],
    link: "/chinmay-portfolio/docs/Google_RCA.pdf",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: 5,
    title: "Uber Ride Cancellation Rate Increase Analysis",
    company: "Uber",
    logoDomain: "uber.com",
    category: "RCAs",
    summary: "Investigated a 5% increase in user-initiated cancellations on Uber Go in India over a 2-3 month period. Discovered that cancellations occurred post-booking after driver-rider contact due to drivers demanding offline rides or unbundled extra toll/parking fees.",
    highlights: [
      "Analyzed 2-3 month gradual cancellation trends on Uber Go in India",
      "Mapped post-booking customer journey and driver communication touchpoints",
      "Identified driver offline ride demands and unbundled toll charges as main root causes",
      "Formulated driver penalty policies, milestone rewards, and integrated fare toll transparency"
    ],
    problemStatement: "PM at Uber investigating a 5% increase in ride cancellations on Uber Go in India over 2-3 months.",
    clarifyingQuestions: [
      { q: "Affected Tier", a: "Economy ride segment (Uber Go) across India." },
      { q: "Decline Profile", a: "Gradual ongoing increase over 2-3 months on both iOS and Android." }
    ],
    userJourneyPainPoints: [
      "Timing: Cancellations occurred AFTER booking confirmation and AFTER driver-rider call.",
      "Driver Demands: Drivers asking riders to cancel and take an offline cash ride.",
      "Toll Disagreements: Confusion and arguments regarding toll/parking fee payments."
    ],
    riceTable: [
      { feature: "Automatic Toll Inclusion in Upfront Fare", reach: "5/5", impact: "5/5", confidence: "100%", effort: "2/5", score: "12.5", status: "Immediate Action" },
      { feature: "Offline Ride Cancellation Penalties & Driver Rewards", reach: "4/5", impact: "4/5", confidence: "90%", effort: "2/5", score: "7.2", status: "Policy & Product Fix" }
    ],
    metrics: [
      { name: "Primary Metric", detail: "% reduction in post-booking user cancellation rate" },
      { name: "Operational Metric", detail: "Driver trip completion rate on Uber Go" }
    ],
    tools: ["Root Cause Analysis", "Cancellation Funnel", "Driver Incentive Model"],
    link: "/chinmay-portfolio/docs/Uber_RCA.pdf",
    gradient: "from-slate-800 to-gray-900"
  },
  {
    id: 6,
    title: "YouTube Long-Form Average View Duration Drop Analysis",
    company: "YouTube",
    logoDomain: "youtube.com",
    category: "RCAs",
    summary: "Analyzed a 20% drop in Average View Duration for videos >5 minutes following the 2020 launch of YouTube Shorts. Found that Shorts fragmented user attention spans and altered session intent, leading to earlier exits on long-form content.",
    highlights: [
      "Investigated 20% view duration drop in >5 min videos post-Shorts rollout",
      "Analyzed user session intent shifts from long-form focus to short-form consumption",
      "Discovered attention fragmentation reducing user patience for slow video intros",
      "Formulated content recommendation and session pacing insights"
    ],
    problemStatement: "PM at YouTube investigating a 20% drop in Average View Duration for long-form videos (>5 min) in 2020.",
    clarifyingQuestions: [
      { q: "Service Impacted", a: "Main YouTube video sharing platform worldwide." },
      { q: "Video Segment", a: "Videos with duration greater than 5 minutes." },
      { q: "Internal Changes", a: "Recent launch of YouTube Shorts (short videos <90 secs)." }
    ],
    userJourneyPainPoints: [
      "Session Intent Shift: Users landing on feed encounter Shorts and switch to rapid consumption.",
      "Attention Decay: Watching Shorts reduces patience for long introductions on >5 min videos.",
      "Early Exits: Users exit long-form content earlier even if overall DAU/MAU remains steady."
    ],
    riceTable: [
      { feature: "Optimized Feed Separation & Session Intent Matching", reach: "5/5", impact: "4/5", confidence: "90%", effort: "3/5", score: "6.0", status: "Algorithmic Fix" },
      { feature: "Creator Intro Pacing & Chapter Recommendations", reach: "4/5", impact: "4/5", confidence: "80%", effort: "2/5", score: "6.4", status: "Feature Enhancement" }
    ],
    metrics: [
      { name: "Primary Metric", detail: "Average View Duration on >5 min videos" },
      { name: "Balance Metric", detail: "Total watch hours across Shorts vs Long-Form content" }
    ],
    tools: ["Root Cause Analysis", "Attention Metrics", "Product Cannibalization"],
    link: "/chinmay-portfolio/docs/YT_RCA.pdf",
    gradient: "from-red-600 to-rose-600"
  },
  {
    id: 7,
    title: "Indian Airspace Airborne Planes Estimation",
    company: "Netflix",
    logoDomain: "netflix.com",
    category: "Guesstimates",
    summary: "Modeled a bottom-up estimation framework to calculate the average number of domestic passenger planes airborne over India at any instant. Combined airport throughput, runway utilization rates, and average flight durations to estimate ~900 planes in the air.",
    highlights: [
      "Applied bottom-up airport throughput equation: Airports × Takeoffs/hr × Flight Duration",
      "Segmented 88 Indian airports into Busy (8), Intermediate (30), and Occasional (50)",
      "Calculated ~10,752 daily flights with a 2-hour average flight duration",
      "Concluded average concurrency of ~896 (~900) domestic passenger aircraft airborne"
    ],
    problemStatement: "Estimate the number of domestic passenger planes airborne over India at any average instant.",
    clarifyingQuestions: [
      { q: "Scope", a: "Domestic passenger flights within India on a typical non-peak day." },
      { q: "Time Basis", a: "Average moment over a 24-hour daily period." }
    ],
    userJourneyPainPoints: [
      "Busy Airports (8): 3 runways, 1 flight every 5 mins per runway = 6,912 flights/day.",
      "Intermediate Airports (30): 1 runway, 75% utilization = 3,240 flights/day.",
      "Occasional Airports (50): 1 runway, 25% utilization = 600 flights/day."
    ],
    riceTable: [
      { feature: "Total Daily Flights", reach: "10,752 flights/day", impact: "--", confidence: "--", effort: "--", score: "--", status: "Step 1" },
      { feature: "Avg Flight Duration", reach: "2.0 Hours", impact: "--", confidence: "--", effort: "--", score: "--", status: "Step 2" },
      { feature: "Concurrent Airborne Planes", reach: "~896 (~900 Planes)", impact: "--", confidence: "--", effort: "--", score: "--", status: "Final Answer" }
    ],
    metrics: [
      { name: "Sanity Check", detail: "Verified against DGCA daily aircraft movements in Indian airspace (~900 planes concurrent)" }
    ],
    tools: ["Guesstimate", "Bottom-up Modeling", "Airport Throughput"],
    link: "/chinmay-portfolio/docs/Netflix_GT.pdf",
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    id: 8,
    title: "Swiggy Peak-Hour Food Delivery Orders Estimation",
    company: "Swiggy",
    logoDomain: "swiggy.com",
    category: "Guesstimates",
    summary: "Built a top-down market sizing framework to estimate peak-hour food delivery order volume for Swiggy across India. Segmented urban internet users, age demographics, Swiggy market share, and peak weekend ordering patterns to arrive at ~3 lakh orders/hour.",
    highlights: [
      "Applied top-down demographic filtering: 140Cr India pop → Urban (30%) → Smartphone users (75%) → Age 15-50 (60%)",
      "Evaluated 35% Swiggy market share across Power, Active, and Passive ordering cohorts",
      "Estimated 25 lakh daily weekend orders with 25% concentrated during 8 PM - 10 PM peak",
      "Performed sanity check against Swiggy's 2023 published 25–32.5 lakh daily order baseline"
    ],
    problemStatement: "Estimate the number of food delivery orders delivered by Swiggy per hour during peak hours in India.",
    clarifyingQuestions: [
      { q: "Business Segment", a: "Swiggy Food Delivery across all India on a weekend." },
      { q: "Peak Hours", a: "8 PM to 10 PM dinner peak." }
    ],
    userJourneyPainPoints: [
      "Population Sizing: 140Cr -> 42Cr Urban -> 29Cr Smartphone -> 17Cr Age 15-50 -> 8Cr Online Food Users.",
      "Swiggy Share (35%): 2.8 Crore total ordering customers.",
      "User Cohorts: Power Users (8 meals/mo), Active (4 meals/mo), Passive (1 meal/mo)."
    ],
    riceTable: [
      { feature: "Monthly Swiggy Orders", reach: "6.9 Crore / month", impact: "--", confidence: "--", effort: "--", score: "--", status: "Monthly Base" },
      { feature: "Weekend Daily Orders", reach: "25 Lakh orders / day", impact: "--", confidence: "--", effort: "--", score: "--", status: "Daily Peak Base" },
      { feature: "Peak-Hour Orders (8-10 PM)", reach: "~3 Lakh orders / hour", impact: "--", confidence: "--", effort: "--", score: "--", status: "Final Answer" }
    ],
    metrics: [
      { name: "Sanity Check", detail: "Cross-checked with Swiggy 2023 baseline (~25-32.5 lakh daily orders)" }
    ],
    tools: ["Guesstimate", "Top-down Market Sizing", "Demographics"],
    link: "/chinmay-portfolio/docs/Swiggy_GT.pdf",
    gradient: "from-orange-500 to-amber-600"
  },
  {
    id: 9,
    title: "Zomato Annual In-App Customer Reviews Estimation",
    company: "Zomato",
    logoDomain: "zomato.com",
    category: "Guesstimates",
    summary: "Developed a multi-tier top-down estimation model to calculate total annual in-app reviews posted on Zomato in India. Combined urban food delivery population sizing, user order frequencies, and reviewer behavior profiles to estimate ~13 crore annual reviews.",
    highlights: [
      "Modeled 50% Zomato market share across 10Cr online food ordering users in India",
      "Segmented annual order volume (320Cr orders/yr) across Power, Active, and Passive users",
      "Categorized reviewer propensity: Power (10%), Active (2%), and Passive (1%) reviewers",
      "Calculated ~0.04 avg reviews per order yielding ~12.8Cr (~13 Crore) total yearly reviews"
    ],
    problemStatement: "Estimate total in-app customer reviews posted on Zomato in India in one year.",
    clarifyingQuestions: [
      { q: "Review Scope", a: "In-app reviews on iOS & Android for Zomato India over 1 year." }
    ],
    userJourneyPainPoints: [
      "User Sizing: 10Cr online food orderers x 50% Zomato share = 5 Crore ordering users.",
      "Annual Order Volume: Power (180Cr/yr) + Active (120Cr/yr) + Passive (18Cr/yr) = ~320 Crore orders/yr.",
      "Review Propensity: Power (10%), Active (2%), Passive (1%) -> Avg 0.04 reviews/order."
    ],
    riceTable: [
      { feature: "Total Yearly Orders", reach: "320 Crore orders / year", impact: "--", confidence: "--", effort: "--", score: "--", status: "Order Base" },
      { feature: "Avg Review Conversion", reach: "0.04 reviews / order", impact: "--", confidence: "--", effort: "--", score: "--", status: "Review Rate" },
      { feature: "Annual Posted Reviews", reach: "~12.8Cr (~13 Crore reviews)", impact: "--", confidence: "--", effort: "--", score: "--", status: "Final Answer" }
    ],
    metrics: [
      { name: "Key Metric", detail: "Annual in-app reviews count (~130 million reviews/year)" }
    ],
    tools: ["Guesstimate", "User Cohort Modeling", "Review Propensity"],
    link: "/chinmay-portfolio/docs/Zomato_GT.pdf",
    gradient: "from-red-500 to-pink-600"
  }
];
