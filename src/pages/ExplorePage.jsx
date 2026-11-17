import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiSearch, 
  FiCompass, 
  FiCalendar, 
  FiArrowUpRight, 
  FiLayers, 
  FiBriefcase, 
  FiTool, 
  FiBookOpen, 
  FiShield, 
  FiClock,
  FiFileText,
  FiMapPin
} from "react-icons/fi";
import { FaWhatsapp, FaRocket } from "react-icons/fa";
import { ALL_PAGES } from "../data/pagesData";

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Legal pages list for directory completeness
  const legalPages = [
    {
      id: "privacy-policy",
      category: "legal",
      categoryLabel: "Legal & Compliance",
      path: "/privacy-policy",
      title: "Privacy Policy: Data Protection & Indian IT Act 2000",
      subtitle: "Full disclosure of personal data handling, storage policies, GDPR compliance, and user rights.",
      badge: "Compliance",
      readTime: "3 min read",
      tags: ["Privacy", "IT Act 2000", "GDPR", "Data Safety"]
    },
    {
      id: "terms-and-conditions",
      category: "legal",
      categoryLabel: "Legal & Compliance",
      path: "/terms-and-conditions",
      title: "Terms & Conditions of Service & Consultation",
      subtitle: "IP rights, consultation terms, 1HourDeveloper bookings, and warranty disclaimers.",
      badge: "Terms",
      readTime: "4 min read",
      tags: ["Terms", "IP Rights", "Consultation", "SLAs"]
    },
    {
      id: "cookie-policy",
      category: "legal",
      categoryLabel: "Legal & Compliance",
      path: "/cookie-policy",
      title: "Cookie & Consent Policy: Interactive Preferences",
      subtitle: "Granular cookie categorization, analytics tracking, and instant user consent reset tool.",
      badge: "Consent",
      readTime: "3 min read",
      tags: ["Cookies", "Consent", "Preferences", "Analytics"]
    },
    {
      id: "disclaimer",
      category: "legal",
      categoryLabel: "Legal & Compliance",
      path: "/disclaimer",
      title: "Fair Use, Venture Independence & Technical Disclaimers",
      subtitle: "Clarification on proprietary ventures (Uniportal.in, Kumaun Software) and client metrics.",
      badge: "Disclaimers",
      readTime: "2 min read",
      tags: ["Disclaimers", "Uniportal", "Startups", "Metrics"]
    }
  ];

  const combinedCatalog = useMemo(() => {
    return [...ALL_PAGES, ...legalPages];
  }, []);

  const categories = [
    { key: "all", label: "All Pages", count: combinedCatalog.length, icon: <FiCompass /> },
    { key: "skills", label: "Skills & Architecture", count: 6, icon: <FiLayers /> },
    { key: "experience", label: "Enterprise Case Studies", count: 5, icon: <FiBriefcase /> },
    { key: "startups", label: "Founder Startups", count: 2, icon: <FaRocket /> },
    { key: "services", label: "Services & Hiring", count: 3, icon: <FiTool /> },
    { key: "location", label: "Location & Nearby Hubs", count: 6, icon: <FiMapPin /> },
    { key: "about", label: "Academics & Journey", count: 1, icon: <FiBookOpen /> },
    { key: "legal", label: "Legal & Policies", count: 4, icon: <FiShield /> },
  ];

  const filteredPages = useMemo(() => {
    return combinedCatalog.filter((page) => {
      const matchesCategory = activeTab === "all" || page.category === activeTab;
      const q = searchTerm.toLowerCase().trim();
      if (!q) return matchesCategory;

      const titleMatch = page.title.toLowerCase().includes(q);
      const subtitleMatch = page.subtitle.toLowerCase().includes(q);
      const tagMatch = page.tags && page.tags.some((t) => t.toLowerCase().includes(q));
      const badgeMatch = page.badge && page.badge.toLowerCase().includes(q);

      return matchesCategory && (titleMatch || subtitleMatch || tagMatch || badgeMatch);
    });
  }, [combinedCatalog, activeTab, searchTerm]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white font-sans relative">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#070b14]/90 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all group"
            >
              <FiArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>

            <span className="text-xs font-mono text-purple-400 hidden sm:inline-block">
              {combinedCatalog.length} Total Dedicated Pages
            </span>
          </div>

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

          <div className="flex items-center gap-2.5">
            <a
              href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 transition-all hover:scale-105"
            >
              <FiCalendar className="text-xs" />
              <span>Book Call</span>
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

      {/* Main Directory Hub */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-semibold font-mono uppercase tracking-wider mb-4">
              <FiCompass className="text-sm" />
              <span>Explore The Engineering Vault</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
              Deep Dives, Case Studies & System Blueprints
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore 25+ dedicated pages covering technical skills, enterprise client case studies, founder startups, regional & nearby tech hubs (Khatima, Dehradun, Haldwani, Delhi NCR, Remote), and hiring parameters.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by tech (React, Node, MySQL, AWS) or topic (Eureka, Uniportal)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 text-xs font-semibold scrollbar-none">
            {categories.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/30 scale-105"
                      : "bg-white/[0.03] text-slate-300 border-white/10 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  <span className="text-sm">{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-md font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Catalog Cards Grid */}
          {filteredPages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPages.map((page) => (
                <Link
                  key={page.id}
                  to={page.path}
                  className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group bg-gradient-to-b from-white/[0.03] to-transparent hover:shadow-xl hover:shadow-purple-600/10"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/15 border border-purple-500/20 text-purple-300 text-[11px] font-mono uppercase tracking-wider font-semibold">
                        {page.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <FiClock className="text-purple-400 text-xs" />
                        {page.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-2.5">
                      {page.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {page.subtitle}
                    </p>

                    {/* Tags */}
                    {page.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {page.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-400 border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                        {page.tags.length > 4 && (
                          <span className="text-[10px] font-mono text-slate-500 self-center">
                            +{page.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Strip */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400 group-hover:text-white transition-colors">
                      Read Blueprint
                    </span>
                    <span className="text-purple-400 group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
                      <span>Explore</span>
                      <FiArrowUpRight className="text-sm" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-card rounded-3xl border border-white/10 max-w-md mx-auto">
              <FiCompass className="text-4xl text-purple-400 mx-auto mb-3 animate-spin" />
              <h3 className="text-lg font-bold text-white mb-1">No pages found matching query</h3>
              <p className="text-xs text-slate-400 mb-4">
                Try searching for "React", "Node", "Eureka", or switch to "All Pages".
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("all");
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Quick Resume & Contact Action Strip */}
          <div className="mt-16 glass-card rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-slate-900/40">
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-1">
                Need Vishal's full technical profile in one document?
              </h3>
              <p className="text-xs text-slate-300">
                Download the official 5+ YOE Senior Full Stack Developer resume or schedule an on-demand technical call.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/Vishal_fullstack_5yr.docx"
                download="Vishal_fullstack_5yr.docx"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
              >
                <FiFileText className="text-sm" />
                <span>Download Resume (.docx)</span>
              </a>

              <a
                href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all"
              >
                <FiCalendar className="text-sm" />
                <span>Book 1:1 Call</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#05080f] py-8 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Vishal Singh.</span>
            <span>Senior Full Stack Developer • KL University MCA</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/" className="hover:text-purple-300 transition-colors">Portfolio Home</Link>
            <Link to="/privacy-policy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-purple-300 transition-colors">Terms & Conditions</Link>
            <Link to="/cookie-policy" className="hover:text-purple-300 transition-colors">Cookie Policy</Link>
            <Link to="/disclaimer" className="hover:text-purple-300 transition-colors">Fair Use</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
