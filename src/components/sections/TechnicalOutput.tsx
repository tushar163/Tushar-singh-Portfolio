import { folderStructure, seoChecklist } from "@/data/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function TechnicalOutput() {
  return (
    <MotionSection className="space-y-10">
      <SectionIntro
        eyebrow="Technical Output"
        title="A portfolio structure that is easy to maintain and extend."
        description="The implementation separates static server-rendered content from interactive client components, which keeps the page performant while still feeling premium."
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Suggested folder structure
            </h3>
            <span className="tag">Next.js App Router</span>
          </div>
          <pre className="mt-5 overflow-x-auto rounded-2xl border border-[var(--line)] bg-[var(--code-bg)] p-5 text-sm leading-7 text-[var(--code-text)]">
            <code>{folderStructure}</code>
          </pre>
        </div>
        <div className="panel p-6">
          <h3 className="text-xl font-semibold text-[var(--foreground)]">
            SEO and performance best practices
          </h3>
          <div className="mt-5 grid gap-3">
            {seoChecklist.map((item) => (
              <div key={item} className="outcome-row">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
