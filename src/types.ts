export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bullets: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  avatarUrl?: string;
  date: string;
  verified: boolean;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  image: string;
  spend: string;
  revenue: string;
  roas: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
