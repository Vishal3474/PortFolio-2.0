import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone, FiSend, FiArrowUp, FiCheckCircle, FiGlobe, FiMapPin, FiCalendar } from "react-icons/fi";

function Footer({ onOpenLegal }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <footer name="contact" className="relative pt-24 pb-12 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Contact Banner & Form Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                Let's Build Together
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Get in Touch for Opportunities
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to Senior / Full Stack roles, architectural consultations, and high-impact engineering projects. Let's discuss how I can bring value to your team.
              </p>

              <div className="pt-4 space-y-3 text-sm">
                <a
                  href="mailto:vishalkumar3474@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400">
                    <FiMail />
                  </div>
                  <span>vishalkumar3474@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/919520630066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <FaWhatsapp />
                  </div>
                  <span>WhatsApp: +91 9520630066</span>
                </a>

                <a
                  href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <FiCalendar />
                  </div>
                  <span>Book 1:1 Session (1HourDeveloper)</span>
                </a>

                <a
                  href="https://linkedin.com/in/meetwithvishal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FaLinkedin />
                  </div>
                  <span>linkedin.com/in/meetwithvishal</span>
                </a>

                <div className="flex items-center gap-3 text-slate-400 text-xs pt-1">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
                    <FiMapPin />
                  </div>
                  <span>Khatima, Uttarakhand, India • Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager / Tech Lead"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project requirements, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  />
                </div>

                {submitted ? (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium animate-in fade-in duration-200">
                    <FiCheckCircle className="text-lg shrink-0" />
                    <span>Thank you! Your message has been dispatched. I will reply promptly.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={!formState.message.trim()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <span>Send Inquiry</span>
                    <FiSend className="text-sm" />
                  </button>
                )}
              </form>
            </div>

          </div>
        </div>

        {/* Engineering Directory Grid (18+ Dedicated Pages) */}
        <div className="py-12 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                Knowledge Vault & Directory
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Explore 18+ In-Depth Engineering Blueprints & Case Studies
              </h3>
            </div>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-bold transition-all"
            >
              <span>Explore Complete Directory</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            {/* Column 1: Skills & Architecture */}
            <div className="space-y-3">
              <h4 className="font-mono uppercase font-bold text-slate-200 tracking-wider text-[11px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Skills & Architecture
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/skills/react-nextjs" className="hover:text-purple-300 transition-colors block">
                    React & Next.js Architecture
                  </Link>
                </li>
                <li>
                  <Link to="/skills/nodejs-backend" className="hover:text-purple-300 transition-colors block">
                    Node.js & Microservices
                  </Link>
                </li>
                <li>
                  <Link to="/skills/database-engineering" className="hover:text-purple-300 transition-colors block">
                    Database & Redis Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/skills/cloud-devops" className="hover:text-purple-300 transition-colors block">
                    Cloud Infrastructure & Docker
                  </Link>
                </li>
                <li>
                  <Link to="/skills/typescript-system-design" className="hover:text-purple-300 transition-colors block">
                    TypeScript & Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link to="/skills/rest-graphql-apis" className="hover:text-purple-300 transition-colors block">
                    REST APIs & WebSockets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Enterprise Case Studies */}
            <div className="space-y-3">
              <h4 className="font-mono uppercase font-bold text-slate-200 tracking-wider text-[11px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Enterprise Case Studies
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/experience/space-to-tech" className="hover:text-indigo-300 transition-colors block">
                    Space To Tech (Techugo Client)
                  </Link>
                </li>
                <li>
                  <Link to="/experience/eureka-forbes" className="hover:text-indigo-300 transition-colors block">
                    Eureka Forbes Bulk Pricing & QMS
                  </Link>
                </li>
                <li>
                  <Link to="/experience/unigoal" className="hover:text-indigo-300 transition-colors block">
                    Unigoal.com (React, Vite & MySQL)
                  </Link>
                </li>
                <li>
                  <Link to="/experience/lygato" className="hover:text-indigo-300 transition-colors block">
                    Lygato E-Commerce SaaS
                  </Link>
                </li>
                <li>
                  <Link to="/experience/eduminatti" className="hover:text-indigo-300 transition-colors block">
                    Eduminatti High-Scale SEO Directory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Founder Startups */}
            <div className="space-y-3">
              <h4 className="font-mono uppercase font-bold text-slate-200 tracking-wider text-[11px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Founder Startups
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/startups/uniportal" className="hover:text-emerald-300 transition-colors block">
                    Uniportal.in EdTech Platform
                  </Link>
                </li>
                <li>
                  <Link to="/startups/kumaun-software" className="hover:text-emerald-300 transition-colors block">
                    Kumaun Software Solutions Agency
                  </Link>
                </li>
                <li className="pt-2">
                  <a
                    href="https://uniportal.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-400 text-[11px] flex items-center gap-1"
                  >
                    <span>Visit uniportal.in</span>
                    <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://kumaunsoftwaresolutions.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-400 text-[11px] flex items-center gap-1"
                  >
                    <span>Visit kumaunsoftwaresolutions</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Services, Academics & Directory */}
            <div className="space-y-3">
              <h4 className="font-mono uppercase font-bold text-slate-200 tracking-wider text-[11px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Services & Academics
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/services/freelance-consulting" className="hover:text-cyan-300 transition-colors block">
                    1:1 On-Demand Tech Consultation
                  </Link>
                </li>
                <li>
                  <Link to="/services/mvp-development" className="hover:text-cyan-300 transition-colors block">
                    Fast-Track 30-Day MVP
                  </Link>
                </li>
                <li>
                  <Link to="/services/hire-fullstack-developer" className="hover:text-cyan-300 transition-colors block">
                    Hire Senior Full Stack Dev (5+ YOE)
                  </Link>
                </li>
                <li>
                  <Link to="/about/mca-journey" className="hover:text-cyan-300 transition-colors block">
                    KL University MCA (Degree Awaited)
                  </Link>
                </li>
                <li className="pt-2">
                  <Link to="/explore" className="text-purple-400 font-semibold hover:text-purple-300 flex items-center gap-1">
                    <span>View All 18+ Pages Hub</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Location & Nearby Regional Tech Hubs Row */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <FiMapPin className="text-purple-400 text-sm" />
              <span className="font-semibold text-white">Locations & Nearby Hubs:</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 text-xs">
              <Link to="/location/khatima-uttarakhand" className="hover:text-purple-300 transition-colors">
                Khatima, UK (HQ)
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/location/dehradun" className="hover:text-purple-300 transition-colors">
                Dehradun IT Corridors
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/location/haldwani-nainital" className="hover:text-purple-300 transition-colors">
                Haldwani & Nainital
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/location/delhi-ncr" className="hover:text-purple-300 transition-colors">
                Delhi NCR (Noida/Gurgaon)
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/location/noida-tech-hub" className="hover:text-purple-300 transition-colors">
                Noida Tech Hub
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/location/remote-worldwide" className="hover:text-purple-300 transition-colors">
                Remote Worldwide
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Policy Navigation Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-white/[0.08] text-xs">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400">
            <Link
              to="/privacy-policy"
              className="hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-purple-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link
              to="/cookie-policy"
              className="hover:text-purple-300 transition-colors"
            >
              Cookie & Consent Policy
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link
              to="/disclaimer"
              className="hover:text-purple-300 transition-colors"
            >
              Fair Use & Disclaimers
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Link
              to="/cookie-policy"
              className="text-[11px] font-mono text-purple-400 hover:text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-all cursor-pointer"
            >
              Consent Preferences
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.06] text-xs text-slate-400">

          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Vishal Singh. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Full Stack Developer & Founder (MERN • Next.js • TypeScript)</span>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3 text-lg">
            {[
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/meetwithvishal", label: "LinkedIn" },
              { icon: <FaGithub />, href: "https://github.com/Vishal3474", label: "GitHub" },
              { icon: <FaWhatsapp />, href: "https://wa.me/919520630066", label: "WhatsApp" },
              { icon: <FiGlobe />, href: "https://portfoliobyvishal.netlify.app", label: "Netlify Portfolio" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 hover:scale-110 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <FiArrowUp className="text-xs" />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
