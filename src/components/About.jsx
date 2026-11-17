import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCheck, FiCopy, FiArrowUpRight, FiLayers, FiCode, FiLinkedin, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
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
            Professional Profile
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            About Vishal Singh
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Full Stack Developer specializing in the MERN stack, Next.js, TypeScript, and modern cloud architectures.
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
                <span>Executive Summary</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                5+ years engineering scalable web applications and enterprise workflows.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Hi, I'm <strong className="text-white">Vishal Singh</strong> from <strong className="text-purple-300">Khatima, Uttarakhand, India</strong> with extensive hands-on expertise across <strong className="text-purple-300">React.js, Next.js, Node.js, Express.js, TypeScript, and MongoDB/PostgreSQL</strong>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Over the course of my career—including roles at <strong>Space To Tech (Techugo Client)</strong> and <strong>Digital 360 India</strong>—I have contributed to mission-critical systems for companies like <em>Eureka Forbes</em>, entertainment platforms like <em>Lygato</em>, and high-traffic portals like <em>Eduminatti</em>.
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
                <span className="text-slate-500 block">Education</span>
                <span className="text-white font-semibold text-sm">MCA Data Science</span>
              </div>
              <div>
                <span className="text-slate-500 block">Status</span>
                <span className="text-emerald-400 font-semibold text-sm">Available</span>
              </div>
            </div>
          </MagicBentoCard>

          {/* Location & Timezone Card (4 Cols) */}
          <MagicBentoCard className="md:col-span-4 glass-card p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-3">
                <FiMapPin className="text-base" />
                <span>Base Location</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Khatima, Uttarakhand
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                India (IST / UTC+5:30) • Open to remote roles globally, hybrid, and relocation.
              </p>

              {/* Pin Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-white/10 text-center">
                <span className="text-3xl block mb-2">🏔️ 🇮🇳</span>
                <div className="text-sm font-bold text-white">Northern India Hub</div>
                <div className="text-xs text-slate-400 mt-1">High-bandwidth dedicated dual-line setup</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Timezone</span>
              <span className="text-white font-mono font-semibold">IST (UTC+5:30)</span>
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
