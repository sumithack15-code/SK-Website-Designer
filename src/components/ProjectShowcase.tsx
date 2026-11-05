import React, { useState } from 'react';
import { ExternalLink, Maximize2, CheckCircle2, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { FEATURED_PROJECTS, FeaturedProject, ProjectScreenshot } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';

export const ProjectShowcase: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentScreenshots, setCurrentScreenshots] = useState<ProjectScreenshot[]>([]);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [activeProjectTitle, setActiveProjectTitle] = useState('');

  const handleOpenLightbox = (screenshots: ProjectScreenshot[], index: number, title: string) => {
    setCurrentScreenshots(screenshots);
    setCurrentScreenshotIndex(index);
    setActiveProjectTitle(title);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-24 lg:py-36 border-t border-white/[0.08] bg-[#0a0b0e] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>PORTFOLIO</span>
            <span className="text-slate-600">/</span>
            <span>CASE STUDIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-white leading-[1.08]">
            Selected Work
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 font-light mt-3 leading-relaxed">
            Turning ideas into digital experiences.
          </p>
        </div>

        {/* Editorial Case Studies (Alternating Layout) */}
        <div className="space-y-28 lg:space-y-36">
          {FEATURED_PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl glass-panel relative overflow-hidden group"
              >
                {/* Subtle Ambient background aura */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Visual Preview Side (Large & Dominant) */}
                  <div
                    className={`lg:col-span-7 space-y-4 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Primary Large Website Screenshot Preview */}
                    <div
                      className="group/img relative rounded-2xl overflow-hidden bg-slate-950 border border-white/[0.1] shadow-2xl cursor-pointer hover:border-cyan-400/50 transition-all"
                      onClick={() =>
                        handleOpenLightbox(project.screenshots, 0, project.title)
                      }
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <img
                          src={project.screenshots[0].src}
                          alt={`${project.title} Website Screenshot Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                          <Maximize2 className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs font-mono font-bold tracking-wider">
                            CLICK TO ENLARGE LIGHTBOX
                          </span>
                        </div>
                      </div>

                      {/* Browser Chrome Simulation Bar */}
                      <div className="px-4 py-2.5 bg-[#0a0b0e] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2 truncate">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                          <span className="truncate">{project.liveUrl}</span>
                        </div>
                        <span className="text-[11px] text-cyan-400 shrink-0 hidden sm:inline">
                          Main Hero View
                        </span>
                      </div>
                    </div>

                    {/* Secondary Screenshot Thumbnail (Location / Booking View) */}
                    {project.screenshots[1] && (
                      <div
                        className="group/sub relative rounded-xl overflow-hidden bg-slate-950 border border-white/[0.08] p-3 flex items-center justify-between gap-4 cursor-pointer hover:border-cyan-400/40 transition-all"
                        onClick={() =>
                          handleOpenLightbox(project.screenshots, 1, project.title)
                        }
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-16 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-white/[0.1]">
                            <img
                              src={project.screenshots[1].src}
                              alt={project.screenshots[1].title}
                              className="w-full h-full object-cover object-top group-hover/sub:scale-110 transition-transform"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white block truncate">
                              {project.screenshots[1].title}
                            </span>
                            <span className="text-[11px] text-slate-400 truncate block">
                              {project.screenshots[1].caption}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono text-cyan-400 shrink-0 flex items-center gap-1 group-hover/sub:underline">
                          <span>View Detail</span>
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Editorial Narrative Side */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Category Label */}
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
                      {project.title}
                    </h3>

                    {/* Compelling Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Role Contribution */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08] mb-6 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                        My Development & Design Role:
                      </span>
                      <p className="text-xs text-slate-200 font-medium leading-snug">
                        {project.myRole}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-8">
                      {project.keyHighlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-slate-300 font-light"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Verified Technologies Used */}
                    <div className="mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                        Technologies Used:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Live Website Button with External Link */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:brightness-110 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center gap-2 group/btn"
                      >
                        <span>View Live Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={() =>
                          handleOpenLightbox(project.screenshots, 0, project.title)
                        }
                        className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.1] transition-colors"
                        title="Open Lightbox Preview"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={currentScreenshots}
        currentIndex={currentScreenshotIndex}
        onNavigate={setCurrentScreenshotIndex}
        projectName={activeProjectTitle}
      />
    </section>
  );
};
