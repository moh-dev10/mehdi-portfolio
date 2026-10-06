"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex size-[42px] flex-col items-center justify-center gap-[5px] rounded-[11px] border border-border md:hidden"
      aria-label="Toggle navigation"
    >
      <span className="h-[1.8px] w-[18px] rounded bg-foreground" />
      <span className="h-[1.8px] w-[18px] rounded bg-foreground" />
      <span className="h-[1.8px] w-[18px] rounded bg-foreground" />
    </button>

 {/* Mobile Menu */}
<div
  className={`absolute top-[76px] right-6 left-6 rounded-[18px] border border-border bg-background-soft p-3 shadow-[var(--shadow)] transition-all duration-300 ${
    isOpen
      ? "translate-y-0 opacity-100"
      : "-translate-y-3 pointer-events-none opacity-0"
  }`}
>
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      onClick={() => setIsOpen(false)}
      className="block rounded-[10px] px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
    >
      {link.name}
    </a>
  ))}

  <a
    href="#contact"
    onClick={() => setIsOpen(false)}
    className="mt-2 block rounded-[10px] border border-sky/30 bg-sky/10 px-4 py-3 text-center text-sm font-semibold text-sky"
  >
    Hire Me
  </a>
</div>

  </>
);
}