import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Layout, Server, Cpu, Bot, Database, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const nodes = [
  { id: 'user', title: 'User', icon: User, explanation: 'The end-user interacting with the frontend interface.', tech: 'Browser, Mobile App', examples: 'Clients, Customers, Internal Team' },
  { id: 'frontend', title: 'Frontend', icon: Layout, explanation: 'The client-side application handling UI/UX.', tech: 'React, Vite, Tailwind CSS', examples: 'Dashboards, Portfolios, SaaS Apps' },
  { id: 'api', title: 'API Layer', icon: Server, explanation: 'RESTful/GraphQL API for data processing and routing.', tech: 'Node.js, Express, Next.js API', examples: 'Auth, Logic, Database access' },
  { id: 'automation', title: 'Automation Engine', icon: Cpu, explanation: 'Handles triggers, background jobs, and scheduled tasks.', tech: 'BullMQ, Cron, Custom Engine', examples: 'Email sequences, Data sync' },
  { id: 'ai', title: 'AI Agents', icon: Bot, explanation: 'LLM-powered agents that generate content or insights.', tech: 'Gemini, OpenAI, LangChain', examples: 'Chatbots, Auto-replies, Code gen' },
  { id: 'db', title: 'Database', icon: Database, explanation: 'Persistent data storage securely hosted.', tech: 'PostgreSQL, MongoDB, Redis', examples: 'User Data, Embeddings' }
];

export default function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState(nodes[1]);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            How I Build <span className="text-gradient">AI Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A high-level overview of the modern, scalable architecture used in my deployments.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Diagram */}
          <div className="relative h-[500px] glass rounded-3xl p-8 flex items-center justify-center">
            {/* Animated SVG Lines (Background) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50,250 L 150,250 L 250,150 L 350,150"
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 150,250 L 250,350 L 350,350"
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Nodes */}
            <div className="relative z-10 w-full h-full">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                const isActive = activeNode.id === node.id;
                // Simple circular layout for nodes
                const angle = (i / nodes.length) * Math.PI * 2;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "absolute flex flex-col items-center justify-center w-24 h-24 rounded-full border bg-background transition-all",
                      isActive ? "border-primary shadow-[0_0_20px_rgba(14,165,233,0.5)] scale-110" : "border-white/10 opacity-70 hover:opacity-100"
                    )}
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`
                    }}
                  >
                    <Icon className={cn("w-8 h-8 mb-1", isActive ? "text-primary" : "text-foreground")} />
                    <span className="text-xs font-semibold">{node.title}</span>
                  </motion.button>
                );
              })}
              {/* Center Connection text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs text-muted-foreground uppercase tracking-widest pointer-events-none">
                Data Flow
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="glass p-8 rounded-3xl h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <activeNode.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold font-display">{activeNode.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {activeNode.explanation}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Technologies</h4>
                    <p className="text-foreground/90 font-medium">{activeNode.tech}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-secondary font-bold mb-2">Examples</h4>
                    <p className="text-foreground/90">{activeNode.examples}</p>
                  </div>
                </div>

                <motion.button className="mt-8 flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors group">
                  Learn more about {activeNode.title.toLowerCase()} 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
