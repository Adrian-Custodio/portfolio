import type { Project } from "@/data/site";

// Shared card for the home "featured" grid and the /projects page
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="card flex h-full flex-col p-6 sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</span>
        {project.liveHref ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-dim bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> live
          </span>
        ) : (
          <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
            {project.kind}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.name}</h3>
      <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

      {project.deployment && (
        <p className="mt-4 rounded-xl border border-border bg-background/50 p-4 text-sm leading-relaxed text-muted">
          <span className="mb-1 block font-mono text-[11px] tracking-wider text-subtle uppercase">deployment</span>
          {project.deployment}
        </p>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-foreground/80">
            {tech}
          </li>
        ))}
      </ul>

      {/* links pinned to the bottom so cards line up */}
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.liveHref && (
          <a
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition hover:bg-accent-strong"
          >
            View live <span aria-hidden>↗</span>
          </a>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm text-foreground transition hover:border-accent hover:text-accent"
          >
            <GitHubIcon /> Source
          </a>
        )}
      </div>
    </article>
  );
}

export function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
