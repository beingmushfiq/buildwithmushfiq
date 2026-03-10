import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import WorkstationScene from '../ui/WorkstationScene';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <WorkstationScene />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-medium text-primary border border-primary/20 relative overflow-hidden group"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10"
          >
            Available for new projects
          </motion.span>
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          I build <span className="text-gradient">intelligent</span> <br />
          web systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0px 0px 0px rgba(14, 165, 233, 0)", "0px 0px 20px rgba(14, 165, 233, 0.3)", "0px 0px 0px rgba(14, 165, 233, 0)"]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="group relative px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all w-full sm:w-auto justify-center overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"
              style={{ skewX: -20 }}
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(14, 165, 233, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: { duration: 0.2 }
            }}
            className="px-8 py-4 glass text-foreground rounded-full font-bold transition-all w-full sm:w-auto justify-center border border-foreground/10"
          >
            Start a Project
          </motion.a>
        </motion.div>

        {/* Animated Statistics */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
           className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">50+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Deployments</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">20+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">AI Automations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">15+</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Systems Built</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
        <motion.div 
          animate={{ height: [48, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent" 
        />
      </motion.div>
    </section>
  );
}
