import React, { ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', title, subtitle }) => {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center py-20 px-6 relative ${className}`}>
      <div className="max-w-6xl w-full z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
                <div className="flex justify-center">
                    <p className="text-xl text-gray-400 max-w-2xl">{subtitle}</p>
                </div>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative border border-white/10 bg-gray-900/40 backdrop-blur-md overflow-hidden rounded-2xl shadow-xl hover:shadow-indigo-500/20 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Intense Mouse-following Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle Persistent Glow + Bright Border Highlight on Hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      />
      
      {/* Content wrapper to ensure z-index above lighting effects */}
      <div className="relative h-full p-6 md:p-8 z-10">
        {children}
      </div>
    </motion.div>
  );
};

export const Badge: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-colors cursor-default">
    {children}
  </span>
);