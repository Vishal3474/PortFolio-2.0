import React from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

const experiences = [
  {
    role: "Software Developer (React & Next.js)",
    company: "Space To Tech (Techugo Client)",
    period: "Aug 2023 – Present",
    location: "Noida, India",
    type: "Full-Time",
    badge: "Current Role",
    description:
      "React Developer deployed at Techugo, outsourced through Space To Tech, specializing in React.js and Next.js for high-impact production web applications.",
    achievements: [
      "Developed and maintained scalable, reusable frontend architectures using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Engineered secure authentication workflows with JWT & OAuth 2.0, establishing robust role-based access control (RBAC).",
      "Boosted web application performance via dynamic code-splitting, lazy loading, efficient Redux/Zustand state management, and SSR.",
      "Actively led code reviews, Agile/Scrum sprint planning, Git branching strategies, and seamless CI/CD production releases.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JWT/OAuth", "SSR", "Agile", "Git"],
  },
  {
    role: "Full Stack Developer (MERN Stack)",
    company: "Digital 360 India",
    period: "Aug 2022 – Aug 2023",
    location: "Dehradun, India",
    type: "Full-Time",
    badge: "Senior Associate Role",
    description:
      "Held Senior Associate Software Engineer and Associate Software Engineer responsibilities across demanding web and mobile applications.",
    achievements: [
      "Architected end-to-end full-stack features utilizing React.js, Node.js, Express.js, MongoDB, and Redux Toolkit.",
      "Engineered high-performance RESTful APIs, custom Express middleware, database schemas, and data validation layers.",
      "Constructed modular component libraries, responsive UI dashboards, state machines, and authentication gates.",
      "Collaborated on database modeling in MongoDB Atlas, indexing strategies, and seamless deployment workflows.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "REST APIs", "Mongoose"],
  },
];

const Experience = () => {
  return (
    <section name="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Career Timeline
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            5+ years of software development experience building production-grade web applications and enterprise workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-transparent before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-start ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } group`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#080c14] border-2 border-purple-500 flex items-center justify-center text-purple-400 z-10 shadow-lg shadow-purple-500/30 group-hover:scale-125 transition-transform duration-300">
                <FiBriefcase className="text-sm" />
              </div>

              {/* Card Container */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                  
                  {/* Top Header Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                      {exp.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <FiCalendar className="text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 mt-1 mb-4">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal text-xs">
                      <FiMapPin className="text-purple-400" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <FiCheckCircle className="text-emerald-400 shrink-0 mt-1 text-sm" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                    {exp.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
