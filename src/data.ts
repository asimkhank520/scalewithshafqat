import { Service, Review, CaseStudy, FAQItem } from './types';

export const agencyInfo = {
  name: "Shafqat Saleem Digital Marketing Services",
  shortName: "ScaleWithShafqat",
  tagline: "High-Performance Facebook & Instagram Ads to Scale Your Revenue",
  subTagline: "Expert campaign management, funnel optimization, and high-ROI ad strategies crafted to transform clicks into loyal customers.",
  founder: "Shafqat Saleem",
  role: "Founder & Lead Paid Ads Strategist",
  phone: "0349 5092876",
  email: "contact@scalewithshafqat.com",
  whatsappUrl: "https://wa.me/message/YICJ7T3QQEB7A1",
  whatsappText: "Hi Shafqat, I would like to book a free digital marketing audit for my business!",
  facebookUrl: "https://www.facebook.com/ScaleWithShafqat.co",
  instagramUrl: "https://www.instagram.com/scalewithshafqat/",
  linkedinUrl: "https://pk.linkedin.com/in/shafqat-saleem-067b05261",
  pinterestUrl: "https://pin.it/6jfKQlT15",
  location: "AL AWAN TOWN MURAQBA HAL ATK, Attock, 43600",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shafqat+Saleem+Digital+Marketing+Services+AL+AWAN+TOWN+MURAQBA+HAL+ATK+Attock",
  googleRating: 5.0,
  googleReviewCount: 1,
  foundedYear: 2022,
};

export const services: Service[] = [
  {
    id: "fb-ig-ads",
    title: "Facebook & Instagram Ads",
    description: "End-to-end management of paid social campaigns. We build custom funnels that move cold audiences from initial awareness to high-value purchase events.",
    iconName: "Facebook",
    bullets: [
      "Custom Campaign Architecture (TOF, MOF, BOF)",
      "Pixel Setup & Meta Conversions API (CAPI) Integration",
      "Dynamic Product Ads (DPA) & Catalog Setup",
      "Daily Budget Pacing & Optimization",
      "A/B Split Testing of Offers & Visuals"
    ]
  },
  {
    id: "creative-strategy",
    title: "High-Converting Ad Creatives",
    description: "Ads that stand out in crowded feeds. We advise and design video hooks, static images, and ad copy backed by psychological frameworks.",
    iconName: "Flame",
    bullets: [
      "Scroll-Stopping Direct Response Ad Copywriting",
      "High-converting video script structures & templates",
      "Offer Crafting & Irresistible Hook Frameworks",
      "Creative Fatigue Prevention & Rotation",
      "Visual asset formatting for Feed vs Reels / Stories"
    ]
  },
  {
    id: "audience-targeting",
    title: "Laser-Targeted Audience Strategy",
    description: "Stop wasting money on irrelevant clicks. We pinpoint your ideal buyers using rigorous testing models and state-of-the-art custom parameters.",
    iconName: "Target",
    bullets: [
      "Custom Audience Creation (Warm Leads, Page Engagers)",
      "Lookalike Audience (LAL) stacking up to 10%",
      "Competitor and Interest Mapping Research",
      "Socio-demographic and Geographic tailoring",
      "Behavioral & Purchase Intent Exclusions"
    ]
  },
  {
    id: "funnel-optimization",
    title: "Conversion Funnel Auditing",
    description: "Ad budget is only half the battle. We analyze your website user journeys to solve leaks, improve conversion rates, and boost your AOV.",
    iconName: "TrendingUp",
    bullets: [
      "Website/Shopify Store UX Friction Audits",
      "Landing Page Optimization & Visual Flow Guidelines",
      "Frictionless Checkout Sequence Structuring",
      "Average Order Value (AOV) booster strategies",
      "Post-purchase sequence consultation"
    ]
  }
];

export const reviews: Review[] = [
  {
    id: "rev-1",
    author: "Zainab Malik",
    role: "E-commerce Founder",
    company: "Zaza Apparel",
    rating: 5,
    text: "Shafqat is a true paid ads specialist! Our ROAS rose from a stagnant 1.8x to a massive 4.5x within just 45 days. The Conversions API was setup perfectly, and our pixel data is finally clean. Highly recommended advertising agency!",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Hamza Abbasi",
    role: "Marketing Director",
    company: "SwiftLogix Solutions",
    rating: 5,
    text: "Outstanding expertise in Facebook and Instagram ads. Shafqat doesn't just push buttons; he understands the core marketing psychology, visual hooks, and scaling structures. Our cost-per-lead dropped by 42%.",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "rev-3",
    author: "Ayesha Khan",
    role: "CEO & Co-founder",
    company: "Luxe Decor PK",
    rating: 5,
    text: "Shafqat Saleem changed the trajectory of our online store. Our ad campaigns in Attock and overall Pakistan are now highly profitable. If you want to scale your business, he is the only expert you should call.",
    date: "1 month ago",
    verified: true
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    clientName: "Modish Wear Co.",
    industry: "E-commerce Fashion",
    image: "https://picsum.photos/seed/fashion/800/600",
    spend: "$3,200",
    revenue: "$16,800",
    roas: "5.25x",
    description: "Successfully scaled a local Pakistani clothing brand to premium national status by establishing high-performance retargeting lookalikes and rotating high-hook direct response creatives.",
    deliverables: [
      "Complete TOF/MOF/BOF funnel restructuring",
      "Catalog dynamic ad targeting for basket abandoners",
      "UGC-focused reel format creative iterations"
    ]
  },
  {
    id: "case-2",
    clientName: "Apex Properties",
    industry: "Real Estate Development",
    image: "https://picsum.photos/seed/estate/800/600",
    spend: "$1,500",
    revenue: "22 Closed Sales Leads",
    roas: "12.8x Est. ROI",
    description: "Generated highly qualified, pre-screened leads for luxury residential plots. Used strict demographic layering and interactive WhatsApp automation forms to screen out low-intent inquiries.",
    deliverables: [
      "Meta Instant Forms with screening questions",
      "Geographic interest stacking targeting high-net-worth buyers",
      "WhatsApp direct messaging follow-up automation"
    ]
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is your main advertising focus?",
    answer: "We focus 100% on high-performance Facebook & Instagram Ads. We specialize in scaling e-commerce brands, real estate leads, and local businesses by planning solid conversion funnels, pixel/CAPI setups, and engaging direct-response creatives."
  },
  {
    id: "faq-2",
    question: "What is the minimum ad budget needed to work together?",
    answer: "While we can test on smaller budgets, we generally recommend starting with at least $15-$20 (or PKR 4,000-5,000) per day for Facebook ads. This gives the Meta algorithm enough data to exit the learning phase and optimize for consistent purchases."
  },
  {
    id: "faq-3",
    question: "Do you design the ad creatives and write the copy?",
    answer: "Yes! We write high-converting direct-response copy, construct scroll-stopping hooks, and provide exact visual scripts/guidelines for your photos and videos. We also design high-click static graphics and formatting."
  },
  {
    id: "faq-4",
    question: "How do you track sales and leads accurately?",
    answer: "We implement the Meta Pixel along with the advanced Meta Conversions API (Server-Side Tracking) to bypass browser cookie blocks, iOS restrictions, and ad blockers. This ensures 99% data accuracy and drives lower CPA."
  },
  {
    id: "faq-5",
    question: "Where are you located and do you work internationally?",
    answer: "Our physical headquarters is in AL AWAN TOWN, Attock, Punjab, Pakistan. However, we serve clients globally—including e-commerce and lead-gen brands in the UK, USA, UAE, Saudi Arabia, and Gulf region."
  }
];
