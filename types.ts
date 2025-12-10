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

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  name: string;
  avatar?: string;
  title: string;
  tagline: string;
  about: string;
  stats: { label: string; value: string }[];
  services: Service[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  projects: Project[];
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