import React from 'react';
import { Scene } from './components/3d/Scene';
import { Section, Card, Badge } from './components/ui/Section';
import { ChatInterface } from './components/ChatInterface';
import { RESUME_DATA } from './constants';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Briefcase, 
  User, Layout, Box, Palette, Layers, Cpu, Wrench, Terminal,
  Quote
} from 'lucide-react';

const App: React.FC = () => {
  
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
      default: return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <main className="relative w-full min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Scene />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/40 supports-[backdrop-filter]:bg-black/20">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                A
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                LUMINA
            </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>
        
        <a 
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 font-semibold text-sm transition-all shadow-lg hover:shadow-white/20"
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
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            Creative<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Developer.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            {RESUME_DATA.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
             <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 w-full md:w-auto">
                View My Work
             </a>
             <div className="flex gap-4">
                {RESUME_DATA.contact.socials.map((social) => (
                  <a 
                    key={social.platform} 
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-sm"
                  >
                    {social.icon === 'github' && <Github className="w-5 h-5" />}
                    {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                    {social.icon === 'twitter' && <Twitter className="w-5 h-5" />}
                  </a>
                ))}
             </div>
          </motion.div>
        </Section>

        {/* About & Stats Section */}
        <Section id="about" title="About Me">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <Card className="!bg-gray-900/60 !border-indigo-500/20">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {RESUME_DATA.about}
                </p>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                  {RESUME_DATA.stats.map((stat, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                          <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                          <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                      </div>
                  ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative h-full min-h-[400px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[100px]" />
              {/* Abstract Visual - Keeping the previous icon grid but enhanced */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                 <div className="aspect-square w-32 bg-gray-900/80 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Code2 className="w-10 h-10 text-indigo-400" />
                 </div>
                 <div className="aspect-square w-32 bg-gray-900/80 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 mt-12">
                    <User className="w-10 h-10 text-pink-400" />
                 </div>
                 <div className="aspect-square w-32 bg-gray-900/80 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 -mt-12">
                    <Briefcase className="w-10 h-10 text-blue-400" />
                 </div>
                 <div className="aspect-square w-32 bg-gray-900/80 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
                    <ExternalLink className="w-10 h-10 text-emerald-400" />
                 </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="What I Do" subtitle="Specialized technical services for modern web needs">
           <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
           >
              {RESUME_DATA.services.map((service) => (
                  <motion.div key={service.id} variants={fadeInUp} className="h-full">
                      <Card className="h-full flex flex-col items-center text-center p-8 group">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                              {getIcon(service.icon)}
                          </div>
                          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </Card>
                  </motion.div>
              ))}
           </motion.div>
        </Section>

        {/* Skills Section - Categorized */}
        <Section id="skills" title="Technical Arsenal" subtitle="The tools and technologies I use to bring ideas to life">
           <div className="grid md:grid-cols-2 gap-6">
              {RESUME_DATA.skills.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                      <Card className="h-full">
                          <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                  {getIcon(category.icon)}
                              </div>
                              <h3 className="text-lg font-bold">{category.category}</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                              {category.skills.map(skill => (
                                  <Badge key={skill}>{skill}</Badge>
                              ))}
                          </div>
                      </Card>
                  </motion.div>
              ))}
           </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience" subtitle="My professional journey so far">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {RESUME_DATA.experience.map((job, idx) => (
              <motion.div 
                key={job.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center md:left-1/2 md:-translate-x-1/2 shadow-xl z-10 group-hover:border-indigo-500 transition-colors">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
                  </div>

                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 !p-6 md:!p-8">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{job.role}</h3>
                          <span className="text-xs font-mono py-1 px-2 rounded bg-white/5 border border-white/5">{job.period}</span>
                      </div>
                      <h4 className="text-md font-semibold text-indigo-200 mb-3">{job.company}</h4>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map(skill => (
                          <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-500/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                  </Card>
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {RESUME_DATA.projects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="h-full flex flex-col group overflow-hidden !p-0">
                    <div className="h-56 overflow-hidden relative">
                        <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                           {project.tech.map(t => (
                             <Badge key={t}>{t}</Badge>
                           ))}
                        </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
           </motion.div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" title="Testimonials" subtitle="What people say about working with me">
            <div className="grid md:grid-cols-2 gap-6">
                {RESUME_DATA.testimonials.map((t, i) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <Card className="h-full">
                            <Quote className="w-8 h-8 text-indigo-500/50 mb-4" />
                            <p className="text-lg text-gray-300 mb-6 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.role} @ {t.company}</div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>

        {/* Contact/Footer */}
        <Section id="contact" className="pb-40 pt-10">
           <Card className="text-center py-16 px-6 !bg-gradient-to-b !from-gray-900 !to-indigo-950/30">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to create something amazing?</h2>
             <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                I'm currently available for freelance projects and open full-time opportunities.
                If you have a project that needs some creative touch, let's chat.
             </p>
             <a 
               href={`mailto:${RESUME_DATA.contact.email}`}
               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-lg shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 transform duration-200"
             >
               <Mail className="w-5 h-5" />
               Send an Email
             </a>
             <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
                <div className="flex gap-6">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
             </div>
           </Card>
        </Section>

      </div>
      
      {/* AI Chat Widget */}
      <ChatInterface />
      
    </main>
  );
};

export default App;