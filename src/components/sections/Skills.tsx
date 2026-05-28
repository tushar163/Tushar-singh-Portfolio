import { skillGroups } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Skills() {
  return (
    <MotionSection id="skills" className="space-y-10">
      <SectionIntro
        eyebrow="Skills"
        title="A production stack shaped by real delivery."
        description="Grouped by how product work actually ships: UI, APIs, databases, integrations, and deployment. Recruiters can scan the stack quickly without digging through long paragraphs."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel p-6">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {group.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
