import type { Metadata } from "next";
import TerminalWindow from "@/components/TerminalWindow";
import CommandLine from "@/components/CommandLine";
import LinkButton from "@/components/LinkButton";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects - Adrian Custodio",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <TerminalWindow title="projects/">
        <CommandLine command="ls -la projects/" />
        {projects.length === 0 ? (
          <p className="text-sm leading-relaxed text-muted">
            No projects published here yet. Write-ups are being migrated in
            one at a time. Check back soon.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.slug}
                className="flex h-full flex-col rounded-lg border-2 border-border p-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_24px_rgba(74,222,128,0.15)]"
              >
                <p className="font-semibold text-foreground">{project.name}</p>
                <p className="mt-1 text-sm text-muted">{project.summary}</p>
                {project.deployment && (
                  <p className="mt-2 text-sm text-muted">{project.deployment}</p>
                )}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border bg-background px-2 py-0.5 text-xs text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-1 flex-wrap items-end gap-3">
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-accent bg-accent px-3 py-1.5 text-sm font-medium text-background transition-all duration-150 hover:shadow-[0_0_16px_rgba(74,222,128,0.35)]"
                    >
                      view live
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-accent px-3 py-1.5 text-sm font-medium text-accent transition-all duration-150 hover:bg-accent hover:text-background hover:shadow-[0_0_16px_rgba(74,222,128,0.35)]"
                    >
                      view on github
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <LinkButton href="/">back home</LinkButton>
        </div>
      </TerminalWindow>
    </div>
  );
}
