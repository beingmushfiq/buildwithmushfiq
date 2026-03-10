import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/portfolio';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project, idx, onClick }: { project: typeof projects[0], idx: number, onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Glare effect transforms
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["20%", "80%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["20%", "80%"]);
  const glareOpacity = useTransform(mouseXSpring, (val) => Math.abs(val) > 0 || Math.abs(y.get()) > 0 ? 0.2 : 0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-pointer glass rounded-3xl overflow-hidden border border-foreground/5 transition-all relative"
    >
      {/* Glare effect */}
      <motion.div
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, transparent 70%)",
          left: glareX,
          top: glareY,
          opacity: glareOpacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-full h-full pointer-events-none z-20 blur-3xl"
      />

      <div 
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-10"
      >
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-foreground font-medium flex items-center gap-2">
              View Details <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="p-8" style={{ transform: "translateZ(30px)" }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] uppercase tracking-widest text-primary font-bold group-hover:tracking-wider transition-all">
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground/80 transition-colors">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const navigate = useNavigate();
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 perspective-1000">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-muted-foreground max-w-xl"
            >
              A selection of my recent work, focusing on AI integration and business automation.
            </motion.p>
          </div>
          <motion.button
            onClick={() => navigate('/projects')}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary font-semibold transition-all"
          >
            View All Projects <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              idx={idx} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 glass rounded-full hover:bg-white/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-widest font-bold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-foreground text-background rounded-xl font-bold hover:bg-opacity-90 transition-all">
                      Live Demo
                    </button>
                    <button className="p-3 glass rounded-xl hover:bg-foreground/10 transition-all">
                      <Github className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
