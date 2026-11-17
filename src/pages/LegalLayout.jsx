import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft, FiShield, FiFileText, FiGlobe, FiInfo, FiCalendar, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function LegalLayout({ title, subtitle, badge, lastUpdated = "November 2026", children }) {
  const location = useLocation();

  const legalNavLinks = [
    { name: "Privacy Policy", to: "/privacy-policy", icon: <FiShield /> },
    { name: "Terms & Conditions", to: "/terms-and-conditions", icon: <FiFileText /> },
    { name: "Cookie & Consent", to: "/cookie-policy", icon: <FiGlobe /> },
    { name: "Fair Use & Disclaimers", to: "/disclaimer", icon: <FiInfo /> },
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Top Fixed Navigation Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#080c14]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back to Home Button & Brand */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all group"
            >
              <FiArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="h-5 w-[1px] bg-white/10 hidden sm:block" />

            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#080c14] rounded-[6px] flex items-center justify-center font-bold text-white text-sm">
                  V
                </div>
              </div>
              <span className="font-heading font-bold text-sm text-white hidden md:inline">
                Vishal Singh
              </span>
            </Link>
          </div>

          {/* Quick Consultation CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 transition-all hover:scale-105"
            >
              <FiCalendar className="text-xs" />
              <span>Book 1:1 Call</span>
              <FiArrowUpRight className="text-xs" />
            </a>

            <a
              href="https://wa.me/919520630066"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
            >
              <FaWhatsapp className="text-sm" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Page Container */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Page Heading Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-8 relative overflow-hidden bg-gradient-to-b from-[#0e1322] to-[#080c14]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-semibold font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                {badge || "Legal & Compliance Center"}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Last Updated: {lastUpdated}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Horizontal Legal Tabs Switcher */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/[0.08] overflow-x-auto text-xs font-semibold">
              {legalNavLinks.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-bold"
                        : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Legal Document Content Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl bg-[#0a0e1a]/90">
            {children}
          </div>

        </div>
      </main>

      {/* Legal Footer */}
      <footer className="py-8 border-t border-white/[0.08] bg-[#07090f] text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>© {new Date().getFullYear()} Vishal Singh. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Khatima, Uttarakhand, India</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-purple-300 transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-purple-300 transition-colors">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-purple-300 transition-colors">Cookies</Link>
            <Link to="/disclaimer" className="hover:text-purple-300 transition-colors">Disclaimers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
