'use client';

import React from 'react';
import { Terminal, Database, Code, Smartphone, Cpu } from 'lucide-react';
import { skillCategories } from '@/data/skills';

const categoryIcons = [Code, Terminal, Cpu, Database, Smartphone];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-[#1a1813] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              03 // Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3efe8]">
            Technical Skills & Architecture
          </h2>
          <p className="text-sm text-[#8c8578] max-w-xl">
            Verified technologies backed by completed source code, transactional database schemas, and academic coursework.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="rounded-xl bg-[#12100d]/90 border border-[#221f19] p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1a1713] border border-[#2b261e] flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#ede8de]">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#7e7769] mb-4">
                    {category.description}
                  </p>

                  {/* Skills list with verified context */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-[#161410] border border-[#211e18] flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#f0ebe0]">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1f1c16] text-accent border border-[#302a1f]">
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#857e72] leading-tight">
                          {skill.verifiedContext}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
