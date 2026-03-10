import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../../data/portfolio';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20 object-cover" />
            <span className="text-xl font-bold tracking-tighter">BuildWithMushfiq</span>
          </motion.div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BuildWithMushfiq. Built with <span className="text-primary">React</span> & <span className="text-secondary">AI</span>.
          </div>
          
          <div className="flex gap-6">
            {[
              { name: 'GitHub', href: personalInfo.github },
              { name: 'Blog', href: personalInfo.portfolio },
              { name: 'Email', href: `mailto:${personalInfo.email}` },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2, color: "var(--primary)" }}
                className="text-sm font-medium text-muted-foreground transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
