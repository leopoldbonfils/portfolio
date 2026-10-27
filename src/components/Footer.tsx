'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-[#1a1813] bg-[#090807]/90 py-12 text-[#9a9386]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#1c1a15]">
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold text-[#f3efe8] tracking-tight">
              {profile.name}
            </span>
            <span className="text-xs font-mono text-[#787163]">
              Full-Stack Developer • Software Engineering Student
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#14120e] border border-[#221f19] hover:border-accent text-[#b0a99b] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#14120e] border border-[#221f19] hover:border-accent text-[#b0a99b] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-[#14120e] border border-[#221f19] hover:border-accent text-[#b0a99b] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#14120e] border border-[#221f19] hover:border-accent text-[#b0a99b] hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6e685c]">
          <p>
            © {currentYear} {profile.name}. Built with Next.js, React & Clean Code.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={profile.resumeUrl}
              download="Leopold_Mugisha_CV.pdf"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </a>

            <span>•</span>

            <span className="text-[#595347]">Kigali, Rwanda</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
