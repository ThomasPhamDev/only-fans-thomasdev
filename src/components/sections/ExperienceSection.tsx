"use client";

import { useMemo, useState } from "react";
import { experiences } from "@/data/portfolio";

const ITEMS_PER_PAGE = 7;

const ExperienceSection = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);

  const visibleExperiences = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return experiences.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold">Work Experience</h2>

        <div className="space-y-8">
          {visibleExperiences.map((exp) => (
            <article key={`${exp.company}-${exp.title}-${exp.period}`} className="border-b border-border pb-8 last:border-b-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-[18px] font-semibold leading-snug">{exp.title}</h3>
                <span className="text-[14px] italic text-muted-foreground">{exp.period}</span>
              </div>

              <div className="mt-1 flex flex-col gap-1 text-[14px] text-muted-foreground sm:flex-row sm:items-center sm:gap-2">
                <span>{exp.company}</span>
                {exp.location && <span className="hidden sm:inline">·</span>}
                {exp.location && <span className="italic">{exp.location}</span>}
              </div>

              {exp.project && (
                <p className="mt-3 text-[14px] text-foreground">
                  <span className="font-semibold text-primary">Project:</span>{" "}
                  {exp.project.url ? (
                    <a
                      href={exp.project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline decoration-border underline-offset-4 hover:text-primary"
                    >
                      {exp.project.name}
                    </a>
                  ) : (
                    exp.project.name
                  )}
                </p>
              )}

              <div className="mt-3 flex flex-wrap gap-2 text-[14px]">
                {exp.tech.map((tech) => (
                  <span key={tech} className="border border-border px-2 py-0.5 text-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-[16px]">
                <h4 className="font-semibold">Key Responsibilities</h4>
                {exp.responsibilities.length === 1 && exp.responsibilities[0] === "N/A" ? (
                  <p className="mt-1 text-foreground">N/A</p>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {exp.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-2 text-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4 border-t border-border pt-6">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
              className="text-sm text-foreground hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {page} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              disabled={page === totalPages}
              className="text-sm text-foreground hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
