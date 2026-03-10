import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateProjectPlan } from '../../services/gemini';
import { cn } from '../../lib/utils';

export default function AIProjectPlanner() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    try {
      const response = await generateProjectPlan(idea);
      setPlan(response || '');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="planner" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-secondary border border-secondary/20 mb-6"
          >
            <Bot className="w-4 h-4" />
            AI Architect
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            AI Project <span className="text-gradient">Planner</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground w-full max-w-2xl mx-auto"
          >
            Describe your idea and my AI architect will instantly generate a technical roadmap, tech stack, and timeline for your platform.
          </motion.p>
        </div>

        <div className="glass rounded-3xl p-6 md:p-10 border border-foreground/5 relative z-10">
          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g. Build a SaaS for restaurants with AI..."
                className="w-full bg-background/50 border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-colors text-foreground placeholder:text-muted-foreground text-lg"
              />
              <div className="absolute inset-0 bg-secondary/5 rounded-2xl pointer-events-none" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading || !idea.trim()}
              className="bg-secondary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 min-w-[200px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Architecting...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Plan
                </>
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {plan && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 border-t border-foreground/10">
                  <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground max-w-none">
                    <ReactMarkdown>{plan}</ReactMarkdown>
                  </div>
                  
                  <div className="mt-10 flex justify-center">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all text-sm md:text-base outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Start This Project With Mushfiq
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
