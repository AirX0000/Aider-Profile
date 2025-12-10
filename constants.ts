import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Alex Dev",
  title: "Creative Frontend Engineer",
  tagline: "Bridging the gap between design and engineering with immersive 3D web experiences.",
  about: "I am a Senior Creative Developer with over 6 years of experience specializing in the intersection of design and code. My expertise lies in building high-performance React applications enriched with WebGL animations. I treat the browser as a canvas, ensuring every pixel serves a purpose while maintaining accessibility and SEO standards.",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Shipped", value: "45+" },
    { label: "Clients Served", value: "30+" },
    { label: "Awards Won", value: "5" }
  ],
  services: [
    {
      id: "srv-1",
      title: "Frontend Architecture",
      description: "Scalable, maintainable React application structures using modern state management and component patterns.",
      icon: "layout"
    },
    {
      id: "srv-2",
      title: "3D Web Experiences",
      description: "Immersive product showcases and interactive landing pages using Three.js and WebGL.",
      icon: "box"
    },
    {
      id: "srv-3",
      title: "UI/UX Engineering",
      description: "Translating complex design systems into pixel-perfect, responsive, and accessible code.",
      icon: "palette"
    }
  ],
  skills: [
    {
      category: "Core Technologies",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SCSS", "Python"],
      icon: "code"
    },
    {
      category: "Frameworks & Libs",
      skills: ["React", "Next.js", "Vue.js", "TailwindCSS", "Framer Motion", "GSAP"],
      icon: "layers"
    },
    {
      category: "3D & Graphics",
      skills: ["Three.js", "React Three Fiber", "WebGL", "GLSL Shaders", "Blender"],
      icon: "cpu"
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Webpack", "Vite", "Docker", "AWS", "Figma"],
      icon: "tool"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Frontend Engineer",
      company: "Nebula Tech",
      period: "2021 - Present",
      description: "Leading the frontend architecture for the core SaaS product. Implemented 3D visualization tools using WebGL, improving user engagement by 40%. Mentored a team of 5 developers and established internal coding standards.",
      skills: ["React", "Three.js", "WebGL", "TypeScript", "Node.js"]
    },
    {
      id: "exp-2",
      role: "UI/UX Developer",
      company: "Creative Pulse Agency",
      period: "2018 - 2021",
      description: "Developed award-winning marketing sites for Fortune 500 clients. Focused on micro-interactions, accessibility, and performance optimization (Core Web Vitals).",
      skills: ["Vue.js", "GSAP", "SCSS", "Figma"]
    },
    {
      id: "exp-3",
      role: "Junior Web Developer",
      company: "StartUp Inc",
      period: "2016 - 2018",
      description: "Collaborated with designers to implement responsive landing pages. Built internal dashboards using React and D3.js.",
      skills: ["JavaScript", "HTML5", "CSS3", "React"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Neon City Ver. 2",
      description: "An interactive cyber-punk themed city explorer built with React Three Fiber. Users can fly through procedurally generated buildings.",
      tech: ["R3F", "Drei", "React", "Zustand"],
      image: "https://picsum.photos/600/400?random=1"
    },
    {
      id: "proj-2",
      title: "AI Canvas Assistant",
      description: "A drawing application that uses Generative AI to suggest completions and color palettes in real-time.",
      tech: ["Gemini API", "Canvas API", "Next.js"],
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      id: "proj-3",
      title: "Finance Viz Dashboard",
      description: "High-performance financial data visualization tool handling millions of data points with WebWorkers.",
      tech: ["D3.js", "WebWorkers", "TypeScript"],
      image: "https://picsum.photos/600/400?random=3"
    }
  ],
  testimonials: [
    {
      id: "t-1",
      name: "Sarah Jenkins",
      role: "Product Manager",
      company: "Nebula Tech",
      text: "Alex transformed our clunky dashboard into a work of art. The 3D visualizations are not just pretty; they actually make the data easier to understand."
    },
    {
      id: "t-2",
      name: "David Chen",
      role: "Creative Director",
      company: "Pulse Agency",
      text: "One of the few developers who truly understands design. Alex doesn't just build what's in the Figma file; he improves it."
    }
  ],
  contact: {
    email: "alex@example.com",
    location: "San Francisco, CA",
    socials: [
      { platform: "GitHub", url: "https://github.com", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
    ]
  }
};