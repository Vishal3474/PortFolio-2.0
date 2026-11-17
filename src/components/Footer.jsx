import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone, FiSend, FiArrowUp, FiCheckCircle, FiGlobe, FiMapPin, FiCalendar } from "react-icons/fi";

function Footer() {
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

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.08] text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Vishal Singh. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Full Stack Developer (MERN • Next.js • TypeScript)</span>
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
