'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Github, ArrowUpRight, BookOpen } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Full-Stack', 'Backend & Database', 'Mobile', 'Web'] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-[#1a1813] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent">
                02 // Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f3efe8]">
              Featured Engineering Projects
            </h2>
            <p className="text-sm text-[#8c8578] max-w-xl">
              Practical distributed applications, enterprise database architectures, and cross-platform mobile systems verified in active repositories.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono text-accent hover:text-accent-hover transition-colors"
          >
            <span>View Complete Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-accent text-[#080807] font-semibold shadow-sm'
                    : 'bg-[#14120e] text-[#9a9386] border border-[#23201a] hover:text-[#ded8cd] hover:border-[#383329]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group relative rounded-xl bg-[#12100d]/90 border border-[#221f19] hover:border-[#3b3528] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#1a1713] text-accent border border-[#2d281f]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#787164]">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#f2ede4] group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9e978b] leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161410] text-[#c2bcaf] border border-[#24211a]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#787164]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions footer */}
              <div className="pt-4 border-t border-[#1c1914] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ded8cd] hover:text-accent transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#181611] text-[#9e978a] hover:text-white border border-[#26221b] hover:border-[#3d372b] transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="p-2 rounded-lg bg-[#181611] text-[#9e978a] hover:text-white border border-[#26221b] hover:border-[#3d372b] transition-colors"
                    aria-label={`Read full story for ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for instant case-study viewing */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
