import type { Metadata } from "next";
import LinkButton from "@/components/LinkButton";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { profile, projects } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects - ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-24">
      <Reveal>
        <SectionHeading index="~/" label="projects" title="Projects">
          Detection labs, forensics tools, and the write-ups behind them. More are being migrated here one at a time.
        </SectionHeading>
      </Reveal>

      {projects.length === 0 ? (
        <div className="card p-10 text-center text-muted">
          No projects published here yet. Check back soon.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-12">
        <LinkButton href="/" arrow={false}>
          <span aria-hidden>&lt;-</span> Back home
        </LinkButton>
      </div>
    </div>
  );
}
