import React, { useRef } from "react";

export default function MagicBentoCard({
  children,
  className = "",
  glowColor = "168, 85, 247", // Purple/Indigo
  ...props
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty("--glow-x", `${x.toFixed(1)}%`);
    cardRef.current.style.setProperty("--glow-y", `${y.toFixed(1)}%`);
    cardRef.current.style.setProperty("--glow-intensity", "1");
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--glow-intensity", "0");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magic-bento-card magic-bento-card--border-glow relative overflow-hidden rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
