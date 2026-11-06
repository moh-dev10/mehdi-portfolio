"use client";

import { useState, useEffect } from "react";

const mobileLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Case Study", href: "#case" },
  { name: "Education", href: "#education" },
  { name: "Network", href: "#connect" },
  { name: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-[40px] flex-col items-center justify-center gap-[5px] rounded-[10px] border border-border bg-surface lg:hidden transition-colors hover:border-olive"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span
          className={`h-[1.5px] w-[18px] rounded bg-foreground transition-all duration-200 ${
            isOpen ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-[18px] rounded bg-foreground transition-all duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-[18px] rounded bg-foreground transition-all duration-200 ${
            isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-[68px] z-30 bg-black/75 backdrop-blur-xs lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[74px] right-4 left-4 z-40 rounded-[14px] border border-border-strong bg-surface p-3 shadow-2xl transition-all duration-200 lg:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {mobileLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-[8px] px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 block rounded-[8px] border border-olive/30 bg-surface-2 px-4 py-2.5 text-center text-sm font-semibold text-olive transition-colors hover:border-olive"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}