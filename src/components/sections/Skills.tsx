import { skillGroups } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function Skills() {
  return (
    <MotionSection id="skills" className="space-y-10">
      <SectionIntro
        eyebrow="Skills"
        title="A balanced stack for modern web products."
        description="The stack is grouped by how work actually ships: interface, API, data, and deployment. This keeps the section easy for recruiters to scan and useful for clients evaluating delivery capability."
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
