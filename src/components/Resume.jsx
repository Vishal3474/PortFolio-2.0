import React, { useState, useEffect, useRef } from "react";
import { renderAsync } from "docx-preview";
import {
  FiDownload,
  FiExternalLink,
  FiMaximize2,
  FiMinimize2,
  FiPrinter,
  FiFileText,
  FiCheckCircle,
  FiRefreshCw,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState("structured"); // Default to Interactive Executive Sheet
  const docxContainerRef = useRef(null);
  const docxPath = "/Vishal_fullstack_5yr.docx";

  // Render the real .docx file into the DOM using docx-preview
  useEffect(() => {
    let isMounted = true;

    const loadDocx = async () => {
      if (!docxContainerRef.current) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(docxPath);
        if (!response.ok) {
          throw new Error(`Failed to load document: ${response.statusText}`);
        }
        const blob = await response.blob();

        if (isMounted && docxContainerRef.current) {
          docxContainerRef.current.innerHTML = "";
          await renderAsync(blob, docxContainerRef.current, null, {
            className: "docx-doc-render",
            inWrapper: false,
            ignoreWidth: false,
            ignoreHeight: false,
            breakPages: true,
            useBase64URL: true,
          });
          setLoading(false);
        }
      } catch (err) {
        console.error("Docx render error:", err);
        if (isMounted) {
          setError(err.message || "Failed to render docx");
          setLoading(false);
        }
      }
    };

    if (activeTab === "preview") {
      loadDocx();
    }

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section name="resume" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Official Curriculum Vitae
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Resume & Credentials
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Live preview of <span className="text-purple-300 font-mono">Vishal_fullstack_5yr.docx</span> — detailing 5+ years of full-stack engineering and enterprise production achievements.
          </p>
        </div>

        {/* Action Controls & Tab Switcher Bar */}
        <div className="glass-card rounded-2xl p-4 border border-white/10 mb-6 flex flex-wrap items-center justify-between gap-4">

          {/* Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab("structured")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "structured"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FiBriefcase />
              <span>Interactive Executive Sheet</span>
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "preview"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FiFileText />
              <span>DOCX Live Preview</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              title="Print Resume"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 glass-card hover:text-white hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <FiPrinter />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 glass-card hover:text-white hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
            >
              {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
              <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Expand"}</span>
            </button>

            <a
              href={docxPath}
              download="Vishal_fullstack_5yr.docx"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FiDownload className="text-sm" />
              <span>Download .DOCX</span>
            </a>
          </div>

        </div>

        {/* Main Document Display Container */}
        <div
          className={`transition-all duration-300 ${isFullscreen
              ? "fixed inset-0 z-50 bg-[#080c14]/95 backdrop-blur-2xl p-4 sm:p-8 flex flex-col items-center justify-center overflow-auto"
              : "relative"
            }`}
        >
          {isFullscreen && (
            <div className="w-full max-w-5xl flex justify-between items-center mb-4 text-white">
              <span className="font-heading font-bold text-lg">Vishal_fullstack_5yr.docx (Fullscreen View)</span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-xl glass-card text-white hover:bg-white/10 text-sm font-semibold flex items-center gap-1"
              >
                <FiMinimize2 />
                <span>Close</span>
              </button>
            </div>
          )}

          {/* TAB 1: Real DOCX Preview */}
          {activeTab === "preview" && (
            <div className="glass-card rounded-3xl p-3 sm:p-6 border border-white/10 shadow-2xl overflow-hidden relative min-h-[600px] flex flex-col items-center">

              {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/70 backdrop-blur-md rounded-3xl">
                  <FiRefreshCw className="text-4xl text-purple-400 animate-spin mb-3" />
                  <span className="text-sm font-semibold text-slate-300">Rendering Word Document...</span>
                  <span className="text-xs text-slate-500 mt-1">Parsing Vishal_fullstack_5yr.docx</span>
                </div>
              )}

              {error ? (
                <div className="p-8 text-center max-w-md my-auto">
                  <FiFileText className="text-5xl text-rose-400 mx-auto mb-3" />
                  <h4 className="font-heading font-bold text-lg text-white mb-2">Document Preview</h4>
                  <p className="text-xs text-slate-400 mb-6">
                    You can view the structured document sheet or download the original file directly.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setActiveTab("structured")}
                      className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold"
                    >
                      Switch to Executive View
                    </button>
                    <a
                      href={docxPath}
                      download
                      className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold"
                    >
                      Download DOCX
                    </a>
                  </div>
                </div>
              ) : (
                /* Paper Wrapper for authentic Word look */
                <div className="w-full max-w-4xl overflow-x-auto max-h-[820px] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl p-4 sm:p-10 font-sans custom-docx-paper">
                  <div ref={docxContainerRef} className="docx-render-container" />
                </div>
              )}

            </div>
          )}

          {/* TAB 2: Structured Executive Sheet View (Pure HTML/CSS fallback with 100% fidelity) */}
          {activeTab === "structured" && (
            <div className="glass-card rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl bg-[#0d1322] text-slate-200 max-h-[850px] overflow-y-auto">

              {/* Resume Header */}
              <div className="border-b border-white/10 pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    VISHAL SINGH
                  </h1>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                    5+ Years Development Experience
                  </span>
                </div>
                <div className="text-lg font-bold text-indigo-400 mt-1">
                  FULL STACK DEVELOPER | MERN • NEXT.JS • TYPESCRIPT
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-400">
                  <span>Khatima, Uttarakhand</span>
                  <span>•</span>
                  <a href="tel:+919520630066" className="hover:text-white text-slate-300 font-semibold">+91 9520630066</a>
                  <span>•</span>
                  <a href="mailto:vishalkumar3474@gmail.com" className="hover:text-white text-slate-300 font-semibold">vishalkumar3474@gmail.com</a>
                  <span>•</span>
                  <a href="https://linkedin.com/in/meetwithvishal" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    linkedin.com/in/meetwithvishal
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Vishal3474" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    github.com/Vishal3474
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-purple-400 mb-2 border-b border-purple-500/20 pb-1">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Full Stack Developer with 5+ years of development experience and strong hands-on expertise across the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, REST APIs, and modern SaaS development. Experienced in building scalable applications, reusable frontend architectures, secure JWT/OAuth authentication, role-based access control, real-time features, database design, CI/CD, and cloud deployments. Strong foundation in Data Structures, OOP, DBMS, Operating Systems, Software Engineering, and System Design. Experienced with React.js and Node.js, Redux Toolkit, GraphQL, Redis, AWS, Docker, microservices, scalable application architecture, Git, testing, and Agile/Scrum practices.
                </p>
              </div>

              {/* Core Technical Skills */}
              <div className="mb-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 border-b border-purple-500/20 pb-1">
                  Core Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong className="text-white">Languages:</strong> <span className="text-slate-300">JavaScript (ES6+), TypeScript, Python, C, C++</span>
                  </div>
                  <div>
                    <strong className="text-white">Frontend:</strong> <span className="text-slate-300">React.js, Next.js, HTML5, CSS3, Tailwind CSS, Shadcn/UI, Material UI, Framer Motion, React Native</span>
                  </div>
                  <div>
                    <strong className="text-white">State & Forms:</strong> <span className="text-slate-300">Redux Toolkit, React Redux, Zustand, React Hook Form, Yup</span>
                  </div>
                  <div>
                    <strong className="text-white">Backend & APIs:</strong> <span className="text-slate-300">Node.js, Express.js, NestJS, REST API Design, GraphQL, Mongoose ODM, SSR, Rate Limiting</span>
                  </div>
                  <div>
                    <strong className="text-white">Databases:</strong> <span className="text-slate-300">MongoDB, PostgreSQL, MySQL, Redis, Supabase, MongoDB Atlas</span>
                  </div>
                  <div>
                    <strong className="text-white">Auth & Security:</strong> <span className="text-slate-300">JWT, OAuth 2.0, NextAuth.js, bcrypt, HTTPS, CORS, RBAC, Auth0</span>
                  </div>
                  <div>
                    <strong className="text-white">Cloud & DevOps:</strong> <span className="text-slate-300">AWS, Docker, Git, GitHub, Vercel, Firebase, CI/CD, Linux CLI</span>
                  </div>
                  <div>
                    <strong className="text-white">Testing & Tools:</strong> <span className="text-slate-300">Postman, Storybook, WebRTC, Spline.js, Lenis</span>
                  </div>
                  <div>
                    <strong className="text-white">CS Fundamentals:</strong> <span className="text-slate-300">DSA, OOP, OS, DBMS, Software Engineering, System Design, Microservices</span>
                  </div>
                  <div>
                    <strong className="text-white">AI-Assisted:</strong> <span className="text-slate-300">ChatGPT, Claude, Gemini, GitHub Copilot</span>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="mb-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-purple-400 mb-4 border-b border-purple-500/20 pb-1">
                  Professional Experience
                </h2>

                {/* Job 1 */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <h3 className="font-heading text-base font-bold text-white">
                      Software Developer – Space To Tech
                    </h3>
                    <span className="text-xs font-mono text-purple-300">Aug 2023 – Present | Noida, India</span>
                  </div>
                  <div className="text-xs text-indigo-300 italic mb-2">
                    React Developer at Techugo (outsourced through Space To Tech), specializing in React.js and Next.js for production web applications.
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    <li>Developed and maintained responsive, reusable frontend features using React.js, Next.js, TypeScript, Tailwind CSS, and modern component-based architecture.</li>
                    <li>Integrated RESTful APIs and authentication workflows including JWT/OAuth, with focus on secure and scalable user experiences.</li>
                    <li>Optimized application performance using lazy loading, code splitting, efficient state management, and server-side rendering where appropriate.</li>
                    <li>Collaborated with cross-functional teams, participated in code reviews, Git workflows, Agile sprints, debugging, and production feature delivery.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between">
                    <h3 className="font-heading text-base font-bold text-white">
                      Full Stack Developer – Digital 360 India
                    </h3>
                    <span className="text-xs font-mono text-purple-300">Aug 2022 – Aug 2023 | Dehradun, India</span>
                  </div>
                  <div className="text-xs text-indigo-300 italic mb-2">
                    Held Senior Associate Software Engineer and Associate Software Engineer responsibilities across web and mobile application projects.
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    <li>Developed full-stack features using React.js, Node.js, Express.js, MongoDB, Redux/RTK, and related modern web technologies.</li>
                    <li>Built reusable UI components, integrated APIs, handled application state, validation, authentication, and responsive layouts.</li>
                    <li>Worked across frontend and backend development, contributing to scalable application architecture and end-to-end feature delivery.</li>
                  </ul>
                </div>
              </div>

              {/* Selected Projects */}
              <div className="mb-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 border-b border-purple-500/20 pb-1">
                  Selected Enterprise Projects
                </h2>
                <div className="space-y-3 text-xs">
                  <div>
                    <strong className="text-white">Lygato:</strong> <span className="text-slate-300">Entertainment-professional platform using React.js and PostgreSQL for event planning, secure bookings, marketplace connecting artists, venues, and promoters. Integrated Material UI, Stripe, SoundCloud, Auth0, and GetStream.</span>
                  </div>
                  <div>
                    <strong className="text-white">Eduminatti:</strong> <span className="text-slate-300">School listing and lead-generation platform using Next.js and built a Lead Management App to streamline lead tracking and conversion.</span>
                  </div>
                  <div>
                    <strong className="text-white">Bulk Pricing (Eureka Forbes):</strong> <span className="text-slate-300">B2B bulk-pricing and quotation workflow for Eureka Forbes using modern React/Next.js patterns, enabling users and business teams to manage quantities, pricing tiers, and quotations.</span>
                  </div>
                  <div>
                    <strong className="text-white">Quality Management System (Eureka Forbes):</strong> <span className="text-slate-300">Web-based QMS supporting structured quality workflows, issue tracking, reporting, and operational visibility with role-aware workflows.</span>
                  </div>
                  <div>
                    <strong className="text-white">Unigoal.com:</strong> <span className="text-slate-300">Full-stack education discovery platform built using React.js, Vite, and MySQL with structured course filtering, dynamic university search, and student application tracking.</span>
                  </div>
                  <div>
                    <strong className="text-white">YOLOv11 Box Counting POC:</strong> <span className="text-slate-300">Automated box/object counting using YOLOv11 with custom dataset trained via Roboflow and model inference pipeline.</span>
                  </div>
                </div>
              </div>

              {/* Education & Credentials */}
              <div>
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 border-b border-purple-500/20 pb-1">
                  Education & Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong className="text-white">MCA – Data Science:</strong> <span className="text-slate-300">KL University (Nov 2024 – Current, Pursuing)</span>
                  </div>
                  <div>
                    <strong className="text-white">Frontend Certification:</strong> <span className="text-slate-300">CodeYogi (Dec 2021 – June 2022, Mentored by IIT Delhi alumni)</span>
                  </div>
                  <div>
                    <strong className="text-white">Bachelor's Degree:</strong> <span className="text-slate-300">Kumaun University, Nainital (July 2017 – Dec 2020)</span>
                  </div>
                  <div>
                    <strong className="text-white">Certificates:</strong> <span className="text-slate-300">MySQL RDBMS (2022), Ethical Hacking (Simplilearn, 2026), Generative AI Studio (Google Cloud, 2026)</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Resume;
