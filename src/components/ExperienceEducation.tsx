'use client';

import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experienceList } from '@/data/experience';
import { educationList } from '@/data/education';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 border-t border-[#1a1813] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              04 // Trajectory
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3efe8]">
            Experience & Education Timeline
          </h2>
          <p className="text-sm text-[#8c8578] max-w-xl">
            Verified academic milestones and hands-on software development initiatives in Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-[#211e18]">
              <Briefcase className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#ede8de]">
                Engineering Experience
              </h3>
            </div>

            <div className="flex flex-col gap-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#23201a]">
              {experienceList.map((exp, idx) => (
                <div key={idx} className="relative pl-9 flex flex-col gap-2">
                  <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-[#1c1914] border-2 border-accent" />
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-accent">
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161410] text-[#8e877a] border border-[#23201a]">
                      {exp.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#f2ede4]">
                    {exp.role}
                  </h4>
                  <div className="text-xs text-[#9d9688]">
                    {exp.organization} • {exp.location}
                  </div>

                  <p className="text-xs text-[#b0a99c] leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-1.5 mt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-[#8f887c] flex items-start gap-1.5">
                        <span className="text-accent mt-0.5 text-[10px]">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#171511] text-[#b8b1a3] border border-[#26221b]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education">
            <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-[#211e18]">
              <GraduationCap className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#ede8de]">
                Verified Education
              </h3>
            </div>

            <div className="flex flex-col gap-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#23201a]">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative pl-9 flex flex-col gap-2">
                  <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-[#1c1914] border-2 border-accent" />

                  <span className="text-xs font-mono text-accent">
                    {edu.period}
                  </span>

                  <h4 className="text-base font-bold text-[#f2ede4]">
                    {edu.credential}
                  </h4>
                  <div className="text-xs text-[#9d9688]">
                    {edu.institution} • {edu.location}
                  </div>

                  <ul className="flex flex-col gap-1 mt-1">
                    {edu.details.map((d, dIdx) => (
                      <li key={dIdx} className="text-xs text-[#8f887c] flex items-start gap-1.5">
                        <span className="text-accent mt-0.5 text-[10px]">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
