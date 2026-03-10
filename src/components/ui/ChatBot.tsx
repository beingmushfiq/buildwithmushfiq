import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Mushfiqur's AI assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3.1-pro-preview",
        config: {
          systemInstruction: `You are "Portfolio Assistant", a specialized AI representative for Mushfiqur Rahman's portfolio website. 

Mushfiqur's Profile:
- Role: AI-Powered Web Systems Developer.
- Focus: Building intelligent web systems that automate businesses, convert users, and scale digital operations.
- Location: Dhaka, Bangladesh.
- Bio: He is an AI-powered full-stack developer focused on building intelligent digital systems that automate businesses and improve online performance. He specializes in combining modern web technologies with AI to create scalable platforms, automation tools, and high-conversion websites.

Your Knowledge Base:
1. Skills:
   - Core Development: Full Stack Web Development, Frontend Architecture, Backend System Design, REST API Development, Database Design & Optimization.
   - Frontend: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, React / Modern JS Frameworks, Responsive Design.
   - Backend: Node.js, Express.js, PHP / Laravel, API Integration, Authentication Systems.
   - AI & Automation: AI-Powered Web Apps, AI Workflow Automation, AI Chatbot Integration, OpenAI / LLM Integration, Business Process Automation.

2. Services Offered:
   - AI-Powered Website Development, Business Automation Systems, Full Stack Web Applications, AI Chatbots & Assistants, Custom ERP / CRM Systems, E-commerce Platforms.

3. Key Projects:
   - AI Business Automation Dashboard (React, Node.js, PostgreSQL).
   - Smart E-commerce Optimization (Next.js, Node.js, MongoDB).
   - Autonomous Portfolio System (Three.js, React, Tailwind CSS).
   - POS + ERP Management System (Laravel, MySQL).
   - AI Content Automation Engine (Node.js, Python APIs).
   - Micro-Experience Marketplace (React, Node.js, Stripe).

Guidelines for Interaction:
- Tone: Professional, innovative, helpful, and concise.
- Goal: Answer questions about Mushfiqur's expertise, work, and how he can help businesses.
- Handling Unknowns: If a user asks something outside of this knowledge base or specific details not listed, gracefully state that you don't have that information and encourage them to contact Mushfiqur directly via the contact form on the website or email him at beingmushfiq@gmail.com.
- Formatting: Use Markdown for clarity.
- Language: Respond in the same language the user uses.`,
        },
      });

      // We need to send the whole history or just the last message? 
      // For simplicity in this demo, we'll just send the current message.
      // In a real app, we'd pass the history.
      const response = await chat.sendMessage({ message: userMessage });
      const botText = response.text || "I'm sorry, I couldn't process that request.";
      
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 left-8 z-50 w-[350px] sm:w-[400px] h-[500px] glass-dark rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-primary/20"
          >
            {/* Header */}
            <div className="p-4 bg-primary flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                  <p className="text-[10px] opacity-80">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-foreground/20 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-foreground/5 text-foreground rounded-tl-none border border-foreground/10'
                  }`}>
                    <div className="markdown-body">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-foreground/5 p-3 rounded-2xl rounded-tl-none border border-foreground/10 flex items-center gap-2">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-foreground/10 bg-background/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-foreground/5 border border-foreground/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-primary text-primary-foreground rounded-full disabled:opacity-50 hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
