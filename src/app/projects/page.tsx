import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ArrowUpRight, BookOpen } from 'lucide-react';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

export const metadata = {
  title: `Project Archive — ${profile.name}`,
  description: 'Complete index of verified engineering projects, systems, and source code.',
};

export default function ProjectsArchivePage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Back button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Main Portfolio</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-accent">
          Archive
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f2ede4]">
          Engineering Projects Archive
        </h1>
        <p className="text-sm text-[#8c8578] max-w-2xl">
          An exhaustive collection of verified software engineering applications, backend servers, databases, and mobile platforms built by {profile.name}.
        </p>
      </div>

      {/* Projects Table / Editorial View */}
      <div className="rounded-xl bg-[#110f0c]/90 border border-[#211e18] overflow-hidden shadow-2xl">
        <div className="divide-y divide-[#1f1c16]">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#15130f] transition-colors"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#1c1913] text-accent border border-[#2e281f]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#787163]">
                    • {project.status}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#f2ede4]">
                  {project.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#9b9487] leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#171511] text-[#c7c0b3] border border-[#26221a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 self-start lg:self-center shrink-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#191713] text-[#ded8cd] border border-[#2b271f] hover:border-accent hover:text-white transition-all text-xs font-medium"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>Case Study</span>
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent text-[#080807] hover:bg-accent-hover font-semibold transition-all text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
