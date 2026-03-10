import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolio';
import { Mail, Github, Globe, Send, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to send message');
      
      setStatus('success');
      setResponseMsg(data.message);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setResponseMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how AI can transform your business, I'm always open to new opportunities.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Me', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-all border border-foreground/5"
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-xl font-bold">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Github, href: personalInfo.github },
                  { icon: Globe, href: personalInfo.portfolio },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-foreground/5 transition-all border border-foreground/5"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 md:p-12 glass rounded-[2.5rem] relative overflow-hidden border border-foreground/5 group"
          >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all text-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl focus:border-primary/50 focus:bg-primary/5 focus:outline-none transition-all resize-none text-foreground"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{responseMsg}</p>
              )}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  {responseMsg}
                </div>
              )}

              <motion.button 
                whileHover={status !== 'loading' ? { 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                } : {}}
                whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                disabled={status === 'loading'}
                className="w-full py-5 bg-foreground text-background rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all relative overflow-hidden group/btn disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status === 'loading' ? (
                    <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -translate-x-full group-hover/btn:animate-shine" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
