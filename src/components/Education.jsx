import React from "react";
import { FiBookOpen, FiAward, FiCheckCircle, FiCalendar } from "react-icons/fi";
import { SiGooglecloud, SiMysql } from "react-icons/si";

const educationData = [
  {
    degree: "Master of Computer Applications – Data Science",
    institution: "KL University (Koneru Lakshmaiah Education Foundation)",
    period: "2024 – 2026",
    status: "Exams Completed • Degree Awaited",
    description:
      "Completed comprehensive graduate curriculum and all final examinations covering Data Science, Statistical Modeling, Machine Learning Algorithms, Database Systems, and Distributed Computing. Final degree conferral awaited.",
    badge: "Master's Degree (Exams Done)",
  },
  {
    degree: "Certification – Frontend Development & React",
    institution: "CodeYogi (Mentored by IIT Delhi Alumni)",
    period: "Dec 2021 – June 2022",
    status: "Completed",
    description:
      "Intensive software engineering curriculum covering HTML5, CSS3, JavaScript ES6+, Tailwind CSS, and React.js under the direct mentorship of IIT Delhi alumni.",
    badge: "Software Engineering",
  },
  {
    degree: "Industrial Training Institute (ITI) – Welder Trade",
    institution: "Government ITI (Vocational Technical Education)",
    period: "1 Year Course",
    status: "Completed • 1 Year Technical Trade",
    description:
      "1-year intensive technical vocational trade course (completed after graduation). Gained hands-on mechanical fabrication skills, metal arc welding, workshop safety standards, and practical engineering discipline.",
    badge: "1-Year Vocational Trade",
  },
  {
    degree: "Bachelor's Degree (Graduation)",
    institution: "Kumaun University, Nainital",
    period: "July 2017 – Dec 2020",
    status: "Completed",
    description:
      "Undergraduate education developing structured problem-solving, analytical deduction, research rigor, and interdisciplinary communication skills.",
    badge: "Undergraduate Degree",
  },
  {
    degree: "Intermediate (12th Standard)",
    institution: "GIC Jhankat • Uttarakhand Board (UBSE, Ramnagar)",
    period: "Completed",
    status: "Completed • Uttarakhand Board",
    description:
      "Senior secondary school education completed at Government Inter College (GIC) Jhankat, Khatima under the Uttarakhand Board of School Education (UBSE), Ramnagar.",
    badge: "Senior Secondary (12th)",
  },
  {
    degree: "High School (10th Standard)",
    institution: "GIC Jhankat • Uttarakhand Board (UBSE, Ramnagar)",
    period: "Completed",
    status: "Completed • Uttarakhand Board",
    description:
      "Secondary high school foundations completed at Government Inter College (GIC) Jhankat, Khatima under the Uttarakhand Board of School Education (UBSE), Ramnagar.",
    badge: "High School (10th)",
  },
];

const certifications = [
  {
    title: "Generative AI Studio",
    issuer: "Google Cloud Security",
    date: "Aug 2026",
    icon: <SiGooglecloud className="text-blue-400" />,
  },
  {
    title: "Ethical Hacking",
    issuer: "Simplilearn",
    date: "Aug 2026",
    icon: <FiAward className="text-purple-400" />,
  },
  {
    title: "MySQL RDBMS Specialist",
    issuer: "Relational Database Certification",
    date: "Aug 2022",
    icon: <SiMysql className="text-sky-400" />,
  },
];

const Education = () => {
  return (
    <section name="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Academic Foundations & Credentials
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Education & Academic Roadmap
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Complete academic journey from school foundations in Uttarakhand to master's studies in computer applications, hands-on vocational discipline, and future executive MBA vision.
          </p>
        </div>

        {/* Future MBA Roadmap Hero Banner Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-7 border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-purple-950/20 to-slate-900/40 mb-8 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/25 text-amber-300 flex items-center justify-center text-2xl shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <FiAward />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Future Academic Vision • MBA Aspirant
                  </span>
                  <span className="text-xs font-mono text-slate-400">Target: 2026 / 2027</span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Master of Business Administration (MBA) in Technology & Strategic Leadership
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  Planning to pursue an MBA to synergize 5+ years of full-stack software architecture, startup founder execution, and technical velocity with executive corporate governance, strategic product scaling, and venture leadership.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 shrink-0">
              <FiCheckCircle className="text-amber-400" />
              <span>Strategic Roadmap</span>
            </div>
          </div>
        </div>

        {/* Complete Academic & Schooling Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between group hover:border-purple-500/30"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                    {edu.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <FiCalendar className="text-purple-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                  {edu.degree}
                </h3>
                <div className="text-xs font-semibold text-indigo-400 mb-3">
                  {edu.institution}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <FiCheckCircle className="text-emerald-400" />
                <span>{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
          <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2.5">
            <FiAward className="text-purple-400 text-2xl" />
            <span>Verified Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all flex items-center gap-3.5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">{cert.title}</h4>
                  <div className="text-xs text-slate-400 mt-0.5">{cert.issuer}</div>
                  <div className="text-[11px] font-mono text-purple-400 mt-1">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
