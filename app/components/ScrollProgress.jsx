"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const progress = max > 0 ? (scrolled / max) * 100 : 0;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-100 h-[2px] transition-[width] duration-75 ease-linear pointer-events-none"
      style={{
        width: `${scrollWidth}%`,
        background: "var(--gradient)",
        boxShadow: "0 0 16px rgba(56, 189, 248, 0.7)",
      }}
    />
  );
}
