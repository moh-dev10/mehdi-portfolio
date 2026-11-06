"use client";

import { useState } from "react";
import { Mail, MapPin, GraduationCap, Send, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState(null); // { status: 'info' | 'error', text: string }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mehdi.datasci@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        status: "error",
        text: "Please provide your name, email, and message before sending.",
      });
      return;
    }

    // Build authentic mailto fallback
    const mailtoSubject = subject.trim() || `Portfolio Inquiry from ${name.trim()}`;
    const mailtoBody = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    const mailtoUrl = `mailto:mehdi.datasci@outlook.com?subject=${encodeURIComponent(
      mailtoSubject
    )}&body=${encodeURIComponent(mailtoBody)}`;

    setFeedback({
      status: "info",
      text: "Opening your default email client to send this message to mehdi.datasci@outlook.com. You can also email directly using the address on the right.",
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section border-b border-border">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
            07 / Contact
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Get in touch.
          </h2>

          <p className="mt-3 text-sm text-muted">
            Open to student internships, academic collaborations, and project discussions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[4px] border border-border bg-surface p-6 sm:p-8"
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
                  className="mt-2 w-full rounded-[4px] border border-border bg-background-soft px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-2 focus:border-olive focus:outline-hidden"
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
                  className="mt-2 w-full rounded-[4px] border border-border bg-background-soft px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-2 focus:border-olive focus:outline-hidden"
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
                placeholder="Internship opportunity, academic collaboration, question…"
                className="mt-2 w-full rounded-[4px] border border-border bg-background-soft px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-2 focus:border-olive focus:outline-hidden"
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
                placeholder="Write your message here…"
                className="mt-2 w-full resize-y rounded-[4px] border border-border bg-background-soft px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-2 focus:border-olive focus:outline-hidden"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-[4px] bg-olive py-3 text-sm font-semibold text-[#10110F] transition-colors hover:bg-olive-hover cursor-pointer"
            >
              Compose & Send Email
              <Send size={14} />
            </button>

            {feedback && (
              <div
                className={`mt-4 rounded-[4px] border p-3.5 text-xs leading-relaxed ${
                  feedback.status === "info"
                    ? "border-olive/30 bg-surface-2 text-foreground"
                    : "border-border-strong bg-background-soft text-[#F2F1EA]"
                }`}
              >
                {feedback.text}
              </div>
            )}
          </form>

          {/* Direct Details Card */}
          <div className="flex flex-col justify-between rounded-[4px] border border-border bg-surface p-6 sm:p-8">
            <div>
              <h3 className="text-base font-semibold text-foreground">Direct Contact</h3>
              <p className="mt-1 text-xs text-muted">
                Student contact channel for academic and professional inquiries.
              </p>

              <div className="mt-6 divide-y divide-border">
                {/* Email row with copy button */}
                <div className="flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3.5">
                    <span className="grid size-9 place-items-center rounded-[4px] border border-border bg-surface-2 text-olive">
                      <Mail size={16} />
                    </span>
                    <div>
                      <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                        Email
                      </span>
                      <a
                        href="mailto:mehdi.datasci@outlook.com"
                        className="text-sm font-medium text-foreground hover:text-olive transition-colors"
                      >
                        mehdi.datasci@outlook.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 rounded-[4px] border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted hover:border-olive hover:text-foreground transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-olive" />
                        <span className="text-olive font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location row */}
                <div className="flex items-center gap-3.5 py-4">
                  <span className="grid size-9 place-items-center rounded-[4px] border border-border bg-surface-2 text-olive">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                      Location
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Algiers, Algeria
                    </span>
                  </div>
                </div>

                {/* Affiliation row */}
                <div className="flex items-center gap-3.5 py-4">
                  <span className="grid size-9 place-items-center rounded-[4px] border border-border bg-surface-2 text-olive">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                      University
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      USTHB · 2nd-Year Data Science
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="mt-8 rounded-[4px] border border-border bg-surface-2/40 p-4 text-xs leading-relaxed text-muted">
              <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                <span className="size-1.5 rounded-full bg-olive" />
                Internship & Collaboration Status
              </div>
              <p>
                Currently seeking student internship opportunities and academic collaborations for upcoming academic terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
