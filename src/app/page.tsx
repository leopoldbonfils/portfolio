import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceEducation from '@/components/ExperienceEducation';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceEducation />
      <ContactSection />
    </div>
  );
}
