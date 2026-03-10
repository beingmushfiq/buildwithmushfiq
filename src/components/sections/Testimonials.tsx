import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../data/portfolio';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-gradient">Voices</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  delay: idx * 0.5,
                  ease: "easeInOut"
                },
                opacity: { delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                scale: { delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                x: { delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }}
              whileHover={{ 
                y: -15, 
                borderColor: "rgba(14, 165, 233, 0.3)",
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.1)",
                transition: { duration: 0.3 } 
              }}
              className="p-8 glass rounded-3xl relative group border border-foreground/5 transition-all cursor-default"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
              <p className="text-lg text-muted-foreground mb-8 italic leading-relaxed relative z-10 group-hover:text-foreground transition-colors">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
