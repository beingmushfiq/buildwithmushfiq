import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/portfolio';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Career <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/5 md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 z-0"
          />

          <div className="space-y-24 relative z-10">
            {experience.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full bg-primary border-4 border-background relative z-20 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300" 
                  />
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
                    className="absolute w-8 h-8 rounded-full bg-primary/30 z-10"
                  />
                </div>

                <div className="md:w-1/2 pl-8 md:pl-0">
                  <motion.div 
                    whileHover={{ 
                      y: -10,
                      scale: 1.02, 
                      x: idx % 2 === 0 ? -5 : 5,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className={`p-8 glass rounded-3xl border border-foreground/5 transition-all cursor-default group ${
                      idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-4 text-primary font-bold text-sm tracking-widest uppercase group-hover:tracking-[0.2em] transition-all duration-500 ${
                      idx % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <div className={`text-muted-foreground font-medium mb-6 flex items-center gap-2 group-hover:text-foreground transition-colors duration-300 ${
                      idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {item.company}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
