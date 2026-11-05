export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  src: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  liveUrl: string;
  description: string;
  myRole: string;
  technologies: string[];
  screenshots: ProjectScreenshot[];
  keyHighlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: 'Sumit Kar',
  profession: 'Full-Stack Web Developer / Web Designer',
  titleKicker: 'DEVELOPER & DESIGNER',
  headline: {
    part1: 'Building Digital',
    part2: 'Experiences That',
    part3: 'Make an Impact.',
  },
  bio: "I'm Sumit Kar, a web developer passionate about crafting beautiful, high-performance, and user-focused digital experiences.",
  detailedAbout: `I am a full-stack web developer and designer based in New Delhi, dedicated to building websites that bridge the gap between aesthetic sophistication and technical engineering.

With a deep appreciation for clean code, typography, and responsive ergonomics, I collaborate with businesses and medical practices to transform complex requirements into seamless, intuitive digital platforms. My focus is on delivering modern web solutions that load in milliseconds, look stunning across all device viewports, and generate meaningful real-world impact.`,
  location: 'Hari Nagar Extension Part-2, Badarpur, New Delhi – 110044',
  locationShort: 'New Delhi, India',
  phone: '+91 7982338478',
  phoneFormatted: '+91 7982338478',
  email: 'sumitkar78@gmail.com',
  whatsappUrl: 'https://wa.me/917982338478',
  instagramUsername: '@ka_sumit',
  instagramUrl: 'https://instagram.com/ka_sumit',
  linkedinUrl: 'https://www.linkedin.com/in/sumit-kar-b016b3171',
  portraitUrl: '/assets/sk_business_logo.png',
  businessLogoUrl: '/assets/sk_business_logo.png',
  workspaceUrl: '/src/assets/images/designer_studio_workspace_1793794963619.jpg',
  availability: 'AVAILABLE FOR SELECT PROJECTS',
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'nagpal-clinic',
    title: 'Nagpal Clinic & Ultrasound',
    category: 'Healthcare & Clinical Diagnostics',
    liveUrl: 'https://nagpalclinic.com/',
    description:
      'A comprehensive clinical web platform designed and developed for Nagpal Clinic & Ultrasound in Sarita Vihar, New Delhi. Provides patients with an intuitive digital touchpoint to explore diagnostic ultrasound services, consult experienced surgeons and sonologists, and book clinical appointments in under 60 seconds.',
    myRole: 'Lead Web Developer & UI Designer — Architecture, Frontend Development, Responsive Layout & Integration',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Google Maps API',
      'WhatsApp Integration',
      'Responsive Web Design',
    ],
    screenshots: [
      {
        id: 'nagpal-hero',
        title: 'Hero Section & Clinical Value Proposition',
        caption: 'Welcoming healthcare interface with direct appointment booking CTA, telephone helpline access, and local Sarita Vihar clinical trust markers.',
        src: '/assets/aistudio/image_5a46421a.png',
      },
      {
        id: 'nagpal-booking',
        title: 'Online Appointment Booking & Location Hub',
        caption: 'Structured Quick Desk appointment form with slot preferences, Google Map direction preview, and direct WhatsApp connect.',
        src: '/assets/aistudio/image_651ad7c1.png',
      },
    ],
    keyHighlights: [
      '60-second online clinical appointment booking flow',
      'Dual emergency helpline integration & WhatsApp consultation',
      'Interactive location directions with Street View photo previews',
      'Transparent operating hours (Morning & Evening OPD slots)',
    ],
  },
  {
    id: 'health-bandhan',
    title: 'HealthBandhan',
    category: 'Multi-Specialty Clinic & Eye Care',
    liveUrl: 'https://healthbandhan.com/',
    description:
      'A sleek, patient-first web application for HealthBandhan combining comprehensive ophthalmology, state-of-the-art 3D/4D ultrasound imaging, and online appointment scheduling. Deployed on high-performance Netlify edge infrastructure with sub-second page loads.',
    myRole: 'Full-Stack Web Developer & UI/UX Specialist — Web Design, Component Architecture & Netlify Edge Deployment',
    technologies: [
      'React',
      'Tailwind CSS',
      'Netlify Edge CDN',
      'Responsive Architecture',
      'Accessible Typography',
      'Performance Optimization',
    ],
    screenshots: [
      {
        id: 'healthbandhan-hero',
        title: 'Hero Banner & Verified Practice Metrics',
        caption: 'High-contrast hero showcasing patient volume, 4.9-star rating, and 10+ years clinical experience with instant online booking.',
        src: '/assets/aistudio/image_14f82ff1.png',
      },
      {
        id: 'healthbandhan-about',
        title: 'Modern Clinic Diagnostic Capabilities',
        caption: 'Multi-column clinical feature grid highlighting Advanced Eye Care, 3D/4D Ultrasound, and 98% patient satisfaction rating.',
        src: '/assets/aistudio/image_91f5d006.png',
      },
    ],
    keyHighlights: [
      'High-impact visual hero featuring 15K+ patients served and 4.9 rating',
      'Comprehensive eye care & 3D/4D diagnostic equipment showcases',
      '98% verified patient satisfaction highlight',
      'Sub-second page delivery powered by Netlify edge hosting',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description:
      'Custom, high-speed, and secure web applications built with modern frontend frameworks and clean, maintainable code architecture.',
    deliverables: ['Custom Web Applications', 'SPA Development', 'Clean & Scalable Code'],
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    description:
      'Pixel-perfect, fluid layouts engineered for seamless usability across mobile smartphones, tablets, and ultra-wide desktops.',
    deliverables: ['Mobile-First Physics', 'Fluid Typography Scales', 'Cross-Browser Testing'],
  },
  {
    id: 'ui-ux-implementation',
    title: 'UI/UX Implementation',
    description:
      'Translating creative vision into accessible, intuitive, and engaging user interfaces with delightful microinteractions.',
    deliverables: ['Design Systems', 'Interactive Prototypes', 'Accessible Contrast (WCAG)'],
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    description:
      'Professional corporate and clinic web presences built to establish strong digital credibility and drive customer inquiries.',
    deliverables: ['Corporate Portals', 'Clinic & Healthcare Sites', 'Trust-Centered Funnels'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Development',
    description:
      'High-converting, focused landing pages structured to communicate value propositions clearly and turn visitors into leads.',
    deliverables: ['Lead Generation Pages', 'Campaign Microsites', 'Fast Interactive Forms'],
  },
  {
    id: 'website-optimization',
    title: 'Website Optimization',
    description:
      'Performance tuning, Core Web Vitals optimization, asset compression, and technical SEO structure for top search placement.',
    deliverables: ['Sub-Second Page Loads', 'Zero Cumulative Layout Shift', 'Schema.org SEO Markup'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'React', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 & Semantic Markup' },
      { name: 'CSS3 / Modern CSS Architecture' },
    ],
  },
  {
    category: 'Frameworks & Build Tools',
    skills: [
      { name: 'Vite', highlight: true },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Git & GitHub Version Control' },
      { name: 'NPM Package Ecosystem' },
    ],
  },
  {
    category: 'UI/UX & Design Systems',
    skills: [
      { name: 'Responsive Web Design', highlight: true },
      { name: 'Mobile-First Architecture', highlight: true },
      { name: 'Microinteractions & Motion' },
      { name: 'Design Tokens & Typography' },
      { name: 'WCAG Accessibility Standards' },
      { name: 'Cross-Device QA' },
    ],
  },
  {
    category: 'Performance & Deployment',
    skills: [
      { name: 'Netlify Edge Deployment', highlight: true },
      { name: 'Core Web Vitals Optimization', highlight: true },
      { name: 'Technical SEO & JSON-LD Schema' },
      { name: 'Asset Compression & WebP' },
      { name: 'Fast First Contentful Paint' },
      { name: 'WhatsApp API & CRM Routing' },
    ],
  },
];
