import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCheck, FiCopy, FiArrowUpRight, FiLayers, FiCode, FiLinkedin, FiCalendar, FiGlobe, FiZap } from "react-icons/fi";
import { FaWhatsapp, FaRocket } from "react-icons/fa";
import MagicBentoCard from "./MagicBentoCard";

const About = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2500);
  };

  return (
    <section name="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Professional Profile & Ventures
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            About Vishal Singh
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Senior Full Stack Developer & Founder specializing in the MERN stack, Next.js, TypeScript, cloud architectures, and scalable digital ventures.
          </p>
        </div>

        {/* Bento Grid with Magic Spotlight Border Glow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Main Biography Card (8 Cols) */}
          <MagicBentoCard className="md:col-span-8 glass-card p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-purple-600/20 transition-all duration-500" />
            
            <div>
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs tracking-wider uppercase mb-3">
                <FiCode className="text-base" />
                <span>Executive Summary & Founder Profile</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                5+ years engineering scalable web applications, enterprise workflows, and founder startups.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Hi, I'm <strong className="text-white">Vishal Singh</strong> from <strong className="text-purple-300">Khatima, Uttarakhand, India</strong> with extensive hands-on expertise across <strong className="text-purple-300">React.js, Next.js, Node.js, Express.js, TypeScript, and MongoDB/PostgreSQL/MySQL</strong>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Over the course of my career—including roles at <strong>Space To Tech (Techugo Client)</strong>, <strong>Digital 360 India</strong>, and founding my own startups <strong>Kumaun Software Solutions</strong> and <strong>Uniportal.in</strong>—I have architected mission-critical systems for companies like <em>Eureka Forbes</em> (Bulk Pricing & QMS), entertainment platforms like <em>Lygato</em>, and high-traffic portals like <em>Eduminatti</em>.
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FiLayers className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Engineering Philosophy</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Solid foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, and System Design. Committed to clean component architecture, strict type safety with TypeScript, microservices, robust CI/CD, and zero-downtime cloud deployments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-slate-500 block">Total Experience</span>
                <span className="text-white font-semibold text-sm">5+ Years Dev</span>
              </div>
              <div>
                <span className="text-slate-500 block">Core Stack</span>
                <span className="text-white font-semibold text-sm">MERN & Next.js</span>
              </div>
              <div>
                <span className="text-slate-500 block">Ventures</span>
                <span className="text-purple-300 font-semibold text-sm">2 Startups Built</span>
              </div>
              <div>
                <span className="text-slate-500 block">Status</span>
                <span className="text-emerald-400 font-semibold text-sm">Available</span>
              </div>
            </div>
          </MagicBentoCard>

          {/* Profile Photo & Founder Card (4 Cols) */}
          <MagicBentoCard className="md:col-span-4 glass-card p-5 sm:p-6 border border-purple-500/30 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-purple-600/25 transition-all duration-500" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs tracking-wider uppercase font-mono">
                  <FiCode className="text-sm" />
                  <span>Founder & Lead Architect</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Hire" />
              </div>

              {/* Photo Frame Container with Glow and Rounded Corners */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group/photo mb-4">
                <img
                  src="/assets/vishal-about.jpeg"
                  alt="Vishal Singh - Senior Full Stack Developer & Founder"
                  className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-700 ease-out group-hover/photo:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                {/* Subtle Gradient Overlay on Photo Bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06080e]/95 via-[#06080e]/50 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-extrabold text-lg text-white tracking-tight">
                      Vishal Singh
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold font-mono">
                      5+ YOE
                    </span>
                  </div>
                  <p className="text-[11px] text-purple-300 font-medium">
                    Founder: Uniportal.in • Kumaun Software
                  </p>
                </div>

                {/* Top Floating Status Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#080c14]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available Worldwide</span>
                </div>
              </div>

              {/* Location & Timezone Details */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs mb-3">
                <div className="flex items-center gap-2 text-slate-300">
                  <FiMapPin className="text-purple-400 shrink-0" />
                  <span className="font-medium truncate">Khatima, Uttarakhand</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                  IST (UTC+5:30)
                </span>
              </div>
            </div>

            {/* Quick Action Footer in Profile Card */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2 text-xs">
              <a
                href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-[11px] transition-all shadow-md hover:scale-[1.02]"
              >
                <FiCalendar className="text-xs" />
                <span>Book 1:1 Call</span>
              </a>

              <a
                href="https://wa.me/919520630066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-400 text-sm transition-all"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://linkedin.com/in/meetwithvishal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 text-blue-400 text-sm transition-all"
                title="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>
            </div>
          </MagicBentoCard>

          {/* Startups & Ventures Founded (12 Cols) */}
          <MagicBentoCard className="md:col-span-12 glass-card p-6 sm:p-7 border border-purple-500/25 bg-gradient-to-r from-[#0d1020] via-[#130f28] to-[#0d1020] relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-xl">
                  <FaRocket />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    Startups Built & Founded by Vishal Singh
                  </h4>
                  <p className="text-xs text-slate-400">
                    Proprietary ventures and software platforms engineered from ground up
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400">
                ● Live Production Ventures
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Startup 1: Uniportal.in */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/50 hover:bg-white/[0.06] transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                      Higher EdTech Admission Portal
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400">Live Platform</span>
                  </div>
                  <h5 className="font-heading font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                    Uniportal.in
                  </h5>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    End-to-end university discovery and admissions portal connecting students with higher-education courses, admission funnels, automated lead management CRM, and verification pipelines.
                  </p>
                </div>
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">React • Next.js • REST APIs</span>
                  <a
                    href="https://uniportal.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>uniportal.in</span>
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Startup 2: Kumaun Software Solutions */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-white/[0.06] transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
                      Digital Engineering Agency
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400">Live Agency</span>
                  </div>
                  <h5 className="font-heading font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                    Kumaun Software Solutions
                  </h5>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Digital engineering agency delivering bespoke full-stack enterprise web and mobile applications, cloud infrastructure, and technical consulting for regional and global businesses.
                  </p>
                </div>
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">React • Firebase • Cloud Infra</span>
                  <a
                    href="https://kumaunsoftwaresolutions.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>kumaunsoftwaresolutions.web.app</span>
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </MagicBentoCard>

          {/* Contact & Social Cards */}
          <MagicBentoCard className="md:col-span-3 glass-card p-5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg">
                <FiMail />
              </div>
              <button
                onClick={() => copyToClipboard("vishalkumar3474@gmail.com", "email")}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {copied === "email" ? (
                  <>
                    <FiCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">Email Address</div>
              <a
                href="mailto:vishalkumar3474@gmail.com"
                className="text-xs font-semibold text-white hover:text-purple-300 transition-colors break-all mt-0.5 inline-flex items-center gap-1"
              >
                vishalkumar3474@gmail.com
                <FiArrowUpRight className="shrink-0" />
              </a>
            </div>
          </MagicBentoCard>

          <MagicBentoCard className="md:col-span-3 glass-card p-5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                <FiLinkedin />
              </div>
              <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                Network
              </span>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">LinkedIn Profile</div>
              <a
                href="https://linkedin.com/in/meetwithvishal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white hover:text-blue-300 transition-colors mt-0.5 inline-flex items-center gap-1"
              >
                meetwithvishal
                <FiArrowUpRight className="shrink-0" />
              </a>
            </div>
          </MagicBentoCard>

          <MagicBentoCard className="md:col-span-3 glass-card p-5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                <FaWhatsapp />
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Instant Chat
              </span>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">WhatsApp Direct</div>
              <a
                href="https://wa.me/919520630066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors mt-0.5 inline-flex items-center gap-1"
              >
                +91 9520630066
                <FiArrowUpRight className="shrink-0" />
              </a>
            </div>
          </MagicBentoCard>

          <MagicBentoCard className="md:col-span-3 glass-card p-5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-lg">
                <FiPhone />
              </div>
              <button
                onClick={() => copyToClipboard("+919520630066", "phone")}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {copied === "phone" ? (
                  <>
                    <FiCheck className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">Direct Telephone</div>
              <a
                href="tel:+919520630066"
                className="text-xs font-semibold text-white hover:text-indigo-300 transition-colors mt-0.5 inline-flex items-center gap-1"
              >
                +91 9520630066
                <FiArrowUpRight className="shrink-0" />
              </a>
            </div>
          </MagicBentoCard>

          {/* 1HourDeveloper Booking Banner Card */}
          <MagicBentoCard className="md:col-span-12 glass-card p-6 border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                <FiCalendar />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    Book a 1-on-1 Consultation Session
                  </h4>
                  <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    1HourDeveloper
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Schedule direct technical mentoring, project architecture advice, or freelance discussion instantly.
                </p>
              </div>
            </div>

            <a
              href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <span>Book Developer Now</span>
              <FiArrowUpRight className="text-sm" />
            </a>
          </MagicBentoCard>

        </div>

      </div>
    </section>
  );
};

export default About;
