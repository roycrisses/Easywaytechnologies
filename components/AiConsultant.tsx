import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { getAiResponse } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "System initialized. I am the EasyWay Intelligence Unit. How may I assist with your project inquiry?",
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(LoadingState.LOADING);

    try {
      const responseText = await getAiResponse(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setLoading(LoadingState.SUCCESS);
    } catch (error) {
      setLoading(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-cyan dark:bg-zinc-950 border-b border-azure dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6 text-black dark:text-white transition-colors">
              <Terminal className="w-6 h-6 text-azure dark:text-white" />
              <span className="font-mono text-sm uppercase tracking-widest text-black/70">AI Interface v2.5</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 transition-colors">
              <span className="text-black dark:text-white">INTELLIGENT</span> <br />
              <span className="text-azure dark:text-white">CONSULTATION</span>
            </h2>
            <p className="text-black dark:text-zinc-400 mb-8 font-light transition-colors">
              Interact with our trained model to get instant estimates, technology recommendations, and capability overviews.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Project Estimation', 'Tech Stack Advice', 'SEO Audit'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="px-4 py-2 border border-azure dark:border-zinc-800 text-xs uppercase tracking-wide text-black dark:text-zinc-400 hover:text-azure dark:hover:text-white hover:border-azure hover:bg-aqua dark:hover:border-white transition-all bg-mint dark:bg-zinc-900"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="border border-azure dark:border-zinc-800 bg-mint dark:bg-zinc-900/20 min-h-[500px] flex flex-col transition-colors shadow-sm dark:shadow-none">
              {/* Output Display */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-8 space-y-8 font-mono text-sm scroll-smooth"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <span className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider">
                      {msg.role === 'user' ? 'User_Input' : 'System_Response'}
                    </span>
                    <div
                      className={`max-w-[90%] p-6 border transition-colors ${msg.role === 'user'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-black border-slate-900 dark:border-white'
                        : 'bg-aqua dark:bg-zinc-900/50 text-black dark:text-zinc-300 border-azure dark:border-zinc-800'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading === LoadingState.LOADING && (
                  <div className="text-black/50 animate-pulse">
                    {'>'} Processing query...
                  </div>
                )}
              </div>

              {/* Input Line */}
              <form onSubmit={handleSend} className="border-t border-azure dark:border-zinc-800 p-4 bg-cyan dark:bg-zinc-950 flex items-center gap-4 transition-colors">
                <span className="text-black/70 font-mono">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-transparent text-black dark:text-white focus:outline-none placeholder-black/50 dark:placeholder-zinc-600"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading === LoadingState.LOADING}
                  className="text-slate-900 dark:text-white hover:text-amber-500 dark:hover:text-zinc-400 disabled:opacity-50 transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};