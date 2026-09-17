import TerminalWindow from "@/components/TerminalWindow";
import CommandLine from "@/components/CommandLine";
import LinkButton from "@/components/LinkButton";
import {
  profile,
  securitySkills,
  developmentSkills,
  professionalSkills,
  certifications,
  experience,
  education,
} from "@/data/site";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-12">
      <section id="top">
        <TerminalWindow title="hero.sh">
          <CommandLine command="whoami" />
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-accent">{profile.title}</p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </TerminalWindow>
      </section>

      <section id="about">
        <TerminalWindow title="about.md">
          <CommandLine command="cat about.md" />
          <p className="leading-relaxed text-foreground">{profile.summary}</p>
        </TerminalWindow>
      </section>

      <section id="skills">
        <TerminalWindow title="skills.json">
          <CommandLine command="cat skills.json" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="mb-2 text-sm text-muted">security / SOC</h2>
              <ul className="flex flex-wrap gap-2">
                {securitySkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-accent-dim bg-background px-2.5 py-1 text-sm text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm text-muted">development</h2>
              <ul className="flex flex-wrap gap-2">
                {developmentSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-border bg-background px-2.5 py-1 text-sm text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm text-muted">professional</h2>
              <ul className="flex flex-wrap gap-2">
                {professionalSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-border bg-background px-2.5 py-1 text-sm text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TerminalWindow>
      </section>

      <section id="certifications">
        <TerminalWindow title="certifications.log">
          <CommandLine command="cat certifications.log" />
          <ul className="flex flex-col gap-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center justify-between border-l-2 border-accent-dim pl-4 text-sm"
              >
                <span className="text-foreground">{cert.name}</span>
                <span className="text-muted">{cert.status}</span>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </section>

      <section id="experience">
        <TerminalWindow title="experience.log">
          <CommandLine command="tail -f experience.log" />
          <ul className="flex flex-col gap-6">
            {experience.map((entry) => (
              <li key={entry.role} className="border-l-2 border-accent-dim pl-4">
                <p className="font-semibold text-foreground">{entry.role}</p>
                <p className="text-sm text-accent">{entry.org}</p>
                <p className="mb-2 text-xs text-muted">{entry.period}</p>
                <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-foreground">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </section>

      <section id="education">
        <TerminalWindow title="education.yml">
          <CommandLine command="cat education.yml" />
          <ul className="flex flex-col gap-4">
            {education.map((entry) => (
              <li key={entry.school} className="border-l-2 border-accent-dim pl-4">
                <p className="font-semibold text-foreground">{entry.school}</p>
                <p className="text-sm text-foreground">{entry.program}</p>
                <p className="text-xs text-muted">{entry.period}</p>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </section>

      <section id="projects-teaser">
        <TerminalWindow title="projects/">
          <CommandLine command="ls projects/" />
          <p className="text-sm leading-relaxed text-muted">
            Includes a self-built SOC detection lab (Wazuh, Sysmon, Atomic
            Red Team) and a live image steganalysis forensics tool. More
            write-ups are being migrated here one at a time.
          </p>
          <div className="mt-4">
            <LinkButton href="/projects">view projects</LinkButton>
          </div>
        </TerminalWindow>
      </section>

      <section id="contact">
        <TerminalWindow title="contact.sh">
          <CommandLine command="cat contact.sh" />
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <span className="text-muted">email: </span>
              <a href={`mailto:${profile.email}`} className="footer-link text-foreground">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="text-muted">phone: </span>
              <a href={`tel:${profile.phone}`} className="footer-link text-foreground">
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="text-muted">github: </span>
              <a href={profile.github} className="footer-link text-foreground">
                {profile.github}
              </a>
            </li>
            <li>
              <span className="text-muted">linkedin: </span>
              <a href={profile.linkedin} className="footer-link text-foreground">
                {profile.linkedin}
              </a>
            </li>
          </ul>
        </TerminalWindow>
      </section>
    </div>
  );
}
