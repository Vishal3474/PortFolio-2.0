import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import {
  FiPhoneCall,
  FiMail,
  FiCalendar,
  FiX,
  FiBell,
  FiMessageSquare,
  FiArrowUpRight,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const bookingUrl = "https://app.1hourdeveloper.com/browseDeveloper/bookDeveloper?d=Vishal+V-3";

const activities = [
  {
    id: 1,
    title: "1-on-1 Consultation Open",
    description: "Book an instant developer session on 1HourDeveloper.",
    tag: "Booking Available",
    tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    actionText: "Book Now",
    actionLink: bookingUrl,
  },
  {
    id: 2,
    title: "Full Stack Availability",
    description: "Open to Senior Full Stack, MERN, and Next.js opportunities.",
    tag: "Immediate Joiner",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    actionText: "Chat on WhatsApp",
    actionLink: "https://wa.me/919520630066",
  },
  {
    id: 3,
    title: "Eureka Forbes Enterprise Delivery",
    description: "Shipped enterprise B2B Bulk Pricing & QMS workflows.",
    tag: "Recent Milestone",
    tagColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    actionText: "View Projects",
    actionLink: "#projects",
  },
  {
    id: 4,
    title: "MCA Data Science @ KL University",
    description: "Actively pursuing Data Science, ML & Advanced Algorithms.",
    tag: "Academic Elevation",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    actionText: "Check Education",
    actionLink: "#education",
  },
];

const FloatingWidgets = () => {
  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const [showActivityToast, setShowActivityToast] = useState(true);
  const [activityIndex, setActivityIndex] = useState(0);
  const [showActivityModal, setShowActivityModal] = useState(false);

  // Rotate activity notice every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentActivity = activities[activityIndex];

  return (
    <>
      {/* 1. FLOATING ACTIVITY POPUP TOAST (BOTTOM LEFT) */}
      {showActivityToast && (
        <div className="fixed bottom-6 left-6 z-40 max-w-sm w-[90%] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="glass-card rounded-2xl p-4 border border-purple-500/30 shadow-2xl shadow-purple-950/40 relative overflow-hidden backdrop-blur-xl">
            {/* Ambient Pulse Dot */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"></div>

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm shrink-0 mt-0.5 animate-pulse">
                  <FiActivity />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${currentActivity.tagColor}`}>
                      {currentActivity.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                    {currentActivity.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {currentActivity.description}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowActivityToast(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors shrink-0"
                aria-label="Dismiss notification"
              >
                <FiX className="text-sm" />
              </button>
            </div>

            {/* Bottom Action Row */}
            <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <button
                onClick={() => setShowActivityModal(true)}
                className="text-slate-400 hover:text-purple-300 font-medium transition-colors flex items-center gap-1"
              >
                <FiBell className="text-xs" />
                <span>All Activities ({activities.length})</span>
              </button>

              <a
                href={currentActivity.actionLink}
                target={currentActivity.actionLink.startsWith("#") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
              >
                <span>{currentActivity.actionText}</span>
                <FiArrowUpRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. ALL ACTIVITIES MODAL POPUP */}
      {showActivityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg">
                  <FiActivity />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Live Activity Center</h3>
                  <p className="text-xs text-slate-400">Current availability, bookings & milestones</p>
                </div>
              </div>
              <button
                onClick={() => setShowActivityModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${act.tagColor}`}>
                      {act.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white">{act.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{act.description}</p>
                  
                  <div className="mt-3 pt-2 border-t border-white/[0.05] flex justify-end">
                    <a
                      href={act.actionLink}
                      target={act.actionLink.startsWith("#") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      onClick={() => setShowActivityModal(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300"
                    >
                      <span>{act.actionText}</span>
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowActivityModal(false)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. FLOATING CONTACT SPEED DIAL (BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Expanded Speed Dial Menu */}
        {speedDialOpen && (
          <div className="flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-200">
            
            {/* 0. Ask AI Copilot */}
            <button
              onClick={() => {
                setSpeedDialOpen(false);
                window.dispatchEvent(new CustomEvent("open-ai-modal"));
              }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-purple-600/40 hover:scale-105 active:scale-95 transition-all group border border-white/20"
            >
              <span>Ask AI Copilot</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm text-amber-300">
                <HiSparkles />
              </div>
            </button>

            {/* 1. Book Developer Button */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 text-white font-bold text-xs shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all group border border-white/20"
            >
              <span>Book 1:1 Call (1HourDeveloper)</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
                <FiCalendar />
              </div>
            </a>

            {/* 2. WhatsApp Button */}
            <a
              href="https://wa.me/919520630066"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all group border border-white/20"
            >
              <span>WhatsApp Direct</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
                <FaWhatsapp />
              </div>
            </a>

            {/* 3. Direct Phone Call Button */}
            <a
              href="tel:+919520630066"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all group border border-white/20"
            >
              <span>Call (+91 9520630066)</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
                <FiPhoneCall />
              </div>
            </a>

            {/* 4. Email Button */}
            <a
              href="mailto:vishalkumar3474@gmail.com"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs shadow-xl border border-white/10 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>Email Vishal</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm text-purple-400">
                <FiMail />
              </div>
            </a>

            {/* 5. LinkedIn Button */}
            <a
              href="https://linkedin.com/in/meetwithvishal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs shadow-xl shadow-blue-700/30 hover:scale-105 active:scale-95 transition-all group border border-white/20"
            >
              <span>LinkedIn Profile</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
                <FaLinkedin />
              </div>
            </a>

          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setSpeedDialOpen(!speedDialOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 focus:outline-none relative group ${
            speedDialOpen
              ? "bg-rose-600 hover:bg-rose-500 rotate-90 scale-105"
              : "bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:scale-110 shadow-purple-600/50"
          }`}
          aria-label="Toggle contact menu"
        >
          {/* Subtle Outer Pulse Ring when closed */}
          {!speedDialOpen && (
            <span className="absolute -inset-1 rounded-full bg-purple-500 opacity-40 animate-ping pointer-events-none"></span>
          )}

          {speedDialOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <div className="relative">
              <FiMessageSquare className="text-2xl" />
              {/* Green online badge */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-[#080c14] rounded-full"></span>
            </div>
          )}
        </button>

      </div>
    </>
  );
};

export default FloatingWidgets;
