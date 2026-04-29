import { profile, stats } from "@/data/portfolio";

const heroSkills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "OAuth",
  "Stripe",
  "Razorpay",
];

const hiringHighlights = [
  "Built 12+ production applications across e-commerce, CMS, admin panels, and SEO websites.",
  "Comfortable owning frontend, backend APIs, database workflows, deployment, and optimization.",
  "Focused on clean UI, scalable architecture, fast load times, and practical business outcomes.",
];

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] py-16 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--muted)] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] pulse-dot" />
            Available for full-time MERN stack roles
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
            Building scalable web products
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-[var(--muted)] sm:text-2xl">
            {profile.role} / {profile.specialty}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I build fast, responsive, and production-ready web applications that
            help businesses manage products, content, users, orders, payments,
            leads, and internal operations with confidence.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3">
            {hiringHighlights.map((item) => (
              <div key={item} className="hero-proof-row">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View My Work
            </a>
            <a className="btn-secondary" href="/resume">
              Download Resume
            </a>
            <a className="btn-ghost" href={`mailto:${profile.email}`}>
              Hire Me
            </a>
          </div>
        </div>

        <aside className="hero-profile-card">
          <div className="hero-profile-glow" />
          <div className="relative">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  HR Snapshot
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                  Full-stack execution with product instincts.
                </h2>
              </div>
              <div className="hero-initials">TS</div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <p className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                Reach me
              </p>
              <a className="text-sm font-semibold text-[var(--foreground)]" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="text-sm font-semibold text-[var(--foreground)]" href={`tel:${profile.phone.replaceAll(" ", "")}`}>
                {profile.phone}
              </a>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {profile.location}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {heroSkills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
