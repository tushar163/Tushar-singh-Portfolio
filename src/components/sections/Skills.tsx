import { skillGroups } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionIntro } from "@/components/ui/SectionIntro";

const techStackTable = [
  { category: "Frontend", tools: "React.js, Next.js, Tailwind CSS, TypeScript" },
  { category: "Backend", tools: "Node.js, Express.js, REST APIs, JWT Auth" },
  { category: "Database", tools: "MongoDB, PostgreSQL, MySQL, Prisma ORM" },
  { category: "Tools & DevOps", tools: "Git, Vercel, Razorpay, OAuth, SEO" },
];

export function Skills() {
  return (
    <MotionSection id="skills" className="space-y-10">
      <SectionIntro
        eyebrow="Skills"
        title="Full Stack Developer Skills — React, Next.js, Node.js"
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

      <div className="panel overflow-hidden">
        <div className="border-b border-[var(--line)] px-6 py-4">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Tech Stack at a Glance
          </h3>
        </div>
        <div className="divide-y divide-[var(--line)]">
          {techStackTable.map((row) => (
            <div
              key={row.category}
              className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="w-32 flex-none text-sm font-semibold text-[var(--accent)]">
                {row.category}
              </span>
              <span className="text-sm leading-6 text-[var(--muted)]">
                {row.tools}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
