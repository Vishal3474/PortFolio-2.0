import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiMaterialui,
  SiFramer,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiPostman,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { FiShield, FiCpu, FiServer, FiLayers, FiDatabase, FiCloud, FiArrowUpRight, FiCompass } from "react-icons/fi";

const skillCategories = [
  {
    category: "Frontend & Mobile",
    icon: <SiReact className="text-cyan-400" />,
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js (App Router/SSR)", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Shadcn / UI", icon: <FiLayers className="text-slate-200" /> },
      { name: "Material UI", icon: <SiMaterialui className="text-blue-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      { name: "React Native", icon: <SiReact className="text-cyan-300" /> },
    ],
  },
  {
    category: "Backend & Architecture",
    icon: <FiServer className="text-emerald-400" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-emerald-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
      { name: "NestJS", icon: <SiNestjs className="text-rose-500" /> },
      { name: "REST API Design", icon: <FiServer className="text-amber-400" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "Microservices", icon: <FiCpu className="text-purple-400" /> },
      { name: "Rate Limiting & CORS", icon: <FiShield className="text-indigo-400" /> },
      { name: "SSR & Server Actions", icon: <SiNextdotjs className="text-slate-300" /> },
    ],
  },
  {
    category: "Databases & Caching",
    icon: <FiDatabase className="text-amber-400" />,
    skills: [
      { name: "MongoDB & Mongoose", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Redis (Caching)", icon: <SiRedis className="text-rose-600" /> },
      { name: "Supabase", icon: <FiDatabase className="text-emerald-400" /> },
      { name: "MongoDB Atlas", icon: <SiMongodb className="text-emerald-400" /> },
    ],
  },
  {
    category: "State, Forms & Auth",
    icon: <FiShield className="text-purple-400" />,
    skills: [
      { name: "Redux Toolkit / RTK", icon: <SiRedux className="text-purple-400" /> },
      { name: "Zustand", icon: <FiLayers className="text-amber-300" /> },
      { name: "React Hook Form & Yup", icon: <FiLayers className="text-pink-400" /> },
      { name: "JWT Authentication", icon: <FiShield className="text-yellow-400" /> },
      { name: "OAuth 2.0 & NextAuth", icon: <FiShield className="text-cyan-400" /> },
      { name: "Role-Based Access (RBAC)", icon: <FiShield className="text-emerald-400" /> },
      { name: "Auth0 Integration", icon: <FiShield className="text-orange-400" /> },
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: <FiCloud className="text-sky-400" />,
    skills: [
      { name: "AWS", icon: <SiAmazonaws className="text-amber-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "CI / CD Pipelines", icon: <FiCloud className="text-cyan-400" /> },
      { name: "Git & GitHub", icon: <SiGithub className="text-slate-200" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Linux CLI", icon: <FiCpu className="text-emerald-400" /> },
    ],
  },
  {
    category: "Languages & CS Core",
    icon: <FiCpu className="text-rose-400" />,
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-300" /> },
      { name: "C & C++", icon: <SiCplusplus className="text-indigo-400" /> },
      { name: "Data Structures & Algos", icon: <FiCpu className="text-purple-400" /> },
      { name: "System Design", icon: <FiLayers className="text-cyan-400" /> },
      { name: "OOP & DBMS Concepts", icon: <FiDatabase className="text-emerald-400" /> },
      { name: "AI Tools (Copilot/Claude)", icon: <FiCpu className="text-amber-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section name="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Technical Repertoire
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Core Engineering Skills
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Broad full-stack expertise spanning modern frontend frameworks, distributed backend APIs, databases, cloud, and system design.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 hover:bg-white/[0.05] transition-all flex items-center gap-2"
                    >
                      <span className="text-base shrink-0">{skill.icon}</span>
                      <span className="text-xs font-medium text-slate-300 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Deep Dives Direct Showcase Strip */}
        <div className="mt-12 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-slate-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-1.5">
              <FiCompass className="text-sm" />
              <span>Architectural Blueprints & In-Depth Guides</span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
              Looking for code snippets, database schemas & system diagrams?
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                to="/skills/react-nextjs"
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all"
              >
                React & Next.js SSR →
              </Link>
              <Link
                to="/skills/nodejs-backend"
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all"
              >
                Node.js Microservices →
              </Link>
              <Link
                to="/skills/database-engineering"
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all"
              >
                Database & Redis →
              </Link>
              <Link
                to="/skills/cloud-devops"
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all"
              >
                Cloud Infrastructure & Docker →
              </Link>
              <Link
                to="/skills/typescript-system-design"
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all"
              >
                TypeScript & Clean Code →
              </Link>
            </div>
          </div>

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all shrink-0 hover:scale-105"
          >
            <span>Explore All 18+ Pages</span>
            <FiArrowUpRight className="text-sm" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Skills;
