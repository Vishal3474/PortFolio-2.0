import React from "react";
import { FiBookOpen, FiAward, FiCheckCircle, FiCalendar } from "react-icons/fi";
import { SiGooglecloud, SiMysql } from "react-icons/si";

const educationData = [
  {
    degree: "Master of Computer Applications – Data Science",
    institution: "KL University",
    period: "Nov 2024 – Present",
    status: "Currently Pursuing",
    description:
      "Advanced graduate study focusing on modern data science, statistical modeling, machine learning algorithms, database administration, and scalable computing.",
    badge: "Master's Degree",
  },
  {
    degree: "Certification – Frontend Development & React",
    institution: "CodeYogi",
    period: "Dec 2021 – June 2022",
    status: "Completed",
    description:
      "Intensive software engineering curriculum covering HTML5, CSS3, JavaScript ES6+, Tailwind CSS, and React.js under the direct mentorship of IIT Delhi alumni.",
    badge: "Software Engineering",
  },
  {
    degree: "Bachelor's Degree",
    institution: "Kumaun University, Nainital",
    period: "July 2017 – Dec 2020",
    status: "Completed",
    description:
      "Undergraduate education developing structured problem-solving, analytical deduction, research rigor, and interdisciplinary communication skills.",
    badge: "Undergraduate",
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
            Academic & Credentials
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Continuous academic elevation in computer applications, data science, and verified technical credentials.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <FiCalendar className="text-purple-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors mb-2">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-indigo-400 mb-4">
                  {edu.institution}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <FiCheckCircle />
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
