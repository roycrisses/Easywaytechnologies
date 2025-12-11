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
    <section id="ai-consultant" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6 text-zinc-900 dark:text-white transition-colors">
              <Terminal className="w-6 h-6" />
              <span className="font-mono text-sm uppercase tracking-widest text-zinc-500">AI Interface v2.5</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-zinc-900 dark:text-white mb-6 transition-colors">
              INTELLIGENT <br /> CONSULTATION
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-light transition-colors">
              Interact with our trained model to get instant estimates, technology recommendations, and capability overviews.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Project Estimation', 'Tech Stack Advice', 'SEO Audit'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white transition-all bg-white dark:bg-zinc-900"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 min-h-[500px] flex flex-col transition-colors shadow-sm dark:shadow-none">
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
                    <span className="text-[10px] text-zinc-500 mb-2 uppercase tracking-wider">
                      {msg.role === 'user' ? 'User_Input' : 'System_Response'}
                    </span>
                    <div
                      className={`max-w-[90%] p-6 border transition-colors ${msg.role === 'user'
                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white'
                        : 'bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading === LoadingState.LOADING && (
                  <div className="text-zinc-500 animate-pulse">
                    {'>'} Processing query...
                  </div>
                )}
              </div>

              {/* Input Line */}
              <form onSubmit={handleSend} className="border-t border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-950 flex items-center gap-4 transition-colors">
                <span className="text-zinc-500 font-mono">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter command or query..."
                  className="flex-1 bg-transparent border-none text-zinc-900 dark:text-white font-mono text-sm focus:ring-0 focus:outline-none placeholder-zinc-400 dark:placeholder-zinc-700 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading === LoadingState.LOADING}
                  className="text-zinc-900 dark:text-white hover:text-zinc-500 dark:hover:text-zinc-400 disabled:opacity-50 transition-colors"
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