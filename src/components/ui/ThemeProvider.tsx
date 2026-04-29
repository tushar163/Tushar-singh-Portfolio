"use client";

import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-full">
      {children}
      <button
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] text-lg text-[var(--foreground)] shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur transition hover:-translate-y-0.5"
      >
        {theme === "dark" ? "L" : "D"}
      </button>
    </div>
  );
}
