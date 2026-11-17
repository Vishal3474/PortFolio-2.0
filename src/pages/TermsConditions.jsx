import React from "react";
import LegalLayout from "./LegalLayout";
import { FiFileText, FiCheck, FiShield, FiAlertTriangle } from "react-icons/fi";

export default function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Standard terms of service, intellectual property guidelines, professional consulting scope, and legal jurisdiction."
      badge="Terms of Service"
      lastUpdated="November 2026"
    >
      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-slate-300">
        
        {/* Intro Alert */}
        <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-xs flex items-start gap-3">
          <FiFileText className="text-xl text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1">Agreement to Terms</strong>
            <span>
              By accessing, browsing, downloading resumes, or engaging with this portfolio (<code className="text-purple-300 font-mono">portfoliobyvishal.netlify.app</code> or related custom domains), you agree to comply with and be bound by these Terms and Conditions.
            </span>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            1. Intellectual Property & Code Ownership
          </h2>
          <p>
            All custom components, proprietary layout architectures, UI designs, graphics, and written content on this website are the intellectual property of <strong className="text-white">Vishal Singh</strong>, protected under Indian and international copyright laws.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>You may view, inspect, and evaluate this portfolio for hiring, recruitment, contracting, or educational purposes.</li>
            <li>You may not reproduce, duplicate, copy, mirror, sell, or exploit any portion of this website or pass off this work as your own creation without express prior written consent.</li>
            <li>Open-source software dependencies used in this project (React, Next.js, Tailwind CSS, Lucide, React Icons, etc.) remain subject to their respective MIT/Apache licenses.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            2. Professional Consultation & 1HourDeveloper Terms
          </h2>
          <p>
            Direct 1-on-1 technical advisory sessions, project architecture reviews, and mentorship consultations are scheduled and hosted through our official partner link:
          </p>
          <p className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-purple-300 break-all">
            https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3
          </p>
          <p>
            All consultations booked through 1HourDeveloper are governed by 1HourDeveloper's platform terms of service, payment escrow safeguards, and rescheduling/cancellation policies.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            3. Independent Startups & External Links
          </h2>
          <p>
            This portfolio showcases independent ventures founded and architected by Vishal Singh:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <a href="https://uniportal.in" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-bold underline">
                Uniportal.in
              </a>: Higher education admission and university discovery portal. Operating policies and student agreements are governed by Uniportal's independent platform terms.
            </li>
            <li>
              <a href="https://kumaunsoftwaresolutions.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold underline">
                Kumaun Software Solutions
              </a>: Full-service software engineering agency. Client statements of work (SOW) and service contracts are governed by specific bilateral agreements.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            4. Disclaimer of Warranties
          </h2>
          <p>
            This website and its associated code samples, proof-of-concept demos, and downloadable materials (including <code className="text-purple-300 font-mono">Vishal_fullstack_5yr.docx</code>) are provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis without warranties of any kind, either express or implied.
          </p>
          <p>
            While every effort is made to maintain 100% uptime and accuracy, Vishal Singh does not warrant that third-party external services or hosting will be uninterrupted or error-free.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            5. Limitation of Liability & Governing Law
          </h2>
          <p>
            In no event shall Vishal Singh be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of this portfolio or reliance on showcased materials.
          </p>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the competent courts of <strong>Uttarakhand, India</strong>.
          </p>
        </section>

      </div>
    </LegalLayout>
  );
}
