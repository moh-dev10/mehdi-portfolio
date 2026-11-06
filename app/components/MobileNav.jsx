"use client";

import { useState, useEffect, useRef } from "react";

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
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex size-[40px] flex-col items-center justify-center gap-[5px] rounded-[4px] border border-border bg-surface lg:hidden transition-colors hover:border-olive cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-[1.5px] w-[18px] bg-foreground transition-all duration-200 ${
            isOpen ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-[18px] bg-foreground transition-all duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-[18px] bg-foreground transition-all duration-200 ${
            isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-30 bg-black/80 backdrop-blur-xs lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-[74px] right-4 left-4 z-40 rounded-[4px] border border-border-strong bg-[#161814] p-3 shadow-2xl transition-all duration-200 lg:hidden ${
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
              onClick={closeMenu}
              className="block rounded-[4px] px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 block rounded-[4px] border border-olive/40 bg-surface px-4 py-2.5 text-center text-sm font-semibold text-olive transition-colors hover:border-olive"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}