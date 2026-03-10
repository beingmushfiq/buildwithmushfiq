import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Search, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function AllProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <motion.button
              onClick={() => navigate('/')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6 hover:gap-4 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold"
            >
              All <span className="text-gradient">Projects</span>
            </motion.h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              A comprehensive archive of autonomous architectures, AI implementations, and high-performance digital systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search systems..." 
                className="pl-12 pr-6 py-3 bg-foreground/5 border border-foreground/10 rounded-2xl focus:outline-none focus:border-primary/50 w-full md:w-64 transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-foreground/5 border border-foreground/10 rounded-2xl font-bold text-sm hover:bg-foreground/10 transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group glass rounded-3xl border border-foreground/5 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-foreground/5">
                  <button className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    View Specs
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
