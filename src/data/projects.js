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
    tools: ["Guesstimate", "User Cohort Modeling", "Review Propensity"],
    link: "/chinmay-portfolio/docs/Zomato_GT.pdf",
    gradient: "from-red-500 to-pink-600"
  }
];
