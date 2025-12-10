import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Aider",
  avatar: "./aider.jpg",
  title: "Cybersecurity Specialist & Backend Developer",
  tagline: "Bridging the gap between offensive security operations and secure backend architecture.",
  about: `I am a cybersecurity specialist with a strong focus on Red Team and Blue Team practices, ethical hacking, and security auditing. My experience includes vulnerability assessment, system hardening, penetration testing, and analyzing real-world attack vectors across networks, web applications, and cloud environments. I approach security from both the attacker and defender mindset, allowing me to identify weaknesses and design practical mitigation strategies.

Alongside my security expertise, I work as a backend and web developer with proficiency in Python, Django, HTML, CSS/SCSS, and API-based system integration. I build structured, reliable components such as admin panels, Telegram bots, and service miniapps, with security as a foundational principle rather than an afterthought.

I am driven by solving complex technical problems, strengthening digital systems, and creating secure, efficient tools that support both business goals and user needs.`,
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Shipped", value: "30+" },
    { label: "Tech Stack", value: "15+" },
    { label: "Certifications", value: "3" }
  ],
  languages: [
    { language: "English", proficiency: "Professional Working" },
    { language: "Russian", proficiency: "Native / Bilingual" }
  ],
  services: [
    {
      id: "srv-1",
      title: "IT Infrastructure & Security",
      description: "Network security protocols, system administration, and web penetration testing using Kali Linux.",
      icon: "shield"
    },
    {
      id: "srv-2",
      title: "Data & Financial Analytics",
      description: "Advanced data analysis, financial reporting, and workflow optimization using Python and Excel.",
      icon: "chart"
    },
    {
      id: "srv-3",
      title: "Digital Media & Video",
      description: "Professional video editing, content creation, and motion graphics using Adobe Premiere and CapCut.",
      icon: "video"
    }
  ],
  skills: [
    {
      category: "Core Technologies",
      skills: ["JavaScript", "HTML5", "CSS3/SCSS", "Python"],
      icon: "code"
    },
    {
      category: "Video Editing",
      skills: ["CapCut", "Adobe Premiere Pro"],
      icon: "video"
    },
    {
      category: "Web Penetration",
      skills: ["Kali Linux"],
      icon: "shield"
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "Figma"],
      icon: "tool"
    },
    {
      category: "IT Support & Operations",
      skills: ["Microsoft Office", "Windows OS Mgmt", "Problem Solving"],
      icon: "cpu"
    }
  ],
  experience: [
    {
      id: "exp-3",
      role: "IT Specialist",
      company: "British Management University",
      period: "Sep 2024 - Mar 2025",
      description: "Managed campus IT infrastructure and provided technical support for faculty and students. Optimized learning management systems and oversaw network security protocols to ensure seamless academic operations.",
      skills: ["System Admin", "Network Security", "LMS", "IT Support"]
    },
    {
      id: "exp-2",
      role: "Accounting Department Intern",
      company: "Qanot Sharq",
      period: "Jun 2024 - Jul 2024",
      description: "Assisted with financial data analysis and reporting. Streamlined spreadsheet workflows and collaborated with the finance team on month-end closing procedures and documentation.",
      skills: ["Data Analysis", "Excel", "Financial Reporting", "Auditing"]
    },
    {
      id: "exp-1",
      role: "IT Intern",
      company: "Ipoteka Bank",
      period: "May 2021 - Jun 2021",
      description: "Provided technical assistance for banking software systems. Supported the IT team in hardware maintenance, network troubleshooting, and database management tasks.",
      skills: ["Technical Support", "Banking Systems", "Networking", "Database Mgmt"]
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Accounting & Finance",
      institution: "British Management University",
      period: "2021 - 2026",
      description: "Integrating financial principles with technical system analysis and secure data management."
    }
  ],
  certifications: [
    {
      id: "cert-3",
      name: "Connect and Protect: Networks and Network Security",
      issuer: "Google / Coursera",
      year: "2025"
    },
    {
      id: "cert-2",
      name: "Tools of the Trade: Linux and SQL",
      issuer: "Google / Coursera",
      year: "2025"
    },
    {
      id: "cert-1",
      name: "Foundations of Cybersecurity",
      issuer: "Google / Coursera",
      year: "2025"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "IT Service Automation Suite",
      description: "Developed a secure ecosystem combining a Telegram bot for support tickets and a Django admin panel for asset tracking, improving response times by 60%.",
      tech: ["Python", "Django", "Telegram API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj-2",
      title: "Network Vulnerability Scanner",
      description: "Built custom Python tools integrated with Kali Linux to automate reconnaissance, port scanning, and vulnerability assessment reports for simulated red team ops.",
      tech: ["Kali Linux", "Python", "Bash", "Network Security"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj-3",
      title: "Multimedia Content Production",
      description: "Produced and edited a series of high-quality technical explainer videos and corporate promotional content using advanced motion graphics.",
      tech: ["Adobe Premiere", "CapCut", "Motion Graphics", "Storyboarding"],
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800"
    }
  ],
  contact: {
    email: "aiderparmankulov@gmail.com",
    location: "Uzbekistan",
    socials: [
      { platform: "GitHub", url: "https://github.com", icon: "github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/aider-parmankulov-478b18205", icon: "linkedin" },
      { platform: "Telegram", url: "https://t.me/Air_A_P", icon: "telegram" }
    ]
  }
};