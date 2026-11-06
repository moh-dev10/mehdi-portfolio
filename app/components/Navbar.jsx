"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Case Study", href: "#case" },
  { name: "Education", href: "#education" },
  { name: "Network", href: "#connect" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["about", "skills", "projects", "case", "education", "connect", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-[11px] group">
          <span className="grid size-[34px] place-items-center rounded-[10px] border border-border-strong bg-surface text-[0.95rem] font-semibold text-olive transition-colors group-hover:border-olive">
            M
          </span>

          <span className="text-[1.05rem] font-bold tracking-tight text-foreground">
            Mehdi<span className="text-olive">.</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-[8px] px-3.5 py-1.5 text-[0.88rem] font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute right-3.5 bottom-0 left-3.5 h-[1.5px] bg-olive" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-2 text-[0.88rem] font-medium text-foreground transition-all hover:border-olive hover:text-olive"
          >
            <span>Contact</span>
            <ArrowRight size={15} className="-rotate-45" />
          </a>
        </div>

        {/* Mobile menu */}
        <MobileNav />
      </div>
    </header>
  );
}