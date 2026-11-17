import React from "react";
import FlowingMenu from "./FlowingMenu";
import { FiLayers, FiShield, FiCpu, FiDatabase, FiCloud } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { SiReact, SiDocker, SiMysql, SiNextdotjs } from "react-icons/si";

export default function ServicesFlowingSection() {
  const menuItems = [
    {
      text: "Full Stack Web Apps",
      subtitle: "Launch fast, beautiful, responsive web applications built with React & Next.js.",
      badge: "YOUR VISION, PRODUCED",
      icon: SiReact,
      iconColor: "text-cyan-400",
      badgeColor: "text-purple-300",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "#projects",
    },
    {
      text: "Startups & MVPs",
      subtitle: "Uniportal.in & Kumaun Software: turning vision into live, revenue-generating products.",
      badge: "BUILT FROM ZERO TO ONE",
      icon: FaRocket,
      iconColor: "text-purple-400",
      badgeColor: "text-[#d4a373]",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      link: "#projects",
    },
    {
      text: "Enterprise B2B Workflows",
      subtitle: "Complex bulk pricing tier algorithms and plant quality systems for Eureka Forbes.",
      badge: "HIGH CONCURRENCY & SCALE",
      icon: FiCpu,
      iconColor: "text-amber-400",
      badgeColor: "text-[#e07a5f]",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      link: "#projects",
    },
    {
      text: "Cloud, DevOps & Docker",
      subtitle: "Containerized microservices, AWS architectures, CI/CD, and sub-second load times.",
      badge: "99.9% PRODUCTION UPTIME",
      icon: SiDocker,
      iconColor: "text-blue-400",
      badgeColor: "text-sky-400",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      link: "#skills",
    },
    {
      text: "Secure Auth & RBAC",
      subtitle: "Role-aware security gates with JWT, OAuth 2.0, NextAuth, and enterprise Auth0.",
      badge: "ROLE-BASED SECURITY",
      icon: FiShield,
      iconColor: "text-emerald-400",
      badgeColor: "text-[#ddb892]",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      link: "#skills",
    },
    {
      text: "Database Architecture",
      subtitle: "High-throughput MySQL indexing, PostgreSQL, MongoDB Atlas, and Redis caching.",
      badge: "SUB-SECOND QUERY LATENCY",
      icon: SiMysql,
      iconColor: "text-sky-400",
      badgeColor: "text-[#e07a5f]",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
      link: "#skills",
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-24 bg-[#0a0d16] border-t border-white/[0.06] relative scroll-mt-12 select-none"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header matching exact reference design */}
        <div className="max-w-4xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-purple-400 font-mono">
            WHAT I DELIVER
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            One developer. <br />
            <span className="sm:whitespace-nowrap bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              Every part of your modern web stack.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl">
            From founder MVPs and startups to enterprise-grade scale. I've got you covered.
          </p>
        </div>

        {/* Interactive React Bits / Shopmobi FlowingMenu */}
        <div className="w-full">
          <FlowingMenu
            items={menuItems}
            speed={12}
            textColor="#ffffff"
            bgColor="#0a0d16"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#07070a"
            borderColor="rgba(255, 255, 255, 0.08)"
          />
        </div>
      </div>
    </section>
  );
}
