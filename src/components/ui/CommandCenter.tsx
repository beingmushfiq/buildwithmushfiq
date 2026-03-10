import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Command, X, Bot, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import { personalInfo, projects, skills } from '../../data/portfolio';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
      setAiResponse(null);
    }
  }, [isOpen]);

  const handleAiQuery = async () => {
    if (!query || query.length < 3) return;
    
    setIsAiLoading(true);
    setAiResponse(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an AI assistant for BuildWithMushfiq's portfolio. 
        Mushfiq's Info: ${JSON.stringify(personalInfo)}
        Projects: ${JSON.stringify(projects.map(p => ({ title: p.title, tech: p.tech })))}
        Skills: ${JSON.stringify(skills)}
        
        User Question: ${query}
        
        Provide a concise, helpful answer (max 2 sentences). If the user asks for a project, mention it. If they ask for contact info, provide it.`,
      });
      setAiResponse(response.text);
    } catch (error) {
      setAiResponse("I'm having trouble connecting to my brain right now. Try asking about Mushfiq's projects!");
    } finally {
      setIsAiLoading(false);
    }
  };

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.tech.some(t => t.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 3);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl glass rounded-3xl border border-foreground/10 shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-foreground/5 flex items-center gap-4">
              <Search className="w-6 h-6 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects or ask AI about Mushfiq..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiQuery()}
                className="flex-1 bg-transparent border-none focus:outline-none text-xl font-medium placeholder:text-muted-foreground"
              />
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-foreground/5 border border-foreground/10 text-[10px] font-mono text-muted-foreground">
                <Command className="w-3 h-3" /> K
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-foreground/5 rounded-lg transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {query.length > 0 ? (
                <div className="space-y-6">
                  {/* AI Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest px-2">
                      <Bot className="w-4 h-4" /> AI Assistant
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                      {isAiLoading ? (
                        <div className="flex items-center gap-3 text-muted-foreground animate-pulse">
                          <Zap className="w-4 h-4 animate-spin" />
                          <span>Thinking...</span>
                        </div>
                      ) : aiResponse ? (
                        <p className="text-foreground leading-relaxed">{aiResponse}</p>
                      ) : (
                        <button 
                          onClick={handleAiQuery}
                          className="w-full text-left flex items-center justify-between group"
                        >
                          <span className="text-muted-foreground italic">Press Enter to ask AI...</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Projects Section */}
                  {filteredProjects.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">
                        Projects
                      </div>
                      <div className="grid gap-2">
                        {filteredProjects.map(project => (
                          <a
                            key={project.id}
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition-all group"
                          >
                            <div>
                              <div className="font-bold group-hover:text-primary transition-colors">{project.title}</div>
                              <div className="text-xs text-muted-foreground">{project.tech.join(' • ')}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">What are you looking for?</p>
                    <p className="text-sm text-muted-foreground">Search for skills, projects, or ask the AI anything.</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    {['AI Projects', 'React Skills', 'Contact Info', 'Experience'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs hover:bg-foreground/10 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-foreground/5 border-t border-foreground/5 flex items-center justify-between text-[10px] text-muted-foreground font-medium">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><span className="px-1 py-0.5 rounded bg-foreground/10">↑↓</span> to navigate</span>
                <span className="flex items-center gap-1"><span className="px-1 py-0.5 rounded bg-foreground/10">Enter</span> to select</span>
              </div>
              <span className="flex items-center gap-1"><span className="px-1 py-0.5 rounded bg-foreground/10">Esc</span> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
