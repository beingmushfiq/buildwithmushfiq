import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import { cn } from '../../lib/utils';
import SkillSphere from '../ui/SkillSphere';

function SkillCard({ category, idx, color }: { category: any, idx: number, color: string }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        scale: 1.02, 
        y: -10,
        borderColor: `${color}40`,
        boxShadow: `0 20px 40px ${color}15`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-8 glass rounded-3xl border border-foreground/5 transition-all group flex flex-col items-center text-center cursor-default relative overflow-hidden"
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
      
      <SkillSphere 
        type={category.category} 
        color={color} 
        isHovered={isHovered}
      />
      
      <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {category.items.map((skill: string, sIdx: number) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx * 0.1) + (sIdx * 0.05), duration: 0.4 }}
            whileHover={{ 
              scale: 1.1, 
              color: color,
              backgroundColor: `${color}10`,
              borderColor: `${color}30`
            }}
            className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium text-muted-foreground transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categoryColors: Record<string, string> = {
    'Core Development': '#0ea5e9',
    'Frontend': '#6366f1',
    'Backend': '#10b981',
    'AI & Automation': '#f59e0b',
  };

  return (
    <section id="skills" className="py-24 bg-foreground/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive set of tools and technologies I use to build intelligent, scalable solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <SkillCard 
              key={category.category} 
              category={category} 
              idx={idx} 
              color={categoryColors[category.category] || '#0ea5e9'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
