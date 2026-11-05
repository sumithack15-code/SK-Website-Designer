import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto and WhatsApp options
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi Sumit, my name is ${formData.name || 'a client'}. I would like to discuss a project with you.\n\nProject details: ${
      formData.projectDetails || 'I want to discuss website development and design requirements.'
    }\n\nMy email: ${formData.email || 'Provided upon connect'}`;

    window.open(`https://wa.me/917982338478?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Sumit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.projectDetails}\n\nSent via portfolio website.`
    );
    window.location.href = `mailto:sumitkar78@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+917982338478');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 border-t border-white/[0.08] bg-[#0a0b0e] relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute bottom-0 right-1/4 -z-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Bio & Direct Contacts */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>GET IN TOUCH</span>
                <span className="text-slate-600">/</span>
                <span>COLLABORATION</span>
              </div>

              {/* Exact Required Headline */}
              <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-white leading-[1.06] text-balance">
                Have an idea?<br />
                <span className="text-cyan-400">Let's make it happen.</span>
              </h2>

              {/* Exact Supporting Text */}
              <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl pt-2">
                I'm always interested in collaborating on meaningful projects and building something exceptional.
              </p>
            </div>

            {/* Display: Name, Phone, Location */}
            <div className="p-8 rounded-3xl bg-[#0e1017] border border-white/[0.08] space-y-5 glass-panel">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Developer & Designer
                  </span>
                  <span className="text-lg font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
                  Available for Projects
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhoneNumber}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                    Location
                  </span>
                  <span className="text-sm font-medium text-slate-200 block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Two Direct Buttons: [ Start a Project ] & [ WhatsApp Me ] */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/60 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Me</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact-form-input');
                    if (el) el.focus();
                  }}
                  className="flex-1 min-w-[160px] py-3.5 px-5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links: Instagram & LinkedIn */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Follow / Connect:
              </span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono group"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/[0.08] hover:border-pink-400/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono group"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{PERSONAL_INFO.instagramUsername}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0e1017] border border-white/[0.1] p-8 sm:p-10 shadow-2xl glass-panel relative">
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                    Your project details are ready. Choose how you'd like to transmit them directly to Sumit Kar:
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>

                    <button
                      onClick={handleSendViaEmail}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/[0.1] transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Open Mail Client</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectDetails: '' });
                    }}
                    className="text-xs font-mono text-slate-500 hover:text-slate-300 pt-4 underline"
                  >
                    Edit Message / Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-light">
                      Fill in your details below and connect directly with Sumit Kar.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300">
                      Your Name *
                    </label>
                    <input
                      id="contact-form-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Project Details Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300">
                      Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDetails: e.target.value })
                      }
                      placeholder="Describe your project, website goals, or timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-y font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 hover:brightness-110 text-slate-950 font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-slate-500 text-center">
                    Direct communication with Sumit Kar · Confidentiality guaranteed
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
