import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Zap, Search, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { analyzeWebsite } from '../../services/gemini';
import Markdown from 'react-markdown';

export default function AutomationLab() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const analysis = await analyzeWebsite(url);
      setResult(analysis || "No analysis generated.");
    } catch (err) {
      setError("Failed to connect to the AI engine. Please check your connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="lab" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
          >
            <Zap className="w-4 h-4" />
            Interactive Playground
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="text-gradient">Automation Lab</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the power of AI-driven business intelligence. Test my custom automation agents on your own business data.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] overflow-hidden border border-foreground/5 shadow-2xl"
          >
            <div className="flex items-center gap-2 px-6 py-4 bg-foreground/5 border-bottom border-foreground/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">Agent: Website_Critic_v1.0</div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Website Conversion Critic</h3>
                  <p className="text-muted-foreground mb-8">
                    Enter your website URL below. My AI agent will analyze your landing page and provide 3 high-impact improvements for conversion and automation.
                  </p>

                  <form onSubmit={handleAnalyze} className="relative mb-8">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="url"
                        placeholder="https://your-business.com"
                        required
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full pl-12 pr-32 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all font-medium"
                      />
                      <button
                        type="submit"
                        disabled={isAnalyzing}
                        className="absolute right-2 top-2 bottom-2 px-6 bg-foreground text-background rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-2"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          'Analyze'
                        )}
                      </button>
                    </div>
                  </form>

                  <AnimatePresence mode="wait">
                    {isAnalyzing && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Loader2 className="w-5 h-5 text-primary animate-spin" />
                        </div>
                        <div>
                          <p className="font-bold text-primary">AI Agent is thinking...</p>
                          <p className="text-xs text-muted-foreground">Scanning DOM structure and analyzing user flow patterns.</p>
                        </div>
                      </motion.div>
                    )}

                    {result && !isAnalyzing && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10"
                      >
                        <div className="flex items-center gap-2 text-green-500 font-bold mb-4">
                          <CheckCircle2 className="w-5 h-5" />
                          Analysis Complete
                        </div>
                        <div className="markdown-body prose prose-invert max-w-none">
                          <Markdown>{result}</Markdown>
                        </div>
                      </motion.div>
                    )}

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center gap-4"
                      >
                        <AlertCircle className="w-6 h-6 text-red-500" />
                        <p className="text-red-500 font-medium">{error}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
