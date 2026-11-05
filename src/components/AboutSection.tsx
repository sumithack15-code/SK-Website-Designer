import React from 'react';
import { MapPin, Sparkles, Code2, Palette, Terminal, ArrowUpRight, Instagram, Linkedin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-36 border-t border-white/[0.08] bg-[#0a0b0e] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -z-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>ABOUT ME</span>
          <span className="text-slate-600">/</span>
          <span>PHILOSOPHY & BACKGROUND</span>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white leading-[1.08] text-balance">
              Design-minded.<br />
              <span className="text-cyan-400">Code-driven.</span><br />
              Always evolving.
            </h2>

            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-light pt-4">
              <p>
                I am a web developer and designer based in New Delhi with a deep enthusiasm for building digital products that combine visual distinction with technical rigor.
              </p>
              <p>
                My approach unites design sensitivity with robust frontend architecture. I believe websites should not just look impressive in screenshots—they must be fast, accessible across every device, and engineered with genuine empathy for the person using them.
              </p>
              <p>
                Whether architecting an online appointment system for medical clinics or crafting sleek corporate digital presences, I focus on clean code, semantic structure, responsive precision, and frictionless user flows.
              </p>
            </div>

            {/* Quick Principles Strip */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  <span>Visual Detail</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Intentional typography, thoughtful spacing, and clean hierarchy without template clutter.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Clean Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Modern component architecture, strict type safety, and zero-bloat performance.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Real Outcomes</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Direct conversions, sub-second loads, and accessible interfaces that patients and clients trust.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#0e1017] border border-white/[0.1] p-8 sm:p-10 shadow-2xl space-y-8 glass-panel">
              {/* Top Identity Block */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                    Identity
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-sm font-mono text-cyan-400 mt-1">
                    {PERSONAL_INFO.profession}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-black border border-cyan-400/30 flex items-center justify-center p-1 shadow-lg shadow-cyan-500/10 overflow-hidden shrink-0">
                  <img
                    src={PERSONAL_INFO.businessLogoUrl}
                    alt="SK Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Verified Details Block */}
              <div className="space-y-4 pt-4 border-t border-white/[0.08] text-xs font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 uppercase block text-[10px]">Location</span>
                    <span className="text-slate-200 font-medium leading-relaxed block">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 uppercase block text-[10px]">Availability</span>
                    <span className="text-emerald-400 font-semibold block">
                      Available for Select Projects
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 uppercase block text-[10px]">Direct Phone</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-slate-200 hover:text-cyan-400 font-medium block transition-colors"
                    >
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-6 border-t border-white/[0.08] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                  Connect & Socials
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/[0.08] hover:border-cyan-400/40 text-slate-200 hover:text-white transition-all flex items-center justify-between text-xs font-mono group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/[0.08] hover:border-cyan-400/40 text-slate-200 hover:text-white transition-all flex items-center justify-between text-xs font-mono group"
                  >
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>{PERSONAL_INFO.instagramUsername}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
