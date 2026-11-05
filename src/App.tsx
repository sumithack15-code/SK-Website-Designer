import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll spy to keep active section indicator synced
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'services', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#f3f4f6] flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden">
      {/* Floating / Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section — Unforgettable Above-The-Fold */}
        <Hero
          onScrollToProjects={() => scrollTo('projects')}
          onScrollToContact={() => scrollTo('contact')}
        />

        {/* About Me Section — Design-minded. Code-driven. Always evolving. */}
        <AboutSection />

        {/* Selected Work / Projects — Nagpal Clinic & HealthBandhan */}
        <ProjectShowcase />

        {/* Services Section — Minimal Editorial Cards */}
        <ServicesSection onContactClick={() => scrollTo('contact')} />

        {/* Skills & Technologies — Modern Categorized Layout */}
        <SkillsSection />

        {/* Contact Section — Strong Conversion */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      {/* Floating WhatsApp Button with Soft Glowing Pulse */}
      <FloatingWhatsApp />
    </div>
  );
}
