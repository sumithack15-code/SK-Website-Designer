import React from 'react';
import { Code2, Cpu, Wrench, Layers, Rocket } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Engineering':
        return Code2;
      case 'Frameworks & Build Tools':
        return Cpu;
      case 'UI/UX & Design Systems':
        return Layers;
      case 'Performance & Deployment':
      default:
        return Rocket;
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-36 border-t border-white/[0.08] bg-[#0a0b0e] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>TOOLING & STACK</span>
            <span className="text-slate-600">/</span>
            <span>VERIFIED CAPABILITIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-white leading-[1.08]">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-400 font-light mt-3 leading-relaxed">
            The core tools, languages, and frameworks I use to build robust, modern digital experiences.
          </p>
        </div>

        {/* 4 Categorized Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);

            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 sm:p-9 shadow-xl glass-panel relative overflow-hidden group hover:border-cyan-400/30 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                        skill.highlight
                          ? 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 font-semibold shadow-sm'
                          : 'bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
