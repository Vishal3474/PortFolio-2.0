import React, { useState, useEffect } from "react";
import LegalLayout from "./LegalLayout";
import { FiGlobe, FiCheck, FiRefreshCw, FiShield, FiSliders } from "react-icons/fi";

export default function CookiePolicy() {
  const [consentStatus, setConsentStatus] = useState("checking");

  useEffect(() => {
    const val = localStorage.getItem("vishal_consent");
    setConsentStatus(val || "not_set");
  }, []);

  const handleClearConsent = () => {
    localStorage.removeItem("vishal_consent");
    localStorage.removeItem("vishal_consent_time");
    setConsentStatus("not_set");
    alert("Consent settings reset! The consent banner will now reappear for fresh selection.");
    window.location.reload();
  };

  const handleGrantConsent = (type) => {
    localStorage.setItem("vishal_consent", type);
    localStorage.setItem("vishal_consent_time", new Date().toISOString());
    setConsentStatus(type);
  };

  return (
    <LegalLayout
      title="Cookie & Consent Policy"
      subtitle="Complete breakdown of how cookies and browser localStorage are used exclusively for performance, essential preferences, and zero ad-tracking."
      badge="Cookie & Local Storage Framework"
      lastUpdated="November 2026"
    >
      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-slate-300">
        
        {/* Intro Alert */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-xs flex items-start gap-3">
          <FiShield className="text-xl text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1">No Third-Party Advertising Cookies</strong>
            <span>
              This website operates on a strict zero-ad-tracking philosophy. We do not use marketing trackers, surveillance cookies, or ad-retargeting pixels.
            </span>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            1. What Are Cookies and Local Storage?
          </h2>
          <p>
            Cookies and <code className="text-purple-300 font-mono">localStorage</code> are small text files or key-value entries stored in your web browser. They allow websites to remember your preferences (like your active resume tab view or whether you dismissed a notification) so you don't have to reconfigure them every time you return.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            2. Detailed List of Storage Keys Used
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden text-xs">
              <thead>
                <tr className="bg-slate-900/90 text-purple-300 border-b border-white/10">
                  <th className="p-3 font-mono">Key Name</th>
                  <th className="p-3 font-mono">Type</th>
                  <th className="p-3 font-mono">Duration</th>
                  <th className="p-3">Purpose & Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] bg-white/[0.02]">
                <tr>
                  <td className="p-3 font-mono text-purple-400 font-bold">vishal_consent</td>
                  <td className="p-3 font-mono text-slate-400">localStorage</td>
                  <td className="p-3 font-mono text-slate-400">Persistent</td>
                  <td className="p-3 text-slate-300">Remembers whether you clicked "Accept All" or "Necessary Only" on the consent banner.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-purple-400 font-bold">resume_active_tab</td>
                  <td className="p-3 font-mono text-slate-400">sessionStorage</td>
                  <td className="p-3 font-mono text-slate-400">Session</td>
                  <td className="p-3 text-slate-300">Remembers whether you preferred the Executive Sheet tab or the DOCX preview tab.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-purple-400 font-bold">activity_toast_last_seen</td>
                  <td className="p-3 font-mono text-slate-400">localStorage</td>
                  <td className="p-3 font-mono text-slate-400">24 Hours</td>
                  <td className="p-3 text-slate-300">Throttles floating live activity toasts to prevent repetitive interruptions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Interactive Consent Management Box */}
        <section className="p-6 rounded-2xl bg-[#080c14] border border-purple-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                <FiSliders className="text-purple-400" />
                <span>Your Current Consent Status</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage or revoke your consent preferences at any time.
              </p>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
              consentStatus === "accepted"
                ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                : consentStatus === "necessary_only"
                ? "bg-sky-500/15 border border-sky-500/30 text-sky-400"
                : "bg-amber-500/15 border border-amber-500/30 text-amber-400"
            }`}>
              ● {consentStatus === "accepted" ? "All Cookies Accepted" : consentStatus === "necessary_only" ? "Necessary Only" : "Not Set Yet"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleGrantConsent("accepted")}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors"
            >
              Set to Accept All
            </button>

            <button
              type="button"
              onClick={() => handleGrantConsent("necessary_only")}
              className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 font-semibold text-xs border border-white/10 transition-colors"
            >
              Set to Necessary Only
            </button>

            <button
              type="button"
              onClick={handleClearConsent}
              className="px-4 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-semibold text-xs transition-colors ml-auto flex items-center gap-1.5"
            >
              <FiRefreshCw className="text-xs" />
              <span>Reset & Clear Consent</span>
            </button>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
