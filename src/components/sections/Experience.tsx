import { experiences } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Experience() {
  return (
    <MotionSection id="experience" className="space-y-10">
      <SectionIntro
        eyebrow="Experience"
        title="Built through real production work, not tutorial-only projects."
        description="The experience section emphasizes responsibility, ownership, and delivery impact across full-stack product development."
      />
      <div className="grid gap-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.period}`}
            className="panel grid gap-6 p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                {experience.period}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                {experience.role}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{experience.company}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{experience.location}</p>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                {experience.summary}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {experience.highlights.map((highlight) => (
                <div key={highlight} className="impact-card">
                  <span />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
