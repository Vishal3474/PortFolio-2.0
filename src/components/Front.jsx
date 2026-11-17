import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCalendar,
  FiCheck,
  FiCopy,
  FiTerminal,
  FiLayers,
  FiCpu,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiAmazonaws,
} from "react-icons/si";

const Front = () => {
  const [activeTab, setActiveTab] = useState("typescript");
  const [copiedCode, setCopiedCode] = useState(false);

  const copySnippet = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const tsCode = `// vishalSingh.config.ts
export const engineer = {
  name: "Vishal Singh",
  experience: "5+ Years Professional",
  currentRole: "Software Developer @ Space To Tech (Techugo Client)",
  education: "MCA in Data Science (KL University)",
  coreStack: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "NestJS", "REST & GraphQL"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    cloudDevOps: ["AWS", "Docker", "CI/CD Pipelines"]
  },
  specialization: [
    "Enterprise B2B Workflows (Eureka Forbes)",
    "RBAC & Role-Aware Portals (QMS)",
    "High-Performance SSR Architecture (Eduminatti)",
    "Relational Data Engines (Unigoal.com)"
  ],
  status: "Available for Senior / Full Stack Opportunities"
};`;

  const bashCode = `$ pnpm test:architecture
✔ [PASS] Authentication (JWT / OAuth 2.0 / RBAC)
✔ [PASS] Eureka Forbes B2B Bulk Pricing Algorithm
✔ [PASS] PostgreSQL & MySQL Connection Poolers
✔ [PASS] Redis Cache Layer (sub-millisecond latency)
✔ [PASS] Docker Container Health Checks (Healthy)
--------------------------------------------------
All 48 Enterprise Integration Tests PASSED (0.42s)
$ deploy --target production --now
🚀 Live at production scale with 99.9% uptime`;

  return (
    <section
      name="home"
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#07090f] bg-grid-pattern"
    >
      {/* ========================================================================= */}
      {/* ADVANCED AMBIENT SPOTLIGHTS & AURORA BEAMS                                */}
      {/* ========================================================================= */}
      {/* Top Center Radiant Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-purple-600/25 via-indigo-600/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      {/* Cyber Cyan Flare on Right */}
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      {/* Deep Violet Flare on Left */}
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Decorative Grid Accent Crosses */}
      <div className="absolute top-24 left-10 text-white/[0.08] font-mono text-sm pointer-events-none select-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-white/[0.08] font-mono text-sm pointer-events-none select-none hidden lg:block">+</div>
      <div className="absolute bottom-16 left-1/4 text-white/[0.06] font-mono text-sm pointer-events-none select-none hidden lg:block">+</div>
      <div className="absolute bottom-16 right-1/4 text-white/[0.06] font-mono text-sm pointer-events-none select-none hidden lg:block">+</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: HERO HEADLINE, BIO, STACK BADGES & DYNAMIC CTAS              */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Live Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-emerald-500/10 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Available for Senior / Full Stack Roles</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-purple-300 hidden sm:inline">Space To Tech (Techugo)</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Engineering{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]">
                  Scalable Web
                </span>
              </span>
              <br />
              <span className="text-slate-200">Architectures with</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Precision.
              </span>
            </h1>

            {/* Sub-headline identifying Vishal Singh */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal max-w-xl mb-4 leading-relaxed">
              Hi, I'm <strong className="text-white font-bold underline decoration-purple-500/80 decoration-2 underline-offset-4">Vishal Singh</strong> — Senior Full Stack Developer with <strong className="text-purple-300 font-semibold">5+ years</strong> of production experience building high-traffic web applications, enterprise workflows, and robust cloud systems.
            </p>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 text-purple-300 shadow-sm">
                MERN & Next.js
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-300 shadow-sm">
                TypeScript
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 shadow-sm">
                MySQL & PostgreSQL
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 shadow-sm">
                5+ YOE Enterprise
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300 shadow-sm">
                Eureka Forbes B2B
              </span>
            </div>

            {/* Action Buttons with High-Conversion Styling */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10 w-full sm:w-auto">
              
              {/* Primary CTA: Book 1:1 Call */}
              <a
                href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 shadow-xl shadow-purple-600/35 hover:shadow-purple-600/55 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-purple-400/30 group"
              >
                <FiCalendar className="text-base text-purple-200 transition-transform group-hover:rotate-12" />
                <span>Book 1:1 Call</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white uppercase ml-0.5">
                  1HourDev
                </span>
              </a>

              {/* Secondary CTA: Download CV (.docx) */}
              <a
                href="/Vishal_fullstack_5yr.docx"
                download="Vishal_fullstack_5yr.docx"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-white/[0.08] hover:text-white border border-white/10 hover:border-purple-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
              >
                <FiDownload className="text-base text-purple-400" />
                <span>Download CV</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/25 text-purple-300">
                  .DOCX
                </span>
              </a>

              {/* Tertiary CTA: Featured Projects */}
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-90}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <span>View Projects</span>
                <FiArrowDown className="text-sm animate-bounce text-purple-400" />
              </Link>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/919520630066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:scale-[1.02] transition-all duration-200"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1 font-mono">
                Connect:
              </span>
              {[
                { icon: <FiLinkedin />, href: "https://linkedin.com/in/meetwithvishal", label: "LinkedIn" },
                { icon: <FiGithub />, href: "https://github.com/Vishal3474", label: "GitHub" },
                { icon: <FaWhatsapp />, href: "https://wa.me/919520630066", label: "WhatsApp" },
                { icon: <FiMail />, href: "mailto:vishalkumar3474@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE CYBER TERMINAL & SHOPMOBI LEVITATING BADGES     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-25 blur-2xl"></div>

              {/* Shopmobi Levitating Card #1: Top-Right (Total Experience & Chart) */}
              <div className="absolute -top-7 -right-3 sm:-right-8 w-52 sm:w-60 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl p-3.5 text-white shadow-2xl border border-purple-500/35 animate-float-card-up transition-transform duration-300 hover:scale-105 hover:[animation-play-state:paused] z-30 cursor-pointer hidden sm:block">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">Total Dev Experience</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    5+ YOE
                  </span>
                </div>
                <p className="mt-1 text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                  Full Stack MERN
                </p>

                {/* Mini SVG Smooth Area Chart with Live Pulse */}
                <div className="mt-2 h-9 w-full overflow-hidden">
                  <svg viewBox="0 0 100 30" className="h-full w-full overflow-visible">
                    <defs>
                      <linearGradient id="hero-exp-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#c084fc" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,22 Q20,18 40,12 T75,6 L100,2 L100,30 L0,30 Z"
                      fill="url(#hero-exp-gradient)"
                    />
                    <path
                      d="M0,22 Q20,18 40,12 T75,6 L100,2"
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="2" r="3.5" fill="#c084fc" className="animate-pulse" />
                    <circle cx="100" cy="2" r="1.5" fill="#ffffff" />
                  </svg>
                </div>
              </div>

              {/* Shopmobi Levitating Card #2: Bottom-Left (Live Enterprise Clients) */}
              <div className="absolute -bottom-7 -left-3 sm:-left-8 w-56 sm:w-64 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl p-3.5 text-white shadow-2xl border border-cyan-500/35 space-y-2 animate-float-card-down transition-transform duration-300 hover:scale-105 hover:[animation-play-state:paused] z-30 cursor-pointer hidden sm:block">
                <div className="flex items-center gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-white/[0.04]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 font-bold">
                    ⚡
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-100 whitespace-nowrap">Space To Tech (Techugo)</span>
                    <span className="text-[9px] text-slate-400">Software Developer Client Eng</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-white/[0.04]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 font-bold">
                    🏢
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-100 whitespace-nowrap">Eureka Forbes Enterprise</span>
                    <span className="text-[9px] text-slate-400">B2B Bulk Pricing & Plant QMS</span>
                  </div>
                </div>
              </div>
              
              {/* Main Interactive Terminal Window Card */}
              <div className="relative glass-card rounded-3xl border border-white/10 p-5 sm:p-6 overflow-hidden shadow-2xl bg-[#090d16]/90 backdrop-blur-2xl">
                
                {/* Header Window Bar with Tabs */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>

                  {/* Interactive Code Tabs */}
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setActiveTab("typescript")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        activeTab === "typescript"
                          ? "bg-purple-600 text-white shadow"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      vishal.ts
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("bash")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        activeTab === "bash"
                          ? "bg-purple-600 text-white shadow"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      deploy.sh
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("matrix")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                        activeTab === "matrix"
                          ? "bg-purple-600 text-white shadow"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      stack.json
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => copySnippet(activeTab === "bash" ? bashCode : tsCode)}
                    title="Copy code"
                    className="text-xs text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
                  >
                    {copiedCode ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="pt-4">
                  {/* TAB 1: TypeScript Config */}
                  {activeTab === "typescript" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-cyan-400 p-[2px] shrink-0">
                          <div className="w-full h-full bg-[#080c14] rounded-2xl flex items-center justify-center text-xl font-bold text-white">
                            ⚡
                          </div>
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white">Vishal Singh</h3>
                          <p className="text-xs text-purple-400 font-medium">Software Developer @ Space To Tech (Techugo)</p>
                          <p className="text-[11px] text-slate-400">MCA Data Science @ KL University</p>
                        </div>
                      </div>

                      {/* Code Area */}
                      <pre className="p-3.5 rounded-xl bg-slate-950/90 border border-white/[0.06] font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto max-h-[220px] select-text">
                        <code>
                          <span className="text-purple-400">const</span> <span className="text-cyan-300">engineer</span> = &#123;{"\n"}
                          {"  "}<span className="text-slate-400">experience:</span> <span className="text-emerald-300">'5+ Years Professional'</span>,{"\n"}
                          {"  "}<span className="text-slate-400">frontend:</span> [<span className="text-amber-300">'React.js'</span>, <span className="text-amber-300">'Next.js'</span>, <span className="text-amber-300">'TypeScript'</span>],{"\n"}
                          {"  "}<span className="text-slate-400">backend:</span> [<span className="text-blue-300">'Node.js'</span>, <span className="text-blue-300">'Express'</span>, <span className="text-blue-300">'NestJS'</span>],{"\n"}
                          {"  "}<span className="text-slate-400">databases:</span> [<span className="text-pink-300">'MySQL'</span>, <span className="text-pink-300">'PostgreSQL'</span>, <span className="text-pink-300">'MongoDB'</span>],{"\n"}
                          {"  "}<span className="text-slate-400">cloudDevOps:</span> [<span className="text-cyan-300">'Docker'</span>, <span className="text-cyan-300">'AWS'</span>, <span className="text-cyan-300">'CI/CD'</span>]{"\n"}
                          &#125;;
                        </code>
                      </pre>
                    </div>
                  )}

                  {/* TAB 2: Bash Deployment Pipeline */}
                  {activeTab === "bash" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Production Pipeline Status: All Checks Healthy</span>
                      </div>
                      <pre className="p-3.5 rounded-xl bg-slate-950/90 border border-white/[0.06] font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto max-h-[260px] select-text">
                        <code>{bashCode}</code>
                      </pre>
                    </div>
                  )}

                  {/* TAB 3: Tech Stack Matrix */}
                  {activeTab === "matrix" && (
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                        <span>Core Production Arsenal</span>
                        <span className="text-purple-400">100% Scalable</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                        {[
                          { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
                          { icon: <SiReact />, name: "React", color: "text-cyan-400" },
                          { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
                          { icon: <SiNodedotjs />, name: "Node.js", color: "text-emerald-400" },
                          { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
                          { icon: <SiPostgresql />, name: "Postgres", color: "text-sky-400" },
                          { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
                          { icon: <SiRedis />, name: "Redis", color: "text-rose-500" },
                        ].map((tech, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/50 hover:bg-white/[0.07] hover:scale-105 transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
                          >
                            <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
                            <span className="text-[10px] font-medium text-slate-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Terminal Footnote */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      vishal@fullstack-v2:~$ ready
                    </span>
                    <span className="text-purple-400">5+ YOE Full Stack</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* QUICK METRICS BAR (MICRO-BENTO CARDS WITH GLOW)                           */}
        {/* ========================================================================= */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              num: "5+ Years",
              label: "Dev Experience",
              desc: "Full Stack & Web Architecture",
              tag: "Space To Tech / Techugo",
              color: "from-purple-400 to-indigo-400",
            },
            {
              num: "Enterprise",
              label: "Production Scale",
              desc: "Eureka Forbes, Lygato, Eduminatti",
              tag: "B2B & Plant QMS",
              color: "from-indigo-400 to-cyan-400",
            },
            {
              num: "MERN & Next",
              label: "Full Stack Mastery",
              desc: "TypeScript, REST, GraphQL, MySQL",
              tag: "React 18 & Next 14",
              color: "from-cyan-400 to-emerald-400",
            },
            {
              num: "MCA Degree",
              label: "Data Science Major",
              desc: "KL University • Algorithms & ML",
              tag: "Advanced Computing",
              color: "from-pink-400 to-purple-400",
            },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 text-center relative overflow-hidden group hover:border-purple-500/40"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />
              
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block mb-2">
                {metric.tag}
              </span>
              
              <div className={`font-heading font-extrabold text-2xl sm:text-3xl bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.num}
              </div>
              <div className="font-semibold text-white text-sm mt-1">{metric.label}</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">{metric.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Front;
