import { ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-[10px]">
      <div className="wrap flex h-[68px] w-full  items-center justify-between">

        {/* Brand */}
        <a href="#hero" className="flex items-center gap-[11px]">
          <span
            className="grid size-[34px] place-items-center rounded-[10px] font-extrabold text-[0.95rem] text-[#04121a] shadow-[0_8px_24px_-10px_rgba(56,189,248,0.9)]"
            style={{ background: "var(--gradient)" }}
          >
            M
          </span>

          <span className="text-[1.05rem] font-bold tracking-[-0.02em]">
            Mehdi<span className="text-sky">.</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-[6px] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-[9px] px-[14px] py-2 text-[0.88rem] font-medium text-muted transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}

        </nav>

          <div className="hidden md:flex md:items-center md:gap-2  ml-2 rounded-3xl border border-sky/30 bg-white px-[14px] py-2 
                text-[0.88rem] font-medium text-black hover:text-sky transition-colors duration-200 hover:border-sky/55 hover:bg-sky/18 cursor-pointer">
              <a
                href="#contact"
                
              >
                Hire Me
              </a>

              <ArrowRight size={18} className="-rotate-45"/>

          </div>

        {/* Mobile button */}
        <MobileNav/>

      </div>
    </header>
  );
}