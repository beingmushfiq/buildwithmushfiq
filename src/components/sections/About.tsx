import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../../data/portfolio';
import { Cpu, Code2, Zap, Globe, Github, MapPin, Clock, Terminal, Activity } from 'lucide-react';
import { fetchLatestCommit, LatestCommit } from '../../services/github';
import { formatDistanceToNow } from 'date-fns';

export default function About() {
  const [time, setTime] = useState(new Date());
  const [latestCommit, setLatestCommit] = useState<LatestCommit | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    // Fetch real github data
    const getGithubData = async () => {
      const githubUrl = personalInfo.github.replace(/\/$/, ""); // Remove trailing slash
      const username = githubUrl.split('/').pop() || 'beingmushfiq';
      const data = await fetchLatestCommit(username);
      if (data) setLatestCommit(data);
    };
    getGithubData();

    return () => clearInterval(timer);
  }, []);

  const dhakaTime = new Date(time.toLocaleString("en-US", {timeZone: "Asia/Dhaka"}));

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            System <span className="text-gradient">Overview</span>
          </motion.h2>
          <p className="text-muted-foreground">A real-time look into my digital workspace and philosophy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 p-8 glass rounded-3xl border border-foreground/5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <Terminal className="w-4 h-4" />
                Root_Access
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
                Mushfiqur Rahman
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                Full-Stack
              </div>
              <div className="px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold">
                AI Specialist
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 p-6 glass rounded-3xl border border-foreground/5 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-widest mb-4">
                <MapPin className="w-3 h-3" />
                Location
              </div>
              <div className="text-xl font-bold">Dhaka, BD</div>
            </div>
            <div className="relative z-10 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-widest mb-2">
                <Clock className="w-3 h-3" />
                Local Time
              </div>
              <div className="text-2xl font-mono font-bold text-primary">
                {dhakaTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
            </div>
            {/* Abstract Map Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[length:20px_20px]" />
            </div>
          </motion.div>

          {/* GitHub Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 p-6 glass rounded-3xl border border-foreground/5 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-green-500">Live</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Latest Commit</div>
              <a 
                href={latestCommit?.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                <div className="text-sm font-medium truncate">
                  {latestCommit ? latestCommit.message : 'Fetching latest commit...'}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1 flex items-center gap-2">
                  <span className="truncate max-w-[100px]">{latestCommit?.repo}</span>
                  {latestCommit && (
                    <>
                      <span>•</span>
                      <span>{formatDistanceToNow(new Date(latestCommit.date), { addSuffix: true })}</span>
                    </>
                  )}
                </div>
              </a>
            </div>
          </motion.div>

          {/* System Status / Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 p-8 glass rounded-3xl border border-foreground/5 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-muted-foreground font-bold text-xs uppercase tracking-widest">
                <Activity className="w-4 h-4" />
                System_Performance
              </div>
              <div className="text-xs font-mono text-primary">Uptime: 99.9%</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-[10px] text-muted-foreground uppercase">Deployments</div>
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-[10px] text-muted-foreground uppercase">AI Agents</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-[10px] text-muted-foreground uppercase">Partners</div>
              </div>
            </div>
            <div className="mt-6 h-1 w-full bg-foreground/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary" 
              />
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 p-8 glass rounded-3xl border border-foreground/5 flex flex-col justify-between group"
          >
            <div className="flex items-center gap-2 text-muted-foreground font-bold text-xs uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" />
              Current_Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'Laravel', 'Python', 'OpenAI', 'Gemini', 'Three.js', 'Tailwind'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-lg text-xs font-medium group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
