'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, RotateCcw, ExternalLink } from 'lucide-react';
import { suggestedQuestions } from '@/data/faq';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: { label: string; url: string }[];
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I am Bobo Assistance, Leopold Mugisha's AI portfolio assistant. Ask me about his verified full-stack projects, database architectures, educational background, or contact details.`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, loading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  async function handleSend(textToSend?: string) {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMessage: Message = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to retrieve response.');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.content,
          sources: data.sources,
        },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'I encountered a temporary connection issue. You can still reach Leopold directly at leopordbonfils@gmail.com.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function resetChat() {
    setMessages([
      {
        role: 'assistant',
        content: `Hello! I am Bobo Assistance, Leopold Mugisha's AI portfolio assistant. Ask me about his verified full-stack projects, database architectures, educational background, or contact details.`,
      },
    ]);
  }

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#181510] hover:bg-[#221e17] text-[#ded8cd] hover:text-white border border-[#302a20] hover:border-accent shadow-2xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={isOpen}
          aria-label="Open Bobo Assistance"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-accent absolute -top-0.5 -right-0.5 animate-ping opacity-75" />
            <Image
              src="/bobo-assistant-logo.png"
              alt="Bobo Assistance Logo"
              width={24}
              height={24}
              className="w-5 h-5 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-xs font-mono font-medium tracking-tight">
            Bobo Assistance
          </span>
        </button>
      </div>

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] h-[82vh] rounded-2xl bg-[#0e0d0b]/95 border border-[#2b271f] shadow-2xl shadow-black/80 backdrop-blur-xl flex flex-col overflow-hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-chat-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#211e18] bg-[#14120e]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-[#332c21] flex items-center justify-center overflow-hidden p-1 shadow-inner">
                <Image
                  src="/bobo-assistant-logo.png"
                  alt="Bobo Assistance"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span id="ai-chat-title" className="text-xs font-bold text-[#f2ede4] flex items-center gap-1.5">
                  Bobo Assistance
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" title="Online" />
                </span>
                <span className="text-[10px] font-mono text-[#8a8376]">
                  Leopold's Verified Portfolio Assistant
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className="p-1.5 rounded-md text-[#857e72] hover:text-[#ded8cd] hover:bg-[#1f1b15] transition-colors"
                title="Restart Conversation"
                aria-label="Restart Conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md text-[#857e72] hover:text-[#ded8cd] hover:bg-[#1f1b15] transition-colors"
                aria-label="Close Bobo Assistance"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 text-xs">
            {messages.map((msg, idx) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    isAssistant ? 'items-start mr-4' : 'items-end ml-4'
                  }`}
                >
                  {isAssistant && (
                    <div className="flex items-center gap-1.5 mb-1 pl-0.5">
                      <div className="w-4 h-4 rounded-full overflow-hidden bg-white/5 border border-[#332c21] flex items-center justify-center p-0.5">
                        <Image
                          src="/bobo-assistant-logo.png"
                          alt="Bobo"
                          width={14}
                          height={14}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-mono text-[#8a8376]">Bobo Assistance</span>
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-xl max-w-full leading-relaxed whitespace-pre-wrap ${
                      isAssistant
                        ? 'bg-[#161410] border border-[#26221a] text-[#ded8cd]'
                        : 'bg-accent text-[#080807] font-medium'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {/* Verified Sources / Quick Links */}
                  {isAssistant && msg.sources && msg.sources.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {msg.sources.map((s, sIdx) => (
                        <a
                          key={sIdx}
                          href={s.url}
                          target={s.url.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[#1c1913] text-accent border border-[#332b1e] hover:border-accent transition-colors"
                        >
                          <span>{s.label}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {loading && (
              <div className="self-start flex items-center gap-2 p-3 rounded-xl bg-[#161410] border border-[#26221a] text-[#8a8376]">
                <div className="w-4 h-4 rounded-full overflow-hidden bg-white/5 border border-[#332c21] flex items-center justify-center p-0.5">
                  <Image
                    src="/bobo-assistant-logo.png"
                    alt="Bobo"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain animate-spin"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-150" />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-300" />
                </div>
                <span className="font-mono text-[11px] ml-1">Bobo Assistance is answering...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-[#1e1b15] bg-[#100e0b]">
              <div className="text-[10px] font-mono text-[#787164] uppercase tracking-wider mb-1.5">
                Suggested Questions
              </div>
              <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto">
                {suggestedQuestions.map((q, qIdx) => (
                  <button
                    key={qIdx}
                    type="button"
                    onClick={() => handleSend(q)}
                    className="text-[11px] text-[#b8b1a3] bg-[#171511] hover:bg-[#201d16] hover:text-[#ede7db] border border-[#26221b] px-2.5 py-1 rounded-md transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t border-[#211e18] bg-[#14120e]">
            <div className="relative flex items-center">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Bobo Assistance about projects, skills, education, contact..."
                className="w-full pl-3 pr-10 py-2 rounded-lg bg-[#181611] border border-[#2d2820] text-xs text-[#f2ede4] placeholder-[#6b6456] focus:border-accent focus:outline-none resize-none"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="absolute right-2 p-1.5 rounded-md bg-accent text-[#080807] hover:bg-accent-hover disabled:opacity-40 transition-all"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#666054] mt-1.5 px-0.5">
              <span>Press Enter to send</span>
              <span>Bobo Assistance • Never invents facts</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
