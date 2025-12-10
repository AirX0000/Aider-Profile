export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  stats: { label: string; value: string }[];
  services: Service[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  contact: {
    email: string;
    phone?: string;
    location?: string;
    socials: SocialLink[];
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}