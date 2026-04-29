"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      event.currentTarget.reset();
      setState("success");
      return;
    }

    setState("error");
  }

  return (
    <section id="contact" className="grid gap-8 pb-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Ready to build a fast, scalable web product.
        </h2>
        <p className="mt-5 text-base leading-7 text-[var(--muted)]">
          Open to MERN stack roles, freelance builds, admin panel systems,
          e-commerce platforms, and SEO-focused business websites.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-[var(--muted)]">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
          <p>{profile.location}</p>
          <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap">
            <a className="btn-secondary" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn-secondary" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="panel grid gap-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="field-label">
            Name
            <input name="name" required className="field" placeholder="Your name" />
          </label>
          <label className="field-label">
            Email
            <input name="email" type="email" required className="field" placeholder="you@company.com" />
          </label>
        </div>
        <label className="field-label">
          Project Type
          <input name="projectType" className="field" placeholder="Portfolio, admin panel, e-commerce..." />
        </label>
        <label className="field-label">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="field resize-none"
            placeholder="Tell me what you want to build."
          />
        </label>
        <button type="submit" disabled={state === "sending"} className="btn-primary justify-center disabled:opacity-60">
          {state === "sending" ? "Sending..." : "Send Message"}
        </button>
        {state === "success" ? (
          <p className="text-sm text-[var(--success)]">Message received. The API route is working.</p>
        ) : null}
        {state === "error" ? (
          <p className="text-sm text-[var(--danger)]">Something went wrong. Please email Tushar directly.</p>
        ) : null}
      </form>
    </section>
  );
}
