"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Briefcase, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: `Thanks ${name.trim()}! Your message has been queued — I'll get back to you within 24 hours.`,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setStatus(null);
    }, 6000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="mono text-xs font-medium uppercase tracking-[0.14em] text-sky">
            07 — Contact
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Let&apos;s talk data.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Whether it&apos;s an internship, a student collaboration, or a dataset you want a second pair of eyes on — I read everything.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mono block text-xs font-medium uppercase tracking-wider text-muted-2"
                >
                  Your name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-all duration-200 placeholder:text-muted-2 focus:border-sky/60 focus:bg-sky/5 focus:ring-2 focus:ring-sky/20 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mono block text-xs font-medium uppercase tracking-wider text-muted-2"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-all duration-200 placeholder:text-muted-2 focus:border-sky/60 focus:bg-sky/5 focus:ring-2 focus:ring-sky/20 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mono block text-xs font-medium uppercase tracking-wider text-muted-2"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Internship opportunity, collaboration, question…"
                className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-all duration-200 placeholder:text-muted-2 focus:border-sky/60 focus:bg-sky/5 focus:ring-2 focus:ring-sky/20 focus:outline-hidden"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mono block text-xs font-medium uppercase tracking-wider text-muted-2"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you have in mind…"
                className="mt-2 w-full resize-y rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground transition-all duration-200 placeholder:text-muted-2 focus:border-sky/60 focus:bg-sky/5 focus:ring-2 focus:ring-sky/20 focus:outline-hidden"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-sky py-3.5 text-sm font-semibold text-[#04121a] shadow-[0_12px_28px_-10px_rgba(56,189,248,0.85)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(56,189,248,1)]"
              style={{ background: "var(--gradient)" }}
            >
              Send message
              <Send size={15} />
            </button>

            {status && (
              <div
                className={`mt-4 flex items-center gap-3 rounded-xl border p-4 text-xs font-medium ${
                  status.type === "success"
                    ? "border-mint/30 bg-mint/10 text-mint"
                    : "border-pink/30 bg-pink/10 text-pink"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={16} className="shrink-0" />
                ) : (
                  <AlertCircle size={16} className="shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}
          </form>

          {/* Direct Details Card */}
          <div className="flex flex-col justify-between rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8">
            <div>
              <h3 className="text-lg font-bold text-foreground">Direct contact</h3>
              <p className="mt-1 text-sm text-muted">
                Fast responses for academic and industry inquiries.
              </p>

              <div className="mt-6 divide-y divide-border">
                <div className="flex items-center gap-4 py-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-sky/20 bg-sky/10 text-sky">
                    <Mail size={18} />
                  </span>
                  <div>
                    <span className="mono block text-[11px] uppercase tracking-wider text-muted-2">
                      Email
                    </span>
                    <a
                      href="mailto:mehdi.datasci@outlook.com"
                      className="text-sm font-medium text-foreground transition-colors hover:text-sky"
                    >
                      mehdi.datasci@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-violet/20 bg-violet/10 text-violet">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className="mono block text-[11px] uppercase tracking-wider text-muted-2">
                      Location
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Algiers, Algeria
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-mint/20 bg-mint/10 text-mint">
                    <Clock size={18} />
                  </span>
                  <div>
                    <span className="mono block text-[11px] uppercase tracking-wider text-muted-2">
                      Response time
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-amber/20 bg-amber/10 text-amber">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <span className="mono block text-[11px] uppercase tracking-wider text-muted-2">
                      Focus
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Data Science internships
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-mint/20 bg-mint/5 p-4 text-xs leading-relaxed text-[#9fe8c9]">
              <span className="mt-1 size-2 shrink-0 animate-pulse rounded-full bg-mint shadow-[0_0_8px_var(--mint)]" />
              <p>
                Currently available for a <strong>summer internship</strong> or part-time student collaboration — on-site in Algiers or remote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
