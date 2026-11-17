import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiExternalLink,
  FiCheckCircle,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiLayers,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiCompass,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const showcaseCards = [
  {
    id: "uniportal",
    tag: "FOUNDER STARTUP • HIGHER EDTECH",
    shortTitle: "Uniportal.in",
    fullTitle: "Uniportal.in • University Admissions & Discovery Engine",
    subtitle:
      "Proprietary higher education ecosystem founded by Vishal Singh connecting universities with prospective students, automated CRM lead pipelines, course comparisons, and real-time admission tracking.",
    stack: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "REST APIs", "Cloud Infra"],
    image: "/assets/uniportal-hero.jpg",
    client: "Founded Startup",
    badge: "Founder & Lead Architect",
    link: "https://uniportal.in",
    deepDive: "/startups/uniportal",
  },
  {
    id: "kumaun-software",
    tag: "FOUNDER STARTUP • TECH AGENCY",
    shortTitle: "Kumaun Software",
    fullTitle: "Kumaun Software Solutions • Digital Engineering Startup",
    subtitle:
      "Tech solutions startup founded by Vishal Singh delivering custom full-stack enterprise software, cloud architectures, modern web & mobile applications, and digital business systems.",
    stack: ["React.js", "Firebase", "Node.js", "Tailwind CSS", "Cloud Solutions"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    client: "Founded Agency",
    badge: "Founder & Technical Lead",
    link: "https://kumaunsoftwaresolutions.web.app/",
    deepDive: "/startups/kumaun-software",
  },
  {
    id: "eureka-pricing",
    tag: "ENTERPRISE B2B",
    shortTitle: "Bulk Pricing",
    fullTitle: "Eureka Forbes • Dynamic B2B Bulk Pricing Engine",
    subtitle:
      "Engineered enterprise pricing tier algorithms, reusable Next.js/React form architectures with strict validation, and automated quotation pipelines for sales teams.",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    client: "Eureka Forbes",
    badge: "Enterprise Production",
    deepDive: "/experience/eureka-forbes",
  },
  {
    id: "eureka-qms",
    tag: "MANUFACTURING QMS",
    shortTitle: "Plant QMS",
    fullTitle: "Manufacturing Quality Management System (QMS)",
    subtitle:
      "Developed web-based QMS for plant inspectors and operational heads with role-aware RBAC, structured defect tracking audit logs, and analytical dashboards.",
    stack: ["React.js", "Next.js", "TypeScript", "RBAC", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    client: "Eureka Forbes",
    badge: "Plant Operations",
    deepDive: "/experience/eureka-forbes",
  },
  {
    id: "unigoal",
    tag: "REACT • VITE • MYSQL",
    shortTitle: "Unigoal.com",
    fullTitle: "Unigoal.com • Global University Discovery Engine",
    subtitle:
      "Engineered with ultra-fast React & Vite, relational MySQL database architecture with optimized indexing, faceted course search, and student lead application pipelines.",
    stack: ["React.js", "Vite", "MySQL", "Tailwind CSS", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    client: "Unigoal",
    badge: "React + Vite + MySQL",
    deepDive: "/experience/unigoal",
  },
  {
    id: "lygato",
    tag: "SAAS & MARKETPLACE",
    shortTitle: "Lygato Platform",
    fullTitle: "Lygato • Full Stack Artist & Promoter Platform",
    subtitle:
      "Entertainment marketplace connecting artists and venues with Stripe escrow payments, Auth0 enterprise authentication, and GetStream real-time client chat.",
    stack: ["React.js", "PostgreSQL", "Stripe", "Auth0", "GetStream"],
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    client: "Lygato",
    badge: "Marketplace SaaS",
    deepDive: "/experience/lygato",
  },
];

const projectsData = [
  {
    id: 1,
    title: "Uniportal.in – University Admissions & Lead Engine",
    category: "Startups & Ventures",
    client: "Founded Startup (Vishal Singh)",
    description:
      "Comprehensive higher education ecosystem and university admissions portal founded and architected by Vishal Singh. Connects higher-education aspirants with top universities, dynamic fee calculators, admission requirements, and automated lead CRM funnels.",
    features: [
      "Faceted university discovery engine with dynamic course & fee filters",
      "Automated lead management CRM workflows for university partner desks",
      "Interactive multi-stage student admission applications and verification pipelines",
      "Sub-second page loading architecture with optimized SEO metadata",
    ],
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "Cloud Hosting"],
    link: "https://uniportal.in",
    badge: "Founder & Lead Architect",
    featured: true,
  },
  {
    id: 2,
    title: "Kumaun Software Solutions – Digital Engineering Startup",
    category: "Startups & Ventures",
    client: "Founded Agency (Vishal Singh)",
    description:
      "Software engineering and digital solutions agency founded by Vishal Singh in Kumaun, Uttarakhand. Provides custom SaaS platform development, enterprise web and mobile applications, cloud infrastructure setups, and digital automation systems for regional and international clients.",
    features: [
      "Full-cycle custom web and mobile software development services",
      "Cloud architecture and deployment pipelines on Firebase and AWS",
      "High-converting modern UI/UX design systems built with React and Tailwind CSS",
      "Client management, technical consulting, and digital transformation roadmaps",
    ],
    tags: ["React.js", "Firebase", "Node.js", "Tailwind CSS", "Cloud Solutions", "Web Architecture"],
    link: "https://kumaunsoftwaresolutions.web.app/",
    badge: "Founder & Technical Lead",
    featured: true,
  },
  {
    id: 3,
    title: "Bulk Pricing Workflow – Eureka Forbes",
    category: "Enterprise & B2B",
    client: "Eureka Forbes",
    description:
      "Engineered an enterprise B2B bulk-pricing and quotation workflow enabling business clients and internal sales teams to manage product quantities, tiered discount calculations, and quotation generation.",
    features: [
      "Dynamic pricing tier calculation algorithms",
      "Reusable React & Next.js form components with strict validation",
      "Optimized state management for complex B2B enquiry flows",
      "High-reliability enterprise responsive interface",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "State Management"],
    badge: "Enterprise Production",
    featured: true,
  },
  {
    id: 4,
    title: "Quality Management System (QMS) – Eureka Forbes",
    category: "Enterprise & B2B",
    client: "Eureka Forbes",
    description:
      "Developed a web-based Quality Management System to support structured manufacturing quality inspection workflows, operational visibility, defect tracking, and comprehensive reporting.",
    features: [
      "Role-aware workflows (RBAC) for plant managers & inspectors",
      "Structured defect & issue tracking audit logs",
      "Custom responsive reporting and analytical dashboards",
      "Maintainable, component-driven design system",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "RBAC", "Form Validation"],
    badge: "Enterprise Production",
    featured: true,
  },
  {
    id: 5,
    title: "Lygato – Entertainment Professional Platform",
    category: "SaaS & Marketplace",
    client: "Lygato",
    description:
      "Full-stack entertainment marketplace connecting artists, venues, and event promoters for event planning, contract bookings, media streaming, and real-time collaboration.",
    features: [
      "Stripe payment gateway integration for secure escrow bookings",
      "Auth0 enterprise authentication with social logins",
      "GetStream chat engine for real-time client messaging",
      "SoundCloud media player integration for artist portfolios",
    ],
    tags: ["React.js", "PostgreSQL", "Material UI", "Stripe", "Auth0", "GetStream", "SoundCloud"],
    badge: "Marketplace SaaS",
    featured: true,
  },
  {
    id: 6,
    title: "Unigoal.com – Global Education Discovery",
    category: "Startups & Ventures",
    client: "Unigoal",
    description:
      "Full-stack higher-education platform built with React, Vite, and MySQL, enabling seamless global university discovery, course comparisons, eligibility criteria checks, and student application pipelines.",
    features: [
      "Built with high-performance React.js & Vite for sub-second page loads",
      "Relational database architecture powered by MySQL with optimized indexing",
      "Faceted university & course search with multi-parameter filter queries",
      "Interactive multi-step application tracking and student lead workflows",
    ],
    tags: ["React.js", "Vite", "MySQL", "Tailwind CSS", "REST APIs"],
    badge: "React • Vite • MySQL",
    featured: true,
  },
  {
    id: 7,
    title: "Eduminatti – School Portal & Lead Management",
    category: "SaaS & Marketplace",
    client: "Eduminatti",
    description:
      "Built a high-traffic education marketplace platform using Next.js with an integrated Lead Management App to streamline parent enquiries, lead scoring, and school conversion funnels.",
    features: [
      "High-performance SEO-friendly SSR page architecture",
      "Custom Lead Management CRM dashboard for admin workflows",
      "Fast faceted search and filtering across thousands of schools",
      "Responsive, accessible frontend design system",
    ],
    tags: ["Next.js", "React.js", "REST APIs", "SEO Architecture", "Tailwind CSS", "CRM"],
    badge: "EdTech Platform",
    featured: false,
  },
  {
    id: 8,
    title: "YOLOv11 Box Counting POC",
    category: "AI & Vision",
    client: "R&D Proof of Concept",
    description:
      "Built an automated computer vision proof-of-concept for real-time box and package counting using the YOLOv11 object detection model and custom Roboflow training.",
    features: [
      "Prepared custom dataset with bounding-box annotations via Roboflow",
      "Trained model checkpoint for accurate warehouse inventory counting",
      "Implemented inference pipeline with automated count verification",
      "Validated computer vision metrics under varying lighting & angles",
    ],
    tags: ["YOLOv11", "Python", "Roboflow", "Computer Vision", "Object Detection", "Inference"],
    badge: "AI / ML Vision",
    featured: false,
  },
  {
    id: 9,
    title: "JobRaahi – Hyperlocal Job Search Engine",
    category: "SaaS & Marketplace",
    client: "JobRaahi",
    description:
      "Hyperlocal job discovery platform connecting Indian candidates to nearby employment opportunities with instant filters, recruiter dashboards, and mobile-first UI.",
    features: [
      "Location-aware job search and recommendation feeds",
      "Reusable component architecture in React & TypeScript",
      "Smooth multi-criteria filter state with URL query syncing",
      "Optimized lightweight mobile layout for low-bandwidth networks",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "Search"],
    badge: "Job Portal",
    featured: false,
  },
  {
    id: 10,
    title: "Interactive Task & Productivity Suite",
    category: "Tools & Utilities",
    client: "Personal Production",
    description:
      "Comprehensive task manager built to demonstrate scalable Redux Toolkit state slice architecture, custom middleware, action dispatchers, and persistent storage.",
    features: [
      "Redux Toolkit state slicing with action payloads",
      "Task completion metrics, status filters, and priority tags",
      "Instant responsive design with Tailwind CSS styling",
    ],
    tags: ["React", "Redux Toolkit", "Hooks", "Netlify"],
    link: "https://todo-vishal.netlify.app/",
    badge: "Live App",
    featured: false,
  },
];

const categories = ["All", "Startups & Ventures", "Enterprise & B2B", "SaaS & Marketplace", "AI & Vision", "Tools & Utilities"];

const Projects = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  const handlePrevShowcase = () => {
    setActiveShowcase((prev) => (prev - 1 + showcaseCards.length) % showcaseCards.length);
  };

  const handleNextShowcase = () => {
    setActiveShowcase((prev) => (prev + 1) % showcaseCards.length);
  };

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeTab);

  return (
    <section name="projects" className="py-24 relative overflow-hidden bg-[#070a12]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ========================================================================= */}
        {/* SHOPMOBI-INSPIRED 3D PERSPECTIVE ACCORDION SHOWCASE                       */}
        {/* ========================================================================= */}
        <div className="mb-24">
          {/* Header Row with Title and Directional Navigation Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  <span>Shopmobi 3D Interactive Perspective</span>
                </div>
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all hover:scale-105"
                >
                  <FiCompass className="text-xs text-purple-400" />
                  <span>Explore All 18+ Pages Hub</span>
                  <span className="text-[10px] text-purple-400">→</span>
                </Link>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Startups & Flagship Workflows. <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Engineered for Production Scale.
                </span>
              </h2>
            </div>

            {/* Navigation Arrow Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrevShowcase}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-all active:scale-95 shadow-md cursor-pointer"
                aria-label="Previous showcase card"
              >
                <FiArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextShowcase}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-all active:scale-95 shadow-md cursor-pointer"
                aria-label="Next showcase card"
              >
                <FiArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 3D Perspective Accordion with Physics-style Flex Expansion */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 h-[500px] sm:h-[520px] w-full"
            style={{ perspective: "1400px" }}
          >
            {showcaseCards.map((card, idx) => {
              const isActive = activeShowcase === idx;
              const rotY = isActive ? 0 : idx < activeShowcase ? 3 : -3;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveShowcase(idx)}
                  onClick={() => setActiveShowcase(idx)}
                  style={{
                    flex: isActive ? 4 : 1,
                    transform: `rotateY(${rotY}deg)`,
                    transformOrigin: "center center",
                  }}
                  className={`relative min-w-0 h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-[flex,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${isActive
                    ? "border-purple-400/40 shadow-purple-500/10"
                    : "border-white/10 opacity-75 hover:opacity-100"
                    } group`}
                >
                  {/* Background Image with Dynamic Brightness & Zoom */}
                  <img
                    src={card.image}
                    alt={card.shortTitle}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80";
                    }}
                    draggable="false"
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${isActive
                      ? "scale-105 brightness-95"
                      : "scale-100 brightness-50 group-hover:brightness-75"
                      }`}
                  />

                  {/* High Contrast Gradient Scrim Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#06080e]/95 via-[#06080e]/60 to-transparent transition-opacity duration-500 pointer-events-none ${isActive ? "opacity-95" : "opacity-90"
                      }`}
                  />

                  {/* Bottom Content Area */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-end z-10 pointer-events-none">
                    {/* Category Tag */}
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-purple-300 uppercase truncate transition-colors duration-300">
                      {card.tag}
                    </span>

                    {/* Title Area with Smooth Cross-fade */}
                    <div className="relative mt-2 min-h-[32px] flex items-center">
                      {/* Collapsed Short Title */}
                      <h4
                        className={`text-base sm:text-lg font-bold text-white tracking-tight truncate transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? "opacity-0 -translate-y-2 absolute pointer-events-none"
                          : "opacity-100 translate-y-0"
                          }`}
                      >
                        {card.shortTitle}
                      </h4>

                      {/* Active Full Title with Glowing Accent Bar */}
                      <div
                        className={`flex items-center gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? "opacity-100 translate-y-0 delay-100"
                          : "opacity-0 translate-y-2 absolute pointer-events-none"
                          }`}
                      >
                        <span className="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-full shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                        <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
                          {card.fullTitle}
                        </h3>
                      </div>
                    </div>

                    {/* Subtitle & Tech Badges - Smooth Grid Expansion */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                        ? "grid-rows-[1fr] opacity-100 mt-2 delay-100"
                        : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pl-4 max-w-xl transition-all duration-500 ${isActive ? "translate-y-0 opacity-100 delay-150" : "translate-y-2 opacity-0"
                            }`}
                        >
                          {card.subtitle}
                        </p>

                        {/* Tech Stack Pills & Link in Active Card */}
                        <div
                          className={`mt-4 pl-4 flex flex-wrap gap-2 items-center transition-all duration-500 ${isActive ? "translate-y-0 opacity-100 delay-200" : "translate-y-2 opacity-0"
                            }`}
                        >
                          {card.stack.map((item, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/10 text-purple-200 border border-white/10 backdrop-blur-sm"
                            >
                              {item}
                            </span>
                          ))}
                          <span className="text-[10px] font-semibold text-emerald-400 mr-2">
                            • {card.badge}
                          </span>

                          {card.link && (
                            <a
                              href={card.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all pointer-events-auto shadow-md hover:scale-105 active:scale-95"
                            >
                              <span>Visit Live Platform</span>
                              <FiExternalLink className="text-xs" />
                            </a>
                          )}

                          {card.deepDive && (
                            <Link
                              to={card.deepDive}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all pointer-events-auto border border-white/15 hover:scale-105 active:scale-95"
                            >
                              <span>Read Case Study</span>
                              <FiArrowUpRight className="text-xs" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE PROJECT DIRECTORY & FILTERABLE GRID                          */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Full Engineering Catalog
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Explore All Projects & Architecture
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Detailed breakdown of founder startups, enterprise workflows, and scalable web platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${activeTab === tab
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

              <div>
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25 flex items-center gap-1.5">
                    {project.category === "Startups & Ventures" && <FaRocket className="text-purple-400" />}
                    <span>{project.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.client}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-300">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tags & Link */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      <FiGlobe className="text-sm group-hover/link:rotate-45 transition-transform" />
                      <span>Explore Live Platform ({project.link.replace("https://", "")})</span>
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
