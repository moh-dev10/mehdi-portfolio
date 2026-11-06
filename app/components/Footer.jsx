import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border py-8 text-sm text-muted">
      <div className="wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-2">
          © {currentYear} Mehdi — Data Science Student, USTHB Algiers. Built from scratch.
        </p>

        <div className="flex items-center gap-6 text-xs">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-sky"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-sky"
          >
            LinkedIn
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-1 font-medium text-muted transition-colors hover:text-sky"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
