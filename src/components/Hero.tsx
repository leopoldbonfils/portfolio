'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#181612] border border-[#2d2921] text-xs text-[#c9c3b7]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-wide">{profile.status}</span>
            </div>

            {/* Title / Name */}
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest font-mono text-accent">
                Full-Stack Developer • Student
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f1e9] leading-[1.1]">
                {profile.name}
              </h1>
            </div>

            {/* Headline */}
            <p className="text-lg sm:text-xl text-[#c2bcaf] font-light leading-relaxed">
              {profile.headline}
            </p>

            {/* Short verified description */}
            <p className="text-sm sm:text-base text-[#8f887b] leading-relaxed max-w-xl">
              Software engineering student at the{' '}
              <span className="text-[#ded8cd] font-medium">Adventist University of Central Africa (AUCA)</span>{' '}
              in Kigali. Passionate about distributed systems, relational database architecture, and building tools that address real-world challenges.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-[#080807] font-semibold text-xs tracking-wide uppercase hover:bg-accent-hover transition-all shadow-md shadow-accent/10"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181611] text-[#ded8cd] border border-[#2b271f] hover:border-[#473f32] hover:text-white transition-all text-xs tracking-wide uppercase font-semibold"
              >
                <span>Contact Me</span>
                <Mail className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-[#1f1d17]">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#8f887b] hover:text-[#f3efe8] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-accent" />
                <span className="font-mono">github.com/leopoldbonfils</span>
              </a>

              <span className="text-[#3a352b]">•</span>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#8f887b] hover:text-[#f3efe8] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span className="font-mono">LinkedIn</span>
              </a>

              <span className="text-[#3a352b]">•</span>

              <span className="text-xs text-[#6e675b] font-mono">
                📍 {profile.location}
              </span>
            </div>
          </div>

          {/* Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#13110d]/90 border border-[#26221a] p-6 shadow-2xl backdrop-blur-sm">
              
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#211e18] text-xs font-mono text-[#8a8376]">
                <span>ENGINEERING DOSSIER</span>
                <span className="text-accent font-semibold">VERIFIED</span>
              </div>

              {/* Portrait container */}
              <div className="relative my-5 mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#2f2a20] shadow-inner bg-[#1a1813]">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Key Tech Tags */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="text-[11px] font-mono uppercase text-[#736c60] tracking-wider">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Java & RMI', 'Oracle PL/SQL', 'React & Next.js', 'React Native', 'Node.js', 'MySQL', 'PHP'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#1a1813] text-[#cfc8bc] border border-[#2c2820]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location footer pill */}
              <div className="mt-5 pt-4 border-t border-[#211e18] flex items-center justify-between text-xs text-[#9a9386]">
                <span>Adventist Univ. of Central Africa</span>
                <span className="font-mono text-accent">2023 — 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
