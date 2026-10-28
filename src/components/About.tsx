'use client';

import React from 'react';
import { BookOpen, MapPin, GraduationCap, Code2, Globe } from 'lucide-react';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#1a1813] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              01 // Background & Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3efe8]">
            Engineering Practical Systems with Clean Code
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-[#b5af9f] leading-relaxed text-sm sm:text-base">
            {profile.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="mt-4 p-5 rounded-xl bg-[#14120e] border border-[#25221b]">
              <h3 className="text-sm font-semibold text-[#ede8de] mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent" />
                <span>My Core Engineering Principles</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#9e978a]">
                <li className="flex items-center gap-2">
                  <span className="text-accent">▹</span> Modular separation of concerns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">▹</span> 3NF normalized relational schemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">▹</span> Resilient error handling & rollbacks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">▹</span> Accessible, responsive user interfaces
                </li>
              </ul>
            </div>
          </div>

          {/* Key Facts & Dossier Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="p-5 rounded-xl bg-[#13110e]/90 border border-[#24211a] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1c1914] border border-[#302a20] flex items-center justify-center text-accent">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#7f786c] font-mono">Degree & Specialization</div>
                  <div className="text-sm font-semibold text-[#f0ebe0]">
                    B.Sc. in Software Engineering
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#8c8477]">
                Software Engineering (2023–2026). In-depth coursework in Distributed Systems, PL/SQL, Java OOP, and Software Architecture.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e]/90 border border-[#24211a] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1c1914] border border-[#302a20] flex items-center justify-center text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#7f786c] font-mono">Based In</div>
                  <div className="text-sm font-semibold text-[#f0ebe0]">
                    Kigali, Rwanda
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#8c8477]">
                Gasabo District. Available for on-site, hybrid, or remote engineering teams worldwide.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e]/90 border border-[#24211a] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1c1914] border border-[#302a20] flex items-center justify-center text-accent">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#7f786c] font-mono">Spoken Languages</div>
                  <div className="text-sm font-semibold text-[#f0ebe0]">
                    English & Kinyarwanda
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {profile.languages.map((l) => (
                  <span
                    key={l.name}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#1b1913] text-[#cfc8bc] border border-[#2e2920]"
                  >
                    {l.name} ({l.level})
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
