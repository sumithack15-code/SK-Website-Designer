import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ProjectScreenshot } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  projectName: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
  projectName,
}) => {
  const [scale, setScale] = React.useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % screenshots.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  useEffect(() => {
    setScale(1);
  }, [currentIndex]);

  if (!isOpen || !screenshots[currentIndex]) return null;

  const current = screenshots[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-200 p-4 md:p-8"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
            {projectName} · Slide {currentIndex + 1} of {screenshots.length}
          </div>
          <h3 className="text-base font-semibold text-white tracking-tight">{current.title}</h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.75, s - 0.25))}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-slate-400 px-1">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale((s) => Math.min(2.5, s + 0.25))}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 ml-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Close (Esc)"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[82vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-auto max-h-[75vh] w-full flex items-center justify-center rounded-xl bg-slate-900/50 border border-slate-800/80 shadow-2xl">
          <img
            src={current.src}
            alt={current.title}
            referrerPolicy="no-referrer"
            style={{ transform: `scale(${scale})`, transition: 'transform 0.15s ease-out' }}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg select-none"
          />
        </div>

        {/* Caption */}
        <p className="mt-4 text-center text-sm text-slate-300 max-w-2xl px-4 font-light">
          {current.caption}
        </p>
      </div>

      {/* Navigation Arrows */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % screenshots.length);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};
