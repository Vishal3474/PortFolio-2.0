import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShield, FiCheck, FiX, FiInfo, FiLock } from "react-icons/fi";

export default function ConsentBanner({ onOpenLegal }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const savedConsent = localStorage.getItem("vishal_consent");
    if (!savedConsent) {
      // Graceful delay before showing banner
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("vishal_consent", "accepted");
    localStorage.setItem("vishal_consent_time", new Date().toISOString());
    setVisible(false);
  };

  const handleDeclineOptional = () => {
    localStorage.setItem("vishal_consent", "necessary_only");
    localStorage.setItem("vishal_consent_time", new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-50 animate-slide-bottom-left select-none">
      <div className="relative glass-card bg-[#0b0f19]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-slate-200">
        
        {/* Glow ambient highlight */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/15 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* Header Row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center text-base shrink-0">
              <FiShield />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span>Privacy & Consent Notice</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  GDPR / IT Act
                </span>
              </h4>
            </div>
          </div>

          <button
            onClick={handleDeclineOptional}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            aria-label="Dismiss banner"
          >
            <FiX className="text-base" />
          </button>
        </div>

        {/* Body Text */}
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          We respect your privacy. This portfolio uses local storage and essential cookies to remember your preferences (like resume tabs), optimize browsing speed, and enable direct consultation bookings. We never sell your data.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/[0.08]">
          <button
            onClick={handleAcceptAll}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            <FiCheck className="text-sm" />
            <span>Accept All</span>
          </button>

          <button
            onClick={handleDeclineOptional}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-all"
          >
            <span>Necessary Only</span>
          </button>

          <Link
            to="/privacy-policy"
            className="text-xs text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 ml-auto transition-colors"
          >
            Review Terms & Privacy
          </Link>
        </div>

      </div>
    </div>
  );
}
