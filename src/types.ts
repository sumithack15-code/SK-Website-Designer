export interface ProjectHotspot {
  id: string;
  xPercent: number; // 0 to 100% position on screenshot
  yPercent: number;
  label: string;
  rationale: string;
}

export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  src: string;
  aspectRatio?: string;
  hotspots?: ProjectHotspot[];
}

export interface DesignSystemSpec {
  primaryPalette: { name: string; hex: string; usage: string }[];
  typeScale: { role: string; family: string; size: string }[];
  principles: string[];
}

export interface Project {
  id: string;
  name: string;
  domain: string;
  tagline: string;
  category: string;
  client: string;
  location: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
    detail?: string;
  }[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  liveFeatures: string[];
  designSystem?: DesignSystemSpec;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  clinicOrOrg: string;
  location: string;
  rating: number;
  quote: string;
  projectAssociated: string;
  verifiedMetric: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string;
  badge?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  selectedFeatures: string[];
  message: string;
}
