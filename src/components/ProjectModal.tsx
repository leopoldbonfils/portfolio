'use client';

import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Layers, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#110f0c] border border-[#2d2921] p-6 sm:p-8 shadow-2xl text-[#ded9cd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#232019]">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#1c1913] text-accent border border-[#352f23]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#827b6f]">• {project.status}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#181611] text-[#9a9386] hover:text-white border border-[#2b271f] hover:border-[#423d32] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-6 py-6 text-sm leading-relaxed text-[#b8b2a3]">
          {/* Overview */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-accent mb-2">
              Project Overview
            </h3>
            <p className="text-[#ded8cd]">{project.fullDescription}</p>
          </div>

          {/* Role */}
          <div className="p-4 rounded-xl bg-[#15130f] border border-[#25221b]">
            <h3 className="text-xs uppercase font-mono tracking-wider text-accent mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Contribution & Role</span>
            </h3>
            <p className="text-xs text-[#cfc9bd]">{project.myRole}</p>
          </div>

          {/* Problem & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#15130f] border border-[#25221b]">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#9b9487] mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-accent" />
                <span>Problem Being Solved</span>
              </h3>
              <p className="text-xs text-[#b0a99c]">{project.problemSolved}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#15130f] border border-[#25221b]">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#9b9487] mb-1.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-accent" />
                <span>Technical Architecture</span>
              </h3>
              <p className="text-xs text-[#b0a99c]">{project.architecture}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#9b9487] mb-2.5">
              Key Implementation Features
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#cfc8bc]">
                  <span className="text-accent mt-0.5">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Verified Outcomes */}
          <div className="p-4 rounded-xl bg-[#161410] border border-[#29251d]">
            <h3 className="text-xs uppercase font-mono tracking-wider text-accent mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-accent" />
              <span>Technical Challenge & Verified Outcome</span>
            </h3>
            <p className="text-xs text-[#b5af9f] mb-2">
              <strong className="text-[#ded8cd]">Challenge:</strong> {project.challengesAndSolutions}
            </p>
            <p className="text-xs text-[#9d9688]">
              <strong className="text-emerald-400">Verified Result:</strong> {project.verifiedOutcome}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#8b8476] mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#1a1713] text-[#d6d0c4] border border-[#2d2820]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-[#232019]">
          <div className="text-xs font-mono text-[#837c70]">
            Repository verified on GitHub
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-[#080807] font-semibold text-xs tracking-wide uppercase hover:bg-accent-hover transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
