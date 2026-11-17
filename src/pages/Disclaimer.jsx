import React from "react";
import LegalLayout from "./LegalLayout";
import { FiInfo, FiCheck, FiShield, FiBriefcase } from "react-icons/fi";

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Fair Use & Disclaimers"
      subtitle="Clarification on past enterprise client representations, trademark fair use, code demonstration scope, and external service links."
      badge="Portfolio Disclaimers"
      lastUpdated="November 2026"
    >
      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-slate-300">
        
        {/* Intro Alert */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-start gap-3">
          <FiInfo className="text-xl text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-1">Non-Affiliation Notice</strong>
            <span>
              This portfolio represents the independent engineering achievements and software contracting career of Vishal Singh. Client names, logos, and project references are cited strictly under fair use to demonstrate professional qualifications.
            </span>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            1. Client Trademarks & Non-Disclosure Compliance
          </h2>
          <p>
            All enterprise trademarks, corporate brand names, and logos referenced across this portfolio—including but not limited to <strong className="text-white">Eureka Forbes</strong>, <strong className="text-white">Techugo</strong>, <strong className="text-white">Space To Tech</strong>, <strong className="text-white">Digital 360 India</strong>, <strong className="text-white">Lygato</strong>, and <strong className="text-white">Eduminatti</strong>—are the exclusive intellectual property of their respective corporate owners.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>Mentions of these organizations reflect past or ongoing legitimate engineering assignments, subcontracted developer deployments, or project delivery by Vishal Singh.</li>
            <li>No confidential trade secrets, internal credentials, proprietary algorithms, or non-public client databases are shared on this website.</li>
            <li>All architectural descriptions are framed at a high architectural level in strict compliance with standard Non-Disclosure Agreements (NDAs).</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            2. Proprietary Startups & Independent Platforms
          </h2>
          <p>
            The startups <a href="https://uniportal.in" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-bold underline">Uniportal.in</a> and <a href="https://kumaunsoftwaresolutions.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold underline">Kumaun Software Solutions</a> were independently conceived, founded, and architected by Vishal Singh. They are featured here to showcase full product-lifecycle ownership, entrepreneurial capability, and scalable full-stack execution.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
            3. External Links & Third-Party Platforms
          </h2>
          <p>
            This website provides links to external third-party sites including GitHub, LinkedIn, Netlify, 1HourDeveloper, and WhatsApp. Vishal Singh does not control or endorse the content, uptime, privacy practices, or data handling of these external destinations. Users accessing third-party links do so at their own discretion.
          </p>
        </section>

      </div>
    </LegalLayout>
  );
}
