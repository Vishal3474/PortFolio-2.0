import React from "react";
import LegalLayout from "./LegalLayout";
import { FiLock, FiCheckCircle, FiShield, FiMail } from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Transparent disclosure on how personal information, contact inquiries, and local preferences are handled with zero data selling and complete compliance."
      badge="Privacy & Data Protection"
      lastUpdated="November 2026"
    >
      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-slate-300">
        
        {/* Intro Alert */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs flex items-start gap-3">
          <FiShield className="text-xl text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1">Commitment to Zero Data Selling</strong>
            <span>
              This portfolio is maintained for professional hiring, technical consultancy, and showcasing software engineering achievements. We do not sell, rent, monetize, or broker your personal information to third parties or marketing brokers.
            </span>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>1. Scope & Ownership</span>
          </h2>
          <p>
            This Privacy Policy governs the collection, use, and storage of information submitted through the personal portfolio website of <strong className="text-white">Vishal Singh</strong> (available via <code className="text-purple-300 font-mono">portfoliobyvishal.netlify.app</code> or custom domains) and related communication channels.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>2. Information We Collect</span>
          </h2>
          <p>We collect only the information strictly necessary to engage in professional discussions:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong className="text-white">Contact & Inquiry Information:</strong> When you submit a message through the contact form, we collect your name, email address, and message content to evaluate and respond to job opportunities, freelance proposals, or mentorship requests.
            </li>
            <li>
              <strong className="text-white">Direct Consultation Bookings:</strong> When you book a 1-on-1 session via our official 1HourDeveloper link (<code className="text-purple-300 font-mono">https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3</code>), scheduling and contact details are handled securely according to 1HourDeveloper's platform protocol.
            </li>
            <li>
              <strong className="text-white">Browser Local Storage Preferences:</strong> We store minimal functional state in your browser's <code className="text-purple-300 font-mono">localStorage</code> (such as your cookie consent preference and whether you prefer the DOCX preview or structured resume view). This data never leaves your device.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>3. How We Use Collected Information</span>
          </h2>
          <p>Your information is used solely for the following legitimate purposes:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Responding to technical inquiries, interview requests, and client proposals.</li>
            <li>Delivering custom full-stack software development services and conducting architectural code reviews.</li>
            <li>Preventing automated spam inquiries, abuse, and verifying platform security.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>4. Third-Party Services & Integrations</span>
          </h2>
          <p>
            To deliver modern hosting, security, and communication, we interact with verified industry providers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="font-bold text-white block">1HourDeveloper</span>
              <span className="text-slate-400 text-xs">For booking verified 1-on-1 consultations and payment escrow.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="font-bold text-white block">Netlify & Cloudflare</span>
              <span className="text-slate-400 text-xs">For secure edge CDN delivery, SSL/TLS encryption, and fast routing.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="font-bold text-white block">WhatsApp & Email</span>
              <span className="text-slate-400 text-xs">For direct, user-initiated communications and inquiries.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="font-bold text-white block">Google Cloud & Unsplash</span>
              <span className="text-slate-400 text-xs">For optimized visual assets and responsive font delivery.</span>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>5. Your Data Rights & Deletion Requests</span>
          </h2>
          <p>
            Under the Indian Information Technology Act (2000), IT Rules 2011, and GDPR guidelines, you possess the right to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Request a copy of any personal communication records held about you.</li>
            <li>Request immediate and permanent erasure of any message or email you sent.</li>
            <li>Withdraw consent to future communications at any time.</li>
          </ul>
          <p className="pt-2">
            To exercise these rights, please reach out to <a href="mailto:vishalkumar3474@gmail.com" className="text-purple-400 underline font-semibold">vishalkumar3474@gmail.com</a> with the subject line <em>"Data Erasure Request"</em>.
          </p>
        </section>

        {/* Section 6 */}
        <section className="p-5 rounded-2xl bg-[#080c14] border border-white/10 space-y-2">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <FiMail className="text-purple-400" />
            <span>Contact & Data Controller</span>
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Vishal Singh • Software Developer & Founder<br />
            Khatima, Udham Singh Nagar, Uttarakhand – 262308, India<br />
            Email: <a href="mailto:vishalkumar3474@gmail.com" className="text-purple-300">vishalkumar3474@gmail.com</a> | Phone: <a href="tel:+919520630066" className="text-purple-300">+91 9520630066</a>
          </p>
        </section>

      </div>
    </LegalLayout>
  );
}
