"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type MediaType,
  type ProjectCategory,
} from "@/data/portfolio";
import { SectionIntro } from "@/components/ui/SectionIntro";

function ProjectMedia({
  type,
  src,
  title,
}: {
  type: MediaType;
  src?: string;
  title: string;
}) {
  if (type === "video" && src) {
    return (
      <div className="project-media">
        <video
          className="h-full min-h-72 w-full object-cover"
          controls
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  if ((type === "visual" || type === "image") && src) {
    return (
      <div className="project-media p-4">
        <div className="relative min-h-72 overflow-hidden rounded-2xl border border-[var(--line)]">
          <Image
            src={src}
            alt={`${title} project media`}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="project-media grid place-items-center p-6">
      <div className="w-full max-w-sm rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
          <span>Media</span>
          <span>{type === "video" ? "Demo slot" : "Image slot"}</span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {title}
        </h3>
        <div className="mt-6 space-y-3">
          <div className="skeleton h-3 w-full rounded-full" />
          <div className="skeleton h-3 w-10/12 rounded-full" />
          <div className="skeleton h-3 w-7/12 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedTitle, setSelectedTitle] = useState(projects[0]?.title ?? "");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const selectedProject =
    filteredProjects.find((project) => project.title === selectedTitle) ??
    filteredProjects[0];

  function handleCategoryChange(category: ProjectCategory) {
    setActiveCategory(category);

    const nextProjects =
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category);

    setSelectedTitle(nextProjects[0]?.title ?? "");
  }

  return (
    <section id="projects" className="space-y-10">
      <SectionIntro
        eyebrow="Projects"
        title="Project list first, details on demand."
        description="Browse the completed project list, select one, and review the focused case details. Live projects open directly, while non-live projects show supporting image or video media."
      />

      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`filter-tab ${activeCategory === category ? "filter-tab-active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="panel p-4">
          <div className="mb-4 flex items-center justify-between gap-3 px-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Project List
            </p>
            <span className="tag">{filteredProjects.length} items</span>
          </div>

          <div className="grid gap-3">
            {filteredProjects.map((project, index) => {
              const isSelected = selectedProject?.title === project.title;

              return (
                <button
                  type="button"
                  key={project.title}
                  onClick={() => setSelectedTitle(project.title)}
                  className={`project-list-button ${
                    isSelected ? "project-list-button-active" : ""
                  }`}
                >
                  <span className="project-list-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block truncate font-semibold text-[var(--foreground)]">
                      {project.title}
                    </span>
                    <span className="mt-2 flex flex-wrap gap-2">
                      <span className="project-list-meta">{project.category}</span>
                      <span className="project-list-meta">
                        {project.liveUrl ? "Live project" : "Media preview"}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-h-[34rem]">
          <AnimatePresence mode="wait">
            {selectedProject ? (
              <motion.article
                key={selectedProject.title}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28 }}
                className="panel project-detail-shell overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="tag">{selectedProject.category}</span>
                    <span className="tag">{selectedProject.year}</span>
                    <span className="tag">
                      {selectedProject.liveUrl
                        ? "Live link available"
                        : "Visual proof"}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    {selectedProject.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {selectedProject.outcomes.map((outcome) => (
                      <div key={outcome} className="outcome-row">
                        <span />
                        <p>{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProject.liveUrl ? (
                  <div className="live-project-panel">
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
                        Live Project
                      </p>
                      <h4 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                        This project has a public live link, so the portfolio
                        prioritizes the deployed product over static media.
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        Recruiters and clients can open the live application to
                        review responsiveness, user flow, and production quality.
                      </p>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary mt-6"
                      >
                        Visit Live Project
                      </a>
                    </div>
                  </div>
                ) : (
                  <ProjectMedia
                    type={selectedProject.mediaType}
                    src={selectedProject.mediaSrc}
                    title={selectedProject.title}
                  />
                )}
              </motion.article>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
