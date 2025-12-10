import React, { useState } from 'react';
import { Scene } from './components/3d/Scene';
import { Section, Card, Badge } from './components/ui/Section';
import { ChatInterface } from './components/ChatInterface';
import { RESUME_DATA } from './constants';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Send, Mail, ExternalLink, Code2, Briefcase, 
  User, Layout, Box, Palette, Layers, Cpu, Wrench, Terminal,
  Quote, Video, Shield, BarChart3, GraduationCap, Award, Globe, Download
} from 'lucide-react';

const App: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [navImgError, setNavImgError] = useState(false);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Helper to get icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Layout className="w-8 h-8 text-indigo-400" />;
      case 'box': return <Box className="w-8 h-8 text-pink-400" />;
      case 'palette': return <Palette className="w-8 h-8 text-purple-400" />;
      case 'code': return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'cpu': return <Cpu className="w-6 h-6 text-orange-400" />;
      case 'tool': return <Wrench className="w-6 h-6 text-gray-400" />;
      case 'video': return <Video className="w-8 h-8 text-pink-500" />;
      case 'shield': return <Shield className="w-8 h-8 text-red-500" />;
      case 'chart': return <BarChart3 className="w-8 h-8 text-emerald-400" />;
      default: return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative w-full min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Scene />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/40 supports-[backdrop-filter]:bg-black/20">
        <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 overflow-hidden border border-white/20 group-hover:scale-105 transition-transform">
                {RESUME_DATA.avatar && !navImgError ? (
                  <img 
                    src={RESUME_DATA.avatar} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={() => setNavImgError(true)}
                  />
                ) : (
                  <span>A</span>
                )}
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block">
                AIDER
            </span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">About</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">Services</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors">Work</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-white transition-colors">Skills</a>
        </div>
        
        <a 
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 font-semibold text-sm transition-all shadow-lg hover:shadow-white/20 cursor-pointer"
        >
          Let's Talk
        </a>
      </nav>

      {/* Content Scroller */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <Section id="hero" className="min-h-screen flex-col !justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm inline-flex items-center gap-2.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Contract
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{RESUME_DATA.name}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {RESUME_DATA.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a 
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              View My Work
            </a>
            <button
              className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all font-semibold flex items-center gap-2 text-white"
              onClick={() => alert("Resume download would start here.")}
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
          >
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll" />
            </div>
          </motion.div>
        </Section>

        {/* About Section */}
        <Section id="about" title="About Me" subtitle="The person behind the code">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                {RESUME_DATA.about}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
                {RESUME_DATA.stats.map((stat, i) => (
                   <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                   </div>
                ))}
              </div>

              <div className="space-y-3">
                 <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Languages
                 </h4>
                 <div className="flex flex-wrap gap-3">
                    {RESUME_DATA.languages.map((lang, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                        <span className="font-medium text-white">{lang.language}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-500" />
                        <span className="text-gray-400">{lang.proficiency}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative z-10 bg-gray-900 group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10 mix-blend-overlay" />
                {RESUME_DATA.avatar && !imgError ? (
                  <img 
                    src={RESUME_DATA.avatar} 
                    alt={RESUME_DATA.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <div className="relative w-40 h-40">
                          <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-30 animate-pulse"></div>
                          <User className="w-full h-full text-gray-700 relative z-10 p-8" />
                      </div>
                  </div>
                )}
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="What I Do" subtitle="Comprehensive technical solutions derived from diverse industry experience">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {RESUME_DATA.services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="h-full flex flex-col items-start hover:bg-white/5 transition-colors">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>
        
        {/* Credentials Section */}
        <Section id="credentials" title="Credentials" subtitle="Education and Professional Certifications">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                 <GraduationCap className="w-6 h-6 text-indigo-400" />
                 <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6 pl-2 border-l-2 border-white/10">
                {RESUME_DATA.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gray-900 border-2 border-indigo-500" />
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <div className="text-indigo-400 mb-1">{edu.institution}</div>
                    <div className="text-sm text-gray-500 mb-2">{edu.period}</div>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                 <Award className="w-6 h-6 text-pink-400" />
                 <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid gap-4">
                 {RESUME_DATA.certifications.map((cert) => (
                    <Card key={cert.id} className="flex items-center gap-4 p-4 hover:bg-white/5">
                       <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                          <Shield className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white">{cert.name}</h4>
                          <div className="flex gap-2 text-sm text-gray-400">
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.year}</span>
                          </div>
                       </div>
                    </Card>
                 ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience" subtitle="My professional journey so far">
          <div className="space-y-8 max-w-4xl mx-auto">
            {RESUME_DATA.experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-white/10 hover:border-indigo-500/50 transition-colors pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 w-fit">
                    {job.period}
                  </span>
                </div>
                
                <div className="text-lg text-indigo-400 mb-4 font-medium flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.company}
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed max-w-2xl">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Work" subtitle="A selection of my recent projects">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {RESUME_DATA.projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="h-full flex flex-col p-0 overflow-hidden border-0 bg-gray-900/50">
                  <div className="h-48 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/0 transition-colors z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 border-t border-white/5">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-medium text-indigo-300/80 bg-indigo-500/5 px-2 py-1 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-indigo-500 pb-1"
            >
              <Github className="w-5 h-5" />
              See more on GitHub
            </a>
          </div>
        </Section>
        
        {/* Skills Section */}
        <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to build and secure">
          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.skills.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-black/40 border border-white/5 text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-indigo-500/30 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" subtitle="Let's build something secure and scalable">
           <div className="max-w-2xl mx-auto">
             <Card className="text-center">
               <h3 className="text-2xl font-bold mb-6">Open for Opportunities</h3>
               <p className="text-gray-400 mb-8 leading-relaxed">
                 I'm currently available for freelance work and full-time positions. 
                 Whether you need a security audit, a backend system, or a creative video campaign, 
                 I'm ready to help you achieve your goals.
               </p>
               
               <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                 <a 
                   href={`mailto:${RESUME_DATA.contact.email}`}
                   className="flex items-center gap-3 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg hover:shadow-indigo-500/25 w-full md:w-auto justify-center"
                 >
                   <Mail className="w-5 h-5" />
                   {RESUME_DATA.contact.email}
                 </a>
                 <div className="flex gap-4">
                   {RESUME_DATA.contact.socials.map((social) => (
                     <a
                       key={social.platform}
                       href={social.url}
                       target="_blank"
                       rel="noreferrer"
                       className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-gray-400 hover:text-white"
                       aria-label={social.platform}
                     >
                       {social.platform === 'GitHub' && <Github className="w-5 h-5" />}
                       {social.platform === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                       {social.platform === 'Telegram' && <Send className="w-5 h-5" />}
                     </a>
                   ))}
                 </div>
               </div>
               
               <div className="text-sm text-gray-500">
                 Based in {RESUME_DATA.contact.location} • Available Remote
               </div>
             </Card>
           </div>
        </Section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. Built with React, Three.js & Gemini AI.</p>
        </footer>
      </div>

      <ChatInterface />
    </main>
  );
};

export default App;