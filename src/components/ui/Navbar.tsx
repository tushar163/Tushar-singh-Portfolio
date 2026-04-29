import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="font-display text-lg font-semibold text-[var(--foreground)]">
          {profile.name}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/resume"
          className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition hover:-translate-y-0.5"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
