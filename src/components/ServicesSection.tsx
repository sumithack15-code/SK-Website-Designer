import React from 'react';
import {
  Code,
  Smartphone,
  Layout,
  Building2,
  Sparkles,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return Code;
      case 'responsive-design':
        return Smartphone;
      case 'ui-ux-implementation':
        return Layout;
      case 'business-websites':
        return Building2;
      case 'landing-pages':
        return Sparkles;
      case 'website-optimization':
      default:
        return Zap;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-36 border-t border-white/[0.08] bg-[#0a0b0e] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>SERVICES</span>
              <span className="text-slate-600">/</span>
              <span>SPECIALIZED CAPABILITIES</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-white leading-[1.08]">
              Expertise & Offerings
            </h2>
            <p className="text-xl text-slate-400 font-light mt-3 leading-relaxed">
              Tailored web solutions designed to elevate your brand presence and drive real results.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="self-start md:self-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/[0.1] hover:border-cyan-400/50 transition-all active:scale-95 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* 6 Minimal Services Cards in a 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.id);

            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 sm:p-9 shadow-xl glass-panel-hover flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Top Bar: Minimal Icon + Index */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-xs text-slate-600 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Tags */}
                <div className="pt-6 border-t border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] font-mono text-slate-300 bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
