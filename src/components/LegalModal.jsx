import React, { useState, useEffect } from "react";
import { FiX, FiShield, FiFileText, FiCheck, FiLock, FiGlobe, FiInfo } from "react-icons/fi";

export default function LegalModal({ isOpen, onClose, initialTab = "privacy" }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101c] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080c14]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400">
              <FiShield className="text-xl" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Legal & Compliance Center</h3>
              <p className="text-xs text-slate-400">Vishal Singh • Software Engineering & Startups</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-white/[0.06] bg-slate-950/60 overflow-x-auto text-xs font-semibold">
          {[
            { id: "privacy", label: "Privacy Policy", icon: <FiLock /> },
            { id: "terms", label: "Terms & Conditions", icon: <FiFileText /> },
            { id: "cookies", label: "Cookie & Consent Policy", icon: <FiGlobe /> },
            { id: "disclaimer", label: "Fair Use & Disclaimers", icon: <FiInfo /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300">
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400">
                  Last Updated: November 2026
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">Privacy Policy</h4>
                <p className="mt-2 text-slate-400">
                  This Privacy Policy outlines how Vishal Singh ("Developer", "I", "me") collects, processes, and safeguards personal information gathered through this portfolio website (including interactions via contact forms, 1HourDeveloper scheduling, and WhatsApp direct links).
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">1. Information We Collect</h5>
                <p>
                  We only collect information that you voluntarily provide or that is strictly necessary for portfolio performance:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li><strong className="text-white">Contact & Inquiry Details:</strong> Name, professional email address, subject matter, and message content submitted through the contact inquiry form.</li>
                  <li><strong className="text-white">Session & Preference Data:</strong> Stored locally in your browser's <code className="text-purple-300 font-mono">localStorage</code> (such as your cookie consent preferences and docx preview active tab).</li>
                  <li><strong className="text-white">Direct Booking Information:</strong> Information submitted when booking a 1:1 consultation via the 1HourDeveloper partner gateway.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">2. How Your Information Is Used</h5>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>To evaluate and respond promptly to software engineering recruitment, full-time employment, and consulting proposals.</li>
                  <li>To schedule and host 1:1 technical mentorship and architecture advisory sessions.</li>
                  <li>To ensure platform security, prevent spam inquiries, and optimize user experience across modern desktop and mobile browsers.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">3. Zero Selling & Third-Party Disclosure</h5>
                <p>
                  <strong className="text-emerald-400">We never sell, rent, or trade your personal data.</strong> Information is only processed through verified enterprise infrastructure providers:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li><strong className="text-white">1HourDeveloper:</strong> For managing secure consultation bookings and payment processing.</li>
                  <li><strong className="text-white">Netlify / Cloudflare / Vercel:</strong> For secure CDN hosting and SSL/TLS encryption.</li>
                  <li><strong className="text-white">WhatsApp / Email Services:</strong> Direct communication channels initiated at your choice.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">4. Your Data Rights & Deletion Requests</h5>
                <p>
                  Under international privacy frameworks (GDPR) and the Indian Information Technology Act (2000), you have the right to inspect, correct, or request total deletion of any message or communication data you have sent. To exercise this right, simply email <a href="mailto:vishalkumar3474@gmail.com" className="text-purple-400 underline">vishalkumar3474@gmail.com</a>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS & CONDITIONS */}
          {activeTab === "terms" && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400">
                  Last Updated: November 2026
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">Terms & Conditions</h4>
                <p className="mt-2 text-slate-400">
                  By accessing and browsing this portfolio website (<code className="text-purple-300 font-mono">portfoliobyvishal.netlify.app</code> or custom domains), you agree to be bound by the following Terms of Service.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">1. Intellectual Property & Code Ownership</h5>
                <p>
                  All custom code architectures, design systems, illustrations, and original source implementations featured on this website are the intellectual property of Vishal Singh unless explicitly attributed to open-source libraries or third-party client agreements.
                </p>
                <p>
                  You may review, inspect, and evaluate this portfolio for recruitment, partnership, or contract consideration. Unlawful scraping, unauthorized mirroring, or passing off this work as another entity's original creation is strictly prohibited.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">2. Professional Engagement & Consultation Terms</h5>
                <p>
                  Consultation bookings made through the 1HourDeveloper link (<code className="text-purple-300 font-mono">https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3</code>) are subject to 1HourDeveloper's platform policies, scheduling SLAs, and payment protection terms.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">3. Proprietary Startups & Ventures</h5>
                <p>
                  Links to independent startups created by Vishal Singh—specifically <a href="https://uniportal.in" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">Uniportal.in</a> and <a href="https://kumaunsoftwaresolutions.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Kumaun Software Solutions</a>—operate under their respective terms and service agreements.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">4. Disclaimer of Warranties & Governing Law</h5>
                <p>
                  This portfolio and all showcased proof-of-concept projects are provided on an "as is" and "as available" basis. While code demonstrations and metrics represent accurate production achievements, no warranty is implied for third-party external service uptime.
                </p>
                <p>
                  Any disputes arising out of the use of this website shall be governed by the laws of India, under the jurisdiction of the courts of Uttarakhand.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: COOKIE & CONSENT POLICY */}
          {activeTab === "cookies" && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400">
                  Cookie & Local Storage Framework
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">Cookie & Consent Policy</h4>
                <p className="mt-2 text-slate-400">
                  We believe in zero invasive tracking. This website does not use intrusive tracking cookies, third-party advertising cookies, or cross-site tracking beacons.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">1. Essential Local Storage Items</h5>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-white/[0.05]">
                    <span className="text-purple-300">vishal_consent</span>
                    <span className="text-slate-400">Stores your consent choice (accepted / declined)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.05]">
                    <span className="text-purple-300">resume_active_tab</span>
                    <span className="text-slate-400">Remembers whether you preferred Executive vs DOCX tab</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-purple-300">activity_widget_last_seen</span>
                    <span className="text-slate-400">Limits floating activity notifications to avoid disturbance</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">2. Managing & Resetting Your Consent</h5>
                <p>
                  You can reset your consent choice at any time. When you click "Reset Consent" below, all local consent keys will be flushed and the banner will re-appear for fresh selection:
                </p>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("vishal_consent");
                    window.location.reload();
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors"
                >
                  Clear Stored Consent & Reload
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: FAIR USE & DISCLAIMER */}
          {activeTab === "disclaimer" && (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400">
                  Portfolio Fair Use Notice
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-1">Fair Use & Client Disclaimers</h4>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-white text-base">Client Trademarks & Past Project References</h5>
                <p>
                  All corporate trademarks, logos, and brand names referenced in this portfolio (including <strong className="text-white">Eureka Forbes</strong>, <strong className="text-white">Techugo</strong>, <strong className="text-white">Space To Tech</strong>, <strong className="text-white">Digital 360 India</strong>, <strong className="text-white">Lygato</strong>, and <strong className="text-white">Eduminatti</strong>) are the property of their respective trademark holders.
                </p>
                <p>
                  References to these entities describe legitimate past employment, professional subcontracting, and engineering contributions rendered by Vishal Singh. Project descriptions exclude confidential proprietary trade secrets and comply with standard non-disclosure agreements (NDAs).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#080c14]/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <FiCheck className="text-emerald-400" />
            <span>Compliant with Indian IT Act 2000 & GDPR Standards</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
}
