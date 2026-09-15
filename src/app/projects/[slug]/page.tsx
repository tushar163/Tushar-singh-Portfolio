import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Tushar Singh`,
      description: project.summary,
      type: "article",
      url: `https://tushar-singh.dev/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: "Tushar Singh",
      url: "https://tushar-singh.dev",
    },
    dateCreated: project.year,
    keywords: project.stack.join(", "),
    about: {
      "@type": "Thing",
      name: project.category,
    },
    url: `https://tushar-singh.dev/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-8 lg:px-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          ← Back to all projects
        </Link>

        <article className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag">{project.category}</span>
            <span className="tag">{project.year}</span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="tag-link tag"
              >
                Live Project →
              </a>
            )}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>

          {(project.mediaType === "video" || project.mediaType === "visual") &&
            project.mediaSrc && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)]">
                {project.mediaType === "video" ? (
                  <video
                    className="h-auto w-full"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={project.mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.mediaSrc}
                    alt={`${project.title} project screenshot`}
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover"
                  />
                )}
              </div>
            )}

          <div className="mt-10 grid gap-6">
            <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                My Role
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {project.role}
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Problem
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {project.problem}
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                What I Built
              </h2>
              <ul className="mt-3 grid gap-3">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                    <span className="text-base leading-7 text-[var(--muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Impact
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {project.impact}
              </p>
            </section>
          </div>

          {project.liveUrl && (
            <div className="mt-10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Visit Live Project
              </a>
            </div>
          )}
        </article>
      </main>
    </>
  );
}
