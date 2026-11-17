import React from "react";
import { Link } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiClock, 
  FiCompass, 
  FiCalendar, 
  FiCheckCircle, 
  FiArrowUpRight, 
  FiTerminal, 
  FiLayers, 
  FiTrendingUp, 
  FiAward,
  FiShare2,
  FiFileText
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { PAGES_DATA } from "../data/pagesData";

export default function PageLayout({ data }) {
  if (!data) return null;

  const {
    id,
    category,
    categoryLabel,
    path,
    title,
    subtitle,
    badge,
    readTime,
    heroStats = [],
    tags = [],
    overview,
    keyHighlights = [],
    technicalArchitecture,
    challengesAndSolutions = [],
    businessImpact,
    ctaText,
    ctaLink,
    relatedSlugs = [],
  } = data;

  const defaultBookingLink = "https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3";
  const targetCtaLink = ctaLink || defaultBookingLink;
  const isExternalCta = targetCtaLink.startsWith("http") || targetCtaLink.startsWith("/");

  // Resolve related pages
  const relatedPages = relatedSlugs
    .map((slug) => PAGES_DATA[slug])
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white relative font-sans">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Sticky Navigation */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#070b14]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all group"
            >
              <FiArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
              <span>Portfolio</span>
            </Link>

            <Link
              to="/explore"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 border border-purple-500/20 text-xs font-semibold transition-all"
            >
              <FiCompass className="text-xs" />
              <span className="hidden sm:inline">Explore</span>
              <span>18+ Pages</span>
            </Link>
          </div>

          {/* Center Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-[#070b14] rounded-[6px] flex items-center justify-center font-bold text-white text-sm">
                V
              </div>
            </div>
            <span className="font-heading font-bold text-sm text-white hidden md:inline">
              Vishal Singh
            </span>
          </Link>

          {/* Right CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 transition-all hover:scale-105"
            >
              <FiCalendar className="text-xs" />
              <span>Book 1:1</span>
              <FiArrowUpRight className="text-xs hidden sm:inline" />
            </a>

            <a
              href="https://wa.me/919520630066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
            >
              <FaWhatsapp className="text-sm" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/explore" className="hover:text-purple-400 transition-colors">Explore</Link>
            <span>/</span>
            <span className="text-purple-400 font-semibold capitalize">{category}</span>
          </nav>

          {/* Hero Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-10 relative overflow-hidden bg-gradient-to-b from-[#0f172a]/80 to-[#070b14]/90">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
            
            {/* Badge & Meta strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold font-mono tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                {badge || categoryLabel}
              </span>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FiClock className="text-purple-400" />
                  {readTime || "4 min read"}
                </span>
                <span>•</span>
                <span>By Vishal Singh (5+ YOE)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.18] mb-5">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {subtitle}
            </p>

            {/* Tech Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-white/[0.08]">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Hero Key Stats Grid */}
            {heroStats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/[0.08]">
                {heroStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
                  >
                    <div className="font-heading text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 1: Overview */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-8">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-4">
              <FiLayers className="text-sm" />
              <span>Executive Summary & Overview</span>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              {overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Section 2: Key Highlights */}
          {keyHighlights.length > 0 && (
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-8">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-5">
                <FiCheckCircle className="text-sm" />
                <span>Key Engineering Highlights & Deliverables</span>
              </div>
              <ul className="space-y-3.5">
                {keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 3: Technical Architecture & Implementation */}
          {technicalArchitecture && (
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-8">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
                <FiTerminal className="text-sm" />
                <span>Deep Technical Blueprint</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                {technicalArchitecture.headline}
              </h2>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {technicalArchitecture.description}
              </p>

              {/* Code Snippet Box */}
              {technicalArchitecture.codeSnippet && (
                <div className="rounded-2xl bg-black/60 border border-white/10 overflow-hidden text-xs font-mono">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-slate-400 text-[11px] ml-2">architecture-implementation.ts</span>
                    </div>
                    <span className="text-[10px] text-purple-400 font-semibold uppercase">Production Code Pattern</span>
                  </div>
                  <pre className="p-4 sm:p-5 overflow-x-auto text-slate-200 leading-relaxed">
                    <code>{technicalArchitecture.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Section 4: Engineering Challenges & Solutions */}
          {challengesAndSolutions.length > 0 && (
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-8">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-5">
                <FiAward className="text-sm" />
                <span>Real-World Challenges & How Vishal Solved Them</span>
              </div>
              <div className="space-y-5">
                {challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2.5"
                  >
                    <div className="text-xs font-mono font-semibold text-rose-300 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">The Challenge</span>
                      <span>{item.challenge}</span>
                    </div>
                    <div className="text-xs font-mono font-semibold text-emerald-300 flex items-start gap-2 pt-1">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">Engineered Fix</span>
                      <span className="text-slate-300 font-sans text-sm font-normal">{item.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Business Impact */}
          {businessImpact && (
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-slate-900/40 mb-10">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-3">
                <FiTrendingUp className="text-sm" />
                <span>Measurable Business & Architectural Impact</span>
              </div>
              <p className="text-slate-200 font-semibold text-base sm:text-lg leading-relaxed">
                "{businessImpact}"
              </p>
            </div>
          )}

          {/* Section 6: Big Action & Booking CTA */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden mb-12 bg-gradient-to-b from-purple-900/30 to-[#070b14]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
              <span>Ready to Collaborate?</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Work with Vishal Singh on Your Next Project
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Available for senior full-stack positions, architectural consultations, startup MVPs, and on-demand 1:1 problem solving.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={targetCtaLink}
                target={targetCtaLink.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
              >
                <FiCalendar className="text-base" />
                <span>{ctaText || "Book 1:1 on 1HourDeveloper"}</span>
                <FiArrowUpRight className="text-base" />
              </a>

              <a
                href="https://wa.me/919520630066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="/Vishal_fullstack_5yr.docx"
                download="Vishal_fullstack_5yr.docx"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white transition-all"
              >
                <FiFileText className="text-base" />
                <span>Download Resume (.docx)</span>
              </a>
            </div>
          </div>

          {/* Section 7: Related Case Studies & Pages */}
          {relatedPages.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Explore Related Case Studies & Skill Deep Dives
                  </h3>
                  <p className="text-xs text-slate-400">
                    Discover more engineering blueprints and production case studies
                  </p>
                </div>
                <Link
                  to="/explore"
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 shrink-0"
                >
                  <span>View All 18+ Pages</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPages.map((page) => (
                  <Link
                    key={page.id}
                    to={page.path}
                    className="glass-card rounded-2xl p-5 border border-white/10 hover:border-purple-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider block mb-2">
                        {page.categoryLabel}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-2">
                        {page.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {page.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4 mt-4 border-t border-white/[0.06]">
                      <span>{page.readTime}</span>
                      <span className="text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Global Minimal Footer */}
      <footer className="border-t border-white/[0.08] bg-[#05080f] py-8 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Vishal Singh.</span>
            <span>Senior Full Stack Developer • KL University MCA</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/" className="hover:text-purple-300 transition-colors">Portfolio Home</Link>
            <Link to="/explore" className="hover:text-purple-300 transition-colors">All 18+ Pages</Link>
            <Link to="/privacy-policy" className="hover:text-purple-300 transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-purple-300 transition-colors">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-purple-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
