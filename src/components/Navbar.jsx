import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight, FiPhoneCall, FiLinkedin, FiGithub, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home", offset: -100 },
    { name: "About", to: "about", offset: -90 },
    { name: "Experience", to: "experience", offset: -90 },
    { name: "Skills", to: "skills", offset: -90 },
    { name: "Projects", to: "projects", offset: -90 },
    { name: "Education", to: "education", offset: -90 },
    { name: "Resume", to: "resume", offset: -90 },
    { name: "Contact", to: "contact", offset: -90 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-card shadow-2xl shadow-purple-950/20 py-2.5 px-5 border border-white/10"
            : "bg-slate-950/50 backdrop-blur-md py-3 px-6 border border-white/5"
        } flex items-center justify-between`}
      >
        {/* Brand */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center font-bold text-white text-base">
              V
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-wide text-white flex items-center gap-1.5">
              Vishal Singh
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-semibold text-purple-400 -mt-1 tracking-wider uppercase">
              Full Stack Dev • 5+ YOE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={link.offset}
              spy={true}
              activeClass="text-purple-400 bg-purple-500/10 font-semibold"
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://linkedin.com/in/meetwithvishal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500/40 transition-all"
          >
            <FiLinkedin className="text-sm" />
          </a>
          <a
            href="https://github.com/Vishal3474"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500/40 transition-all"
          >
            <FiGithub className="text-sm" />
          </a>

          <a
            href="https://wa.me/919520630066"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-200"
          >
            <FaWhatsapp className="text-sm" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <FiCalendar className="text-sm" />
            <span>Book Developer</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setNav(!nav)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {nav ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {nav && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-card border border-white/10 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
          <nav className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={link.offset}
                onClick={() => setNav(false)}
                className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-xl transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 text-white shadow-md shadow-purple-600/30"
            >
              <FiCalendar className="text-base" />
              <span>Book Developer (1HourDeveloper)</span>
            </a>
            <div className="flex items-center justify-around gap-2 pb-1 pt-1">
              <a
                href="https://linkedin.com/in/meetwithvishal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Vishal3474"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
            </div>
            <a
              href="https://wa.me/919520630066"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp (+91 9520630066)</span>
            </a>
            <a
              href="tel:+919520630066"
              className="flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10"
            >
              <FiPhoneCall className="text-sm" />
              <span>Call: +91 9520630066</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
