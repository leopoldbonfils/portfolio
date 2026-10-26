'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0908]/85 backdrop-blur-md border-b border-[#23201a] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/#home"
          className="group flex items-center gap-2.5 text-foreground focus-visible:ring-1 focus-visible:ring-accent"
          aria-label="Leopold Mugisha Home"
        >
          <span className="w-8 h-8 rounded-full bg-[#1c1a16] border border-[#2e2a22] flex items-center justify-center font-mono text-xs font-semibold text-accent group-hover:border-accent transition-colors">
            LM
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#f3efe8] group-hover:text-accent transition-colors">
              {profile.name}
            </span>
            <span className="text-[11px] text-[#8e887c] font-mono leading-none">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#14120e]/80 border border-[#26231c] px-3 py-1.5 rounded-full shadow-inner shadow-black/30 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#26221a] text-accent border border-[#3b3528]'
                    : 'text-[#a39d91] hover:text-[#f3efe8] hover:bg-[#1a1813]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action button: CV */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Leopold_Mugisha_CV.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#191713] hover:bg-[#23201a] text-[#ded8cd] hover:text-white border border-[#2d2921] hover:border-[#423d31] transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 text-[#7b7569]" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#161410] border border-[#2b271f] text-[#c9c3b7] hover:text-white focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#0d0c0a]/95 backdrop-blur-xl border-b border-[#23201a] px-5 py-6 shadow-2xl flex flex-col gap-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#c9c3b7] hover:text-white hover:bg-[#181611] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#211e18] flex flex-col gap-2">
            <a
              href={profile.resumeUrl}
              download="Leopold_Mugisha_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-accent text-[#080807] hover:bg-accent-hover transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Résumé (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
