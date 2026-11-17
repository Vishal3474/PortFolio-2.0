import React from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiExternalLink, FiGlobe } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

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
    role: "Founder & Lead Technical Architect",
    company: "Kumaun Software Solutions & Uniportal",
    period: "2023 – Present",
    location: "Uttarakhand, India",
    type: "Founder / Startup Venture",
    badge: "Founder & Venture",
    links: [
      { name: "uniportal.in", url: "https://uniportal.in" },
      { name: "kumaunsoftwaresolutions.web.app", url: "https://kumaunsoftwaresolutions.web.app/" },
    ],
    description:
      "Founded software engineering agency Kumaun Software Solutions and conceived & built proprietary platforms including Uniportal.in (EdTech admissions and university discovery engine).",
    achievements: [
      "Architected and deployed Uniportal.in, an automated higher-education platform connecting universities with student lead pipelines.",
      "Founded Kumaun Software Solutions, delivering custom SaaS platforms, modern web apps, and digital solutions for regional and global businesses.",
      "Orchestrated cloud deployments on Firebase, Vercel, and AWS with automated CI/CD and sub-second performance.",
      "Spearheaded complete product lifecycle from UI/UX design to relational database modeling, APIs, and client success.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Firebase", "MySQL", "MongoDB", "Tailwind CSS", "AWS"],
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
            Professional Experience & Ventures
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            5+ years of software development experience building enterprise workflows, client solutions, and founder startups.
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
                {exp.badge === "Founder & Venture" ? <FaRocket className="text-sm text-purple-300" /> : <FiBriefcase className="text-sm" />}
              </div>

              {/* Card Container */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                  
                  {/* Top Header Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25 flex items-center gap-1.5">
                      {exp.badge === "Founder & Venture" && <FaRocket />}
                      <span>{exp.badge}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  {/* Role Title & Company */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs font-normal text-slate-400 flex items-center gap-1">
                      <FiMapPin />
                      {exp.location}
                    </span>
                  </div>

                  {/* Links if available (e.g. for Startups) */}
                  {exp.links && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.links.map((linkItem, lIdx) => (
                        <a
                          key={lIdx}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 text-purple-300 hover:bg-purple-500/20 transition-colors"
                        >
                          <FiGlobe className="text-xs" />
                          <span>{linkItem.name}</span>
                          <FiExternalLink className="text-[10px]" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <FiCheckCircle className="text-purple-400 text-sm shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {t}
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
