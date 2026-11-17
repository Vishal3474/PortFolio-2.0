import React from "react";
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
  SiDocker,
  SiAmazonaws,
  SiGraphql,
  SiRedux,
  SiGit,
} from "react-icons/si";

const techList = [
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, role: "UI Library" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, role: "SSR & Fullstack" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, role: "Type Safety" },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E]" />, role: "Runtime" },
  { name: "Express.js", icon: <SiExpress className="text-slate-300" />, role: "REST APIs" },
  { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" />, role: "Enterprise Backend" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, role: "Relational DB" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, role: "NoSQL DB" },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, role: "SQL Database" },
  { name: "Redis", icon: <SiRedis className="text-[#FF4438]" />, role: "Caching & Queues" },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, role: "Containerization" },
  { name: "AWS", icon: <SiAmazonaws className="text-[#FF9900]" />, role: "Cloud Infra" },
  { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" />, role: "Query Language" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" />, role: "Design System" },
  { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" />, role: "State Engine" },
];

const TechMarquee = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedTech = [...techList, ...techList];

  return (
    <section className="relative overflow-hidden bg-[#07090e] py-10 select-none border-y border-white/[0.06]">
      {/* Top Header Divider inspired by Shopmobi */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-purple-500/50 to-transparent" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Core Technology Stack & Architecture
          </span>
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-purple-500/50 to-transparent" />
        </div>
      </div>

      {/* Infinite Marquee Track with Left & Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Scrim Masks for Smooth Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {duplicatedTech.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/50 hover:bg-white/[0.08] transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm hover:shadow-purple-500/20"
            >
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                  {tech.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Segmented Breadcrumb Ribbon like Shopmobi */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="border-t border-white/[0.05] pt-4">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span>FULL STACK ARCHITECTURE</span>
            <span className="text-purple-400">•</span>
            <span>CLEAN & TESTED CODE</span>
            <span className="text-purple-400">•</span>
            <span>RBAC & AUTH WORKFLOWS</span>
            <span className="text-purple-400">•</span>
            <span>HIGH PERFORMANCE APIS</span>
            <span className="text-purple-400">•</span>
            <span>PRODUCTION SCALE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
