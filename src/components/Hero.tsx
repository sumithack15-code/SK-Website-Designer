import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MessageCircle, Globe2, Code, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects, onScrollToContact }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-ambient-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Impact */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Small Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/[0.08] text-[11px] font-mono tracking-widest text-slate-300 mb-8 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-cyan-300 font-semibold uppercase">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline with Bold, Oversized Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-[-0.035em] text-white leading-[1.04] mb-8 text-balance">
              Building Digital{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Experiences
              </span>{' '}
              That Make an{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Impact.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full" />
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10 text-pretty">
              {PERSONAL_INFO.bio}
            </p>

            {/* Two CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onScrollToProjects}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:brightness-110 text-slate-950 font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/25 active:scale-95 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToContact}
                className="px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs font-mono uppercase tracking-widest border border-white/[0.1] hover:border-cyan-400/40 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Trust Reassurance Highlights */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Full-Stack & UI/UX</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Modern Clean Code</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Sub-Second Performance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0e1017] border border-white/[0.1] shadow-2xl p-6 sm:p-7">
                {/* Visual Workspace & Portrait Composition */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/[0.08]">
                  <img
                    src={PERSONAL_INFO.portraitUrl}
                    alt="Sumit Kar - Web Developer & Designer"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />

                  {/* Top-Right Location Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>New Delhi, India</span>
                  </div>
                </div>

                {/* Floating Preview Card 1: Nagpal Clinic */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08] mb-3 flex items-center justify-between gap-3 hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">
                        Nagpal Clinic & Ultrasound
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        Healthcare & Diagnostic Platform
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    Live
                  </span>
                </div>

                {/* Floating Preview Card 2: HealthBandhan */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08] flex items-center justify-between gap-3 hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">
                        HealthBandhan
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        Eye Care & Diagnostics Portal
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Scrolling Indicator */}
        <div className="mt-16 flex items-center justify-center">
          <button
            onClick={onScrollToProjects}
            className="flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span>Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-cyan-400/50 transition-colors">
              <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
