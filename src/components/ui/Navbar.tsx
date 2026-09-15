"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:px-8 lg:px-10">
      <nav
        className="flex w-full max-w-7xl items-center justify-between rounded-full border border-[var(--line)] px-5 py-2.5 sm:px-8 backdrop-blur-xl transition-all duration-200"
        style={{
          background: scrolled
            ? "var(--panel-strong)"
            : "var(--panel)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(43,14,16,0.16)"
            : "0 12px 40px rgba(43,14,16,0.10)",
        }}
      >
        <a
          href="#home"
          className="flex items-center gap-2.5"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-xs font-bold text-[var(--foreground)]"
            style={{
              background:
                "linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, #7a0f22, #b3122f) border-box",
              border: "2px solid transparent",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            TS
          </span>
          <span className="font-display text-lg font-semibold text-[var(--foreground)]">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)]"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[var(--accent)] transition-all duration-150 group-hover:w-4/5" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-xs font-semibold text-[var(--luxe-trim)] lg:flex">
            <span className="h-2 w-2 rounded-full bg-[var(--luxe-trim)] pulse-dot" />
            Open to roles
          </span>
          <a
            href="/resume"
            className="btn-primary !min-h-[2.25rem] !px-4 !py-1.5 !text-xs"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
