import { profile, stats } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";

const strengths = [
  "Architected admin systems with RBAC, permission-based rendering, audit logs, and module dashboards.",
  "Engineered e-commerce workflows covering products, inventory, orders, banners, CMS, OAuth, and payments.",
  "Delivered SEO-friendly business websites with responsive UI, lead forms, and performance-focused structure.",
  "Worked across the full SDLC, from requirement understanding and UI implementation to backend APIs and deployment.",
];

export function About() {
  return (
    <MotionSection id="about" className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <article className="about-identity-card">
          <div className="about-avatar">TS</div>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            About me
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Full-stack execution with product-focused thinking.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            {profile.name} / {profile.role} / {profile.experience}
          </p>
        </article>

        <article className="panel p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Why HR should shortlist me
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            I bring practical MERN stack delivery experience across real
            business-critical systems.
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:leading-8">
            I am a full stack web developer with 1.5+ years of hands-on
            production experience building e-commerce platforms, CMS workflows,
            admin panels, dashboards, API integrations, and SEO-friendly
            websites. I care about interfaces that feel polished, backend
            systems that stay maintainable, and features that solve actual
            operational problems.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
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

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div key={strength} className="outcome-row">
                <span />
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </MotionSection>
  );
}
