import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertCircle, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import { profile } from '@/data/profile';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study | ${profile.name}`,
    description: project.shortDescription,
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Back Navigation */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-hover transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
        <span className="text-[#3b362b]">•</span>
        <Link
          href="/projects"
          className="text-xs font-mono text-[#8a8376] hover:text-[#ded8cd] transition-colors"
        >
          View All Archive
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="flex flex-col gap-3 pb-8 border-b border-[#211e18]">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#1b1913] text-accent border border-[#332b1f]">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[#787163]">
            • {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f2ede4] leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#b8b1a3] font-light leading-relaxed">
          {project.fullDescription}
        </p>

        {/* CTA Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-[#080807] font-semibold text-xs tracking-wide uppercase hover:bg-accent-hover transition-all shadow-md shadow-accent/10"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>

          <div className="text-xs font-mono text-[#857e72]">
            Author: {profile.name}
          </div>
        </div>
      </header>

      {/* Main Case Study Sections */}
      <div className="flex flex-col gap-10 py-10 text-[#ded8cd]">
        
        {/* Role & Contribution */}
        <section className="p-6 rounded-xl bg-[#13110d] border border-[#242018] flex flex-col gap-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Documented Contribution & Role</span>
          </h2>
          <p className="text-sm text-[#c7c0b3] leading-relaxed">
            {project.myRole}
          </p>
        </section>

        {/* Problem Being Solved */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#f2ede4] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-accent" />
            <span>The Problem Being Solved</span>
          </h2>
          <p className="text-sm text-[#b5af9f] leading-relaxed">
            {project.problemSolved}
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#f2ede4] flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <span>Technical Architecture</span>
          </h2>
          <p className="text-sm text-[#b5af9f] leading-relaxed">
            {project.architecture}
          </p>
        </section>

        {/* Key Features */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#f2ede4]">
            Key Implementation Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((f, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#14120e] border border-[#221f19] flex items-start gap-2.5 text-xs text-[#cfc8bc]"
              >
                <span className="text-accent mt-0.5">▸</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Verified Outcomes */}
        <section className="p-6 rounded-xl bg-[#14120e] border border-[#26221a] flex flex-col gap-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-2">
            <Cpu className="w-4 h-4 text-accent" />
            <span>Technical Challenges & Verified Outcomes</span>
          </h2>

          <div className="flex flex-col gap-1.5">
            <div className="text-xs font-mono text-[#918a7d] uppercase">Challenge</div>
            <p className="text-sm text-[#b5af9f] leading-relaxed">
              {project.challengesAndSolutions}
            </p>
          </div>

          <div className="pt-3 border-t border-[#1f1c16] flex flex-col gap-1.5">
            <div className="text-xs font-mono text-emerald-400 uppercase">Verified Outcome</div>
            <p className="text-sm text-[#b5af9f] leading-relaxed">
              {project.verifiedOutcome}
            </p>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#f2ede4]">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded-md bg-[#181611] text-[#ded8cd] border border-[#2c2820]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <footer className="mt-8 pt-8 border-t border-[#211e18] flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent-hover"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Featured Projects</span>
        </Link>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ded8cd] hover:text-white"
        >
          <span>GitHub Source</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </footer>

    </article>
  );
}
