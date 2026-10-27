'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [directMailto, setDirectMailto] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');
    setDirectMailto(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setStatus('success');
      setResponseMsg(data.message);
      if (data.directMailto) {
        setDirectMailto(data.directMailto);
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setResponseMsg(err.message || 'Network error occurred. Please reach out directly by email.');
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-[#1a1813] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              05 // Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3efe8]">
            Let’s Discuss Opportunities & Systems
          </h2>
          <p className="text-sm text-[#8c8578] max-w-xl">
            Whether you have an internship opening, a full-stack project idea, or want to discuss database architecture, I’m ready to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-xl bg-[#12100d]/90 border border-[#221f19] flex flex-col gap-5">
              <h3 className="text-base font-bold text-[#f2ede4] pb-3 border-b border-[#1f1d17]">
                Direct Contact Channels
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-[#171511] border border-[#26221a] hover:border-accent text-[#ded8cd] hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-md bg-[#201d17] flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-[#7a7467]">Email</span>
                    <span className="text-xs font-medium text-[#ede7db]">{profile.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-[#171511] border border-[#26221a] hover:border-accent text-[#ded8cd] hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-md bg-[#201d17] flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-[#7a7467]">Phone / WhatsApp</span>
                    <span className="text-xs font-medium text-[#ede7db]">{profile.phone}</span>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-[#171511] border border-[#26221a] hover:border-accent text-[#ded8cd] hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-md bg-[#201d17] flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-[#7a7467]">LinkedIn</span>
                    <span className="text-xs font-medium text-[#ede7db]">Mugisha Leopold Bonfils</span>
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-[#171511] border border-[#26221a] hover:border-accent text-[#ded8cd] hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-md bg-[#201d17] flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-[#7a7467]">GitHub</span>
                    <span className="text-xs font-medium text-[#ede7db]">github.com/leopoldbonfils</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#171511] border border-[#26221a] text-[#8e8779]">
                  <div className="w-9 h-9 rounded-md bg-[#201d17] flex items-center justify-center text-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-[#7a7467]">Location</span>
                    <span className="text-xs font-medium text-[#b5af9f]">{profile.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#12100d]/90 border border-[#221f19] shadow-xl">
              <h3 className="text-lg font-bold text-[#f2ede4] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#8f887b] mb-6">
                All submissions are validated on the server. No credentials or private keys are exposed.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-[#a39c8f]">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="px-3.5 py-2.5 rounded-lg bg-[#161410] border border-[#29251d] text-sm text-[#f0ebe0] placeholder-[#575247] focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-[#a39c8f]">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@example"
                      className="px-3.5 py-2.5 rounded-lg bg-[#161410] border border-[#29251d] text-sm text-[#f0ebe0] placeholder-[#575247] focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-[#a39c8f]">
                    Subject / Inquired Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Internship / Project Collaboration"
                    className="px-3.5 py-2.5 rounded-lg bg-[#161410] border border-[#29251d] text-sm text-[#f0ebe0] placeholder-[#575247] focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-[#a39c8f]">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="px-3.5 py-2.5 rounded-lg bg-[#161410] border border-[#29251d] text-sm text-[#f0ebe0] placeholder-[#575247] focus:border-accent focus:outline-none transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-[#080807] font-semibold text-xs tracking-wider uppercase hover:bg-accent-hover disabled:opacity-50 transition-all shadow-md shadow-accent/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <div className="text-[11px] font-mono text-[#6e685c]">
                    Verified Email: leopordbonfils@gmail.com
                  </div>
                </div>

                {/* Status Message */}
                {status === 'success' && (
                  <div className="mt-4 p-4 rounded-lg bg-[#131b14] border border-[#243d26] text-xs text-[#a3d9a5] flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{responseMsg}</span>
                    </div>

                    {directMailto && (
                      <a
                        href={directMailto}
                        className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800 hover:bg-emerald-900 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Launch in Default Email Client</span>
                      </a>
                    )}
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 p-4 rounded-lg bg-[#1f1313] border border-[#422222] text-xs text-[#e89b9b] flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{responseMsg}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
