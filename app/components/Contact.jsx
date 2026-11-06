"use client";

import { useState } from "react";
import { Mail, MapPin, GraduationCap, Send, Copy, Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mehdi.datasci@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { name, email, message } = formData;
    const mailtoSubject = `Portfolio Inquiry from ${name.trim()}`;
    const mailtoBody = `Sender: ${name.trim()} (${email.trim()})\n\nMessage:\n${message.trim()}`;
    const mailtoUrl = `mailto:mehdi.datasci@outlook.com?subject=${encodeURIComponent(
      mailtoSubject
    )}&body=${encodeURIComponent(mailtoBody)}`;

    setFeedback(
      "Opening your default email client to send this message to mehdi.datasci@outlook.com."
    );

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section border-b border-border">
      <div className="wrap">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="max-w-2xl">
            <div className="mono text-xs uppercase tracking-[0.18em] text-olive">
              07 / Contact
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Get in touch.
            </h2>
            <p className="mt-2 text-sm text-muted">
              Available for student internships, academic collaborations, and project discussions.
            </p>
          </div>
        </Reveal>

        {/* Balanced Symmetrical 2-Column Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 items-stretch">
          {/* Direct Details Card */}
          <Reveal delay={40} duration={550}>
            <div className="flex flex-col justify-between rounded-[4px] border border-border bg-surface p-5 sm:p-6 h-full">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-2 mono">
                Direct Channels
              </h3>

              <div className="mt-4 divide-y divide-border">
                {/* Email row with copy button */}
                <div className="flex items-center justify-between gap-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-[4px] border border-border bg-surface-2 text-olive">
                      <Mail size={15} />
                    </span>
                    <div>
                      <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                        Email
                      </span>
                      <a
                        href="mailto:mehdi.datasci@outlook.com"
                        className="text-xs sm:text-sm font-medium text-foreground transition-colors hover:text-olive"
                      >
                        mehdi.datasci@outlook.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted transition-colors hover:border-olive hover:text-foreground cursor-pointer"
                    title="Copy email address"
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
                <div className="flex items-center gap-3 py-3">
                  <span className="grid size-8 place-items-center rounded-[4px] border border-border bg-surface-2 text-olive">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Algiers, Algeria
                    </span>
                  </div>
                </div>

                {/* Affiliation row */}
                <div className="flex items-center gap-3 py-3">
                  <span className="grid size-8 place-items-center rounded-[4px] border border-border bg-surface-2 text-olive">
                    <GraduationCap size={15} />
                  </span>
                  <div>
                    <span className="mono block text-[10px] uppercase tracking-wider text-muted-2">
                      Education
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      USTHB · 2nd-Year Data Science (L2)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-4 rounded-[4px] border border-border bg-surface-2/40 p-3 text-xs text-muted-2 leading-relaxed">
              <span className="font-semibold text-foreground">Student Inquiries: </span>
              Submitting the contact form will generate a pre-addressed email draft in your local mail client.
            </div>
          </div>
          </Reveal>

          {/* Form Card */}
          <Reveal delay={100} duration={550}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col justify-between rounded-[4px] border border-border bg-surface p-5 sm:p-6 h-full"
            >
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mono block text-[11px] font-medium uppercase tracking-wider text-muted-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`mt-1.5 w-full rounded-[4px] border bg-background-soft px-3 py-2 text-xs sm:text-sm text-foreground transition-colors placeholder:text-muted-2 focus:outline-hidden ${
                        errors.name ? "border-red-400/80 focus:border-red-400" : "border-border focus:border-olive"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mono block text-[11px] font-medium uppercase tracking-wider text-muted-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`mt-1.5 w-full rounded-[4px] border bg-background-soft px-3 py-2 text-xs sm:text-sm text-foreground transition-colors placeholder:text-muted-2 focus:outline-hidden ${
                        errors.email ? "border-red-400/80 focus:border-red-400" : "border-border focus:border-olive"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mono block text-[11px] font-medium uppercase tracking-wider text-muted-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Inquiry, question, or project topic…"
                    className={`mt-1.5 w-full resize-y rounded-[4px] border bg-background-soft px-3 py-2 text-xs sm:text-sm text-foreground transition-colors placeholder:text-muted-2 focus:outline-hidden ${
                      errors.message ? "border-red-400/80 focus:border-red-400" : "border-border focus:border-olive"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-olive py-2.5 text-xs sm:text-sm font-semibold text-[#10110F] transition-colors hover:bg-olive-hover cursor-pointer"
                >
                  <span>Draft Email</span>
                  <Send size={13} />
                </button>

                {feedback && (
                  <div className="mt-3 rounded-[4px] border border-olive/30 bg-surface-2 p-2.5 text-xs text-foreground leading-relaxed">
                    {feedback}
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
