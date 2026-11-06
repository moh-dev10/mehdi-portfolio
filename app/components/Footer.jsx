import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 text-xs text-muted">
      <div className="wrap flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-medium text-foreground">
            Mehdi <span className="text-muted-2 font-normal">· Data Science Student, USTHB Algiers</span>
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-muted-2 sm:justify-start">
            <span>© {currentYear}</span>
            <span>·</span>
            <span>
              Made by{" "}
              <a
                href="https://www.instagram.com/mohdev10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-border-strong underline-offset-2 transition-colors hover:text-olive hover:decoration-olive"
              >
                moh-dev10
              </a>
            </span>
          </div>
        </div>

        {/* Useful Navigation & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href="#about" className="transition-colors hover:text-olive">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-olive">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-olive">
            Projects
          </a>
          <a href="#case" className="transition-colors hover:text-olive">
            Case Study
          </a>
          <a href="#education" className="transition-colors hover:text-olive">
            Education
          </a>
          <a href="#contact" className="transition-colors hover:text-olive">
            Contact
          </a>

          <span className="text-border-strong hidden sm:inline">|</span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-olive"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-olive"
          >
            LinkedIn
          </a>

          <a
            href="#hero"
            className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-olive"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
