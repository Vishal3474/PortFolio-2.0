import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FiMessageSquare, 
  FiX, 
  FiSend, 
  FiUser, 
  FiTerminal, 
  FiArrowUpRight, 
  FiCalendar, 
  FiCheckCircle, 
  FiCopy, 
  FiCheck,
  FiFileText
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { FaWhatsapp, FaRobot } from "react-icons/fa";

// Grounded Knowledge Base for Vishal Singh's AI Copilot
const KNOWLEDGE_RESPONSES = [
  {
    keywords: ["startup", "startups", "founder", "uniportal", "kumaun", "company"],
    title: "Founder Startups (Uniportal.in & Kumaun Software Solutions)",
    reply: `Vishal Singh is the founder and lead architect of two active technology ventures:

1. **Uniportal.in** (https://uniportal.in):
   - India's higher EdTech university admissions and discovery engine.
   - Connects university admissions desks with prospective students through automated CRM lead routing funnels.
   - Engineered with React, Next.js, Node.js, and MongoDB.

2. **Kumaun Software Solutions** (https://kumaunsoftwaresolutions.web.app/):
   - Digital engineering studio founded in Uttarakhand.
   - Delivered 15+ production applications for retail, hospitality, trade, and EdTech clients.`,
    actions: [
      { label: "Uniportal Case Study", path: "/startups/uniportal" },
      { label: "Kumaun Software Case Study", path: "/startups/kumaun-software" },
      { label: "Visit uniportal.in ↗", href: "https://uniportal.in" },
    ]
  },
  {
    keywords: ["eureka", "forbes", "bulk", "pricing", "qms", "corporate"],
    title: "Eureka Forbes Enterprise Deliverables",
    reply: `For **Eureka Forbes**, Vishal engineered two mission-critical enterprise systems:

1. **B2B Bulk Pricing & Quoting Management System (QMS)**:
   - Designed mathematical volume discounting algorithms and margin threshold validation.
   - Reduced sales quotation turnaround from 4 days to under 15 seconds.
   - Automated commercial PDF quotation generation for B2B accounts.

2. **Manufacturing Quality Management System (QMS)**:
   - Web-based plant quality inspection portal with strict Role-Based Access Control (RBAC).
   - Structured defect tracking, audit logs, and compliance dashboards.`,
    actions: [
      { label: "Eureka Forbes Case Study", path: "/experience/eureka-forbes" },
      { label: "Book Technical Consultation", href: "https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3" },
    ]
  },
  {
    keywords: ["stack", "tech", "skills", "experience", "years", "react", "next", "node"],
    title: "Tech Stack & 5+ Years Experience Breakdown",
    reply: `Vishal brings **5+ years of verified software engineering experience**:

- **Frontend**: React 18, Next.js 14 (App Router & SSR), TypeScript, Tailwind CSS, Redux Toolkit, Zustand, Framer Motion, Vite.
- **Backend**: Node.js, Express.js, NestJS, RESTful APIs, WebSockets (Socket.io), Microservices, BullMQ job queues.
- **Databases**: MongoDB (Complex Aggregations), MySQL (Relational Indexing), Redis (Caching & Rate Limiting, 94%+ hit ratio).
- **Cloud & DevOps**: AWS (EC2/S3), Docker multi-stage builds, GitHub Actions CI/CD pipelines, NGINX SSL, Netlify.`,
    actions: [
      { label: "React & Next.js Architecture", path: "/skills/react-nextjs" },
      { label: "Node.js Backend Deep-Dive", path: "/skills/nodejs-backend" },
      { label: "Download Resume (.docx)", href: "/Vishal_fullstack_5yr.docx" },
    ]
  },
  {
    keywords: ["mca", "education", "college", "degree", "kl", "university", "exam", "school", "iti", "mba", "10th", "12th"],
    title: "Complete Academic & Technical Education Journey",
    reply: `Vishal Singh's comprehensive educational & vocational roadmap:

1. **Future Academic Vision**: Planned Master of Business Administration (MBA) in Technology Management & Strategic Business Leadership.
2. **Master of Computer Applications (MCA) – Data Science**: KL University (2024–2026) — All examinations cleared & completed • Formal degree awaited.
3. **Software Engineering Mentorship**: CodeYogi (Dec 2021–June 2022) — Intensive full-stack engineering under direct mentorship of IIT Delhi alumni.
4. **ITI – Welder Trade**: Government ITI — 1-year technical vocational trade course completed after graduation (hands-on precision & industrial workshop discipline).
5. **Bachelor's Degree (Graduation)**: Kumaun University, Nainital (2017–2020).
6. **Schooling (10th & 12th Intermediate)**: GIC Jhankat, Khatima under Uttarakhand Board of School Education (UBSE, Ramnagar).`,
    actions: [
      { label: "Read MCA Journey Blueprint", path: "/about/mca-journey" },
      { label: "View Hire Briefing", path: "/services/hire-fullstack-developer" },
      { label: "Download Resume (.docx)", href: "/Vishal_fullstack_5yr.docx" },
    ]
  },
  {
    keywords: ["location", "khatima", "dehradun", "delhi", "noida", "haldwani", "remote", "where"],
    title: "Location, Proximity & Remote Availability",
    reply: `Vishal is based in **Khatima, Uttarakhand (India)** and operates globally:

- **Local Base**: Khatima & Udham Singh Nagar (HQ of Kumaun Software Solutions).
- **Nearby Hubs**: Dehradun IT Corridors, Haldwani & Nainital (1.5h away).
- **Metro Proximity**: Delhi NCR, Noida & Gurgaon (Overnight train / fast highway).
- **Global Remote**: 100% remote-ready for US, UK, and European distributed teams with 4-5 hours daily real-time overlap.`,
    actions: [
      { label: "Khatima Hub Page", path: "/location/khatima-uttarakhand" },
      { label: "Delhi NCR Hub Page", path: "/location/delhi-ncr" },
      { label: "Remote Worldwide Profile", path: "/location/remote-worldwide" },
    ]
  },
  {
    keywords: ["hire", "book", "call", "1hour", "contact", "whatsapp", "consult", "cost", "rate"],
    title: "How to Hire or Consult Vishal Singh",
    reply: `You can engage with Vishal through multiple direct models:

1. **1-on-1 Consultation**: Book an on-demand video session via his official 1HourDeveloper profile (d=Vishal+V-3).
2. **Full-Time / Senior Roles**: Open for Senior Full Stack Engineer, Tech Lead, and MERN Architect positions (Remote worldwide or Hybrid Delhi NCR).
3. **Contract / Fast-Track MVP**: Deliver production web platforms from concept to launch within 30 days.
4. **Direct WhatsApp**: +91 9520630066.`,
    actions: [
      { label: "Book 1:1 on 1HourDeveloper ↗", href: "https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3" },
      { label: "Chat on WhatsApp ↗", href: "https://wa.me/919520630066" },
      { label: "Recruiter Briefing Page", path: "/services/hire-fullstack-developer" },
    ]
  }
];

export default function AIAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I am Vishal's AI Assistant. Ask me anything about Vishal Singh's 5+ years of full-stack experience, founder startups (Uniportal, Kumaun Software), enterprise projects (Eureka Forbes, Space To Tech), tech stack, or booking a 1:1 consultation.",
      title: "Vishal AI Assistant • Online",
      actions: []
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-ai-modal", handleOpen);
    return () => window.removeEventListener("open-ai-modal", handleOpen);
  }, []);

  const handleSend = (queryText) => {
    const q = (queryText || input).trim();
    if (!q) return;

    // Add User Message
    const newMessages = [...messages, { sender: "user", text: q }];
    setMessages(newMessages);
    setInput("");

    // AI Semantic Match
    const qLower = q.toLowerCase();
    let bestMatch = KNOWLEDGE_RESPONSES.find((item) =>
      item.keywords.some((kw) => qLower.includes(kw))
    );

    if (!bestMatch) {
      bestMatch = {
        title: "Senior Full Stack Engineering Brief",
        reply: `Vishal Singh is a 5+ YOE Senior Full Stack Engineer specializing in React 18, Next.js 14, Node.js, TypeScript, and AWS. He is the founder of Uniportal.in and Kumaun Software Solutions, and has delivered enterprise platforms for Eureka Forbes and Techugo clients.

Would you like to explore his technical blueprints, founder case studies, or book a 1:1 consultation?`,
        actions: [
          { label: "Explore 28+ Pages Directory", path: "/explore" },
          { label: "Book 1:1 Session ↗", href: "https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3" },
          { label: "WhatsApp Chat ↗", href: "https://wa.me/919520630066" },
        ]
      };
    }

    // Simulate natural AI latency
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: bestMatch.reply,
          title: bestMatch.title,
          actions: bestMatch.actions || []
        }
      ]);
    }, 350);
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const quickPrompts = [
    "🚀 What startups did Vishal found?",
    "🏢 What did Vishal build for Eureka Forbes?",
    "⚡ What is Vishal's core tech stack?",
    "📍 Where is Vishal based & available?",
    "🎓 What is Vishal's MCA status?",
    "💼 How can I book or hire Vishal?"
  ];

  return (
    <>
      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 sm:bottom-6 sm:right-[88px] z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-2xl shadow-purple-600/40 hover:shadow-purple-500/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 group backdrop-blur-md whitespace-nowrap"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          <HiSparkles className="text-base text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span className="tracking-wide">Ask AI About Vishal</span>
        <span className="hidden md:inline-block px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-mono">
          GEO
        </span>
      </button>

      {/* AI Modal Drawer / Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-0 sm:p-6 pointer-events-none">
          {/* Backdrop on mobile */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden pointer-events-auto"
          />

          {/* Modal Container */}
          <div className="w-full sm:w-[440px] max-h-[85vh] h-[640px] bg-[#090d18] border border-purple-500/30 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-purple-950/60 flex flex-col overflow-hidden pointer-events-auto relative animate-in slide-in-from-bottom duration-300">
            
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-white/[0.08] bg-white/[0.02] backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px]">
                  <div className="w-full h-full bg-[#090d18] rounded-[10px] flex items-center justify-center text-purple-400 text-base">
                    <FaRobot />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-sm text-white">
                      Vishal AI Copilot
                    </h3>
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Grounded in 25+ verified blueprints & case studies
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close AI Assistant"
              >
                <FiX className="text-base" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2.5 border-b border-white/[0.06] bg-[#070a12]/80 flex gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-purple-500/20 border border-white/[0.08] hover:border-purple-500/30 text-slate-300 hover:text-white whitespace-nowrap transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
              {messages.map((msg, idx) => {
                const isAI = msg.sender === "ai";
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isAI ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl p-3.5 leading-relaxed ${
                        isAI
                          ? "bg-white/[0.04] border border-white/10 text-slate-200"
                          : "bg-purple-600 text-white rounded-br-none shadow-md shadow-purple-600/20"
                      }`}
                    >
                      {isAI && msg.title && (
                        <div className="flex items-center justify-between gap-2 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider mb-1.5 pb-1 border-b border-white/[0.06]">
                          <span>{msg.title}</span>
                          <button
                            onClick={() => handleCopy(msg.text, idx)}
                            className="text-slate-400 hover:text-white"
                            title="Copy response"
                          >
                            {copiedIndex === idx ? (
                              <FiCheck className="text-emerald-400" />
                            ) : (
                              <FiCopy />
                            )}
                          </button>
                        </div>
                      )}

                      <div className="whitespace-pre-line text-xs space-y-2">
                        {msg.text}
                      </div>

                      {/* Action Links */}
                      {isAI && msg.actions && msg.actions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-white/[0.08]">
                          {msg.actions.map((act, aIdx) => {
                            if (act.path) {
                              return (
                                <Link
                                  key={aIdx}
                                  to={act.path}
                                  onClick={() => setIsOpen(false)}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 hover:text-white text-[11px] font-semibold transition-all"
                                >
                                  <span>{act.label}</span>
                                  <FiArrowUpRight className="text-xs" />
                                </Link>
                              );
                            }
                            return (
                              <a
                                key={aIdx}
                                href={act.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 hover:text-white text-[11px] font-semibold transition-all"
                              >
                                <span>{act.label}</span>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 border-t border-white/[0.08] bg-[#070a12]/90">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, stack, hiring..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-purple-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 text-white flex items-center justify-center transition-all shadow-md shadow-purple-600/30 shrink-0"
                  aria-label="Send message"
                >
                  <FiSend className="text-xs" />
                </button>
              </form>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2 px-1">
                <span>AI Grounded • Zero Hallucinations</span>
                <Link
                  to="/explore"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-400 text-purple-300"
                >
                  Explore All 28 Pages →
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
