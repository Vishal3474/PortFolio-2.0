import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";

export default function FlowingMenu({
  items = [],
  speed = 12,
  textColor = "#ffffff",
  bgColor = "transparent",
  marqueeBgColor = "#ffffff",
  marqueeTextColor = "#08080c",
  borderColor = "rgba(255, 255, 255, 0.08)",
}) {
  return (
    <div className="flowing-menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="flowing-menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  link = "#",
  text,
  subtitle,
  badge,
  icon: Icon,
  iconColor,
  badgeColor,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.55, ease: "power3.out" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector(".flowing-marquee__part");
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;

      const needed = Math.ceil(viewportWidth / (contentWidth || 320)) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector(".flowing-marquee__part");
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 50);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <div className="flowing-menu__item" ref={itemRef} style={{ borderColor }}>
      <a
        className="flowing-menu__item-link"
        href={link}
        onClick={(e) => {
          if (link && link.startsWith("#")) {
            e.preventDefault();
            const targetId = link.slice(1);
            const el = document.getElementById(targetId) || document.getElementsByName(targetId)[0];
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {/* Left Column: Icon + Title */}
        <div className="flex items-center gap-4 min-w-[280px]">
          {Icon && (
            <span className={`text-2xl shrink-0 ${iconColor || "text-slate-300"}`}>
              <Icon />
            </span>
          )}
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {text}
          </span>
        </div>

        {/* Middle: Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-md hidden md:block">
            {subtitle}
          </p>
        )}

        {/* Right: Badge */}
        {badge && (
          <span
            className={`text-[10px] sm:text-[11px] font-mono tracking-widest uppercase shrink-0 font-semibold ${
              badgeColor || "text-purple-400"
            }`}
          >
            {badge}
          </span>
        )}
      </a>

      {/* Marquee Reveal Banner on Hover */}
      <div
        className="flowing-marquee"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="flowing-marquee__inner-wrap">
          <div className="flowing-marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div
                className="flowing-marquee__part"
                key={idx}
                style={{ color: marqueeTextColor }}
              >
                <span>{text}</span>
                <div
                  className="flowing-marquee__img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
