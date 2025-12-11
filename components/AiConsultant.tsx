import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, Loader2, Brain, Zap, MessageSquare } from 'lucide-react';
import { getAiResponse } from '../services/geminiService';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../utils/animations';

export const AiConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hello! I'm your AI consultant. How can I help you transform your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAiResponse(userMessage);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "I apologize, but I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "How can AI improve my workflow?",
    "Suggest a tech stack for a startup",
    "Explain cloud architecture benefits",
    "What is digital transformation?"
  ];

  return (
    <section id="ai-consultant" className="py-24 bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left info column */}
          <motion.div
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center border border-slate-300 dark:border-zinc-800">
                <Bot className="w-6 h-6 text-azure" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-azure">AI Beta</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white transition-colors">
              INSTANT <br />
              <span className="text-azure">CONSULTATION</span>
            </h2>

            <p className="text-black/70 dark:text-zinc-400 mb-8 leading-relaxed">
              Get immediate insights on technology strategy, architecture decisions, and digital trends from our trained AI consultant.
            </p>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-zinc-600 mb-4">Suggested Topics</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="px-4 py-2 border border-slate-300 dark:border-zinc-800 text-xs uppercase tracking-wide text-black dark:text-zinc-400 hover:text-azure dark:hover:text-white hover:border-azure hover:bg-slate-100 dark:hover:border-white transition-all bg-slate-100 dark:bg-zinc-900"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border border-slate-300 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900/20 min-h-[500px] flex flex-col transition-colors shadow-sm dark:shadow-none">
              {/* Output Display */}
              <div
                ref={chatContainerRef}
                className="flex-grow p-6 space-y-6 overflow-y-auto max-h-[600px]"
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] p-6 border transition-colors ${msg.role === 'user'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-black border-slate-900 dark:border-white'
                        : 'bg-slate-100 dark:bg-zinc-900/50 text-black dark:text-zinc-300 border-slate-300 dark:border-zinc-800'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="p-6 bg-slate-100 dark:bg-zinc-900/50 border border-slate-300 dark:border-zinc-800 flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin text-azure" />
                      <span className="text-sm font-mono text-black/60 dark:text-zinc-500">Processing...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Line */}
              <form onSubmit={handleSend} className="border-t border-slate-300 dark:border-zinc-800 p-4 bg-slate-100 dark:bg-zinc-950 flex items-center gap-4 transition-colors">
                <span className="text-black font-mono">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about digital strategy..."
                  className="flex-grow bg-transparent border-none outline-none text-black dark:text-white font-mono placeholder:text-black/30 dark:placeholder:text-zinc-700"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2 text-black dark:text-white hover:text-azure disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};