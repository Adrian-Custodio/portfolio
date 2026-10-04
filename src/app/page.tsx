import TerminalWindow from "@/components/TerminalWindow";
import CommandLine from "@/components/CommandLine";
import LinkButton from "@/components/LinkButton";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard, { GitHubIcon } from "@/components/ProjectCard";
import CopyEmail from "@/components/CopyEmail";
import {
  profile,
  securitySkills,
  developmentSkills,
  professionalSkills,
  certifications,
  experience,
  education,
  projects,
} from "@/data/site";

// Sample alert feed for the hero terminal (illustrates the lab's detect -> map workflow)
const alertFeed = [
  { level: "12", rule: "T1059.001", text: "PowerShell encoded command executed", tone: "danger" },
  { level: "10", rule: "T1547.001", text: "Registry Run key persistence added", tone: "amber" },
  { level: "12", rule: "T1003.001", text: "LSASS memory access by non-system proc", tone: "danger" },
  { level: "7", rule: "T1082", text: "System information discovery", tone: "muted" },
] as const;

const toneClass = { danger: "text-danger", amber: "text-amber", muted: "text-muted" };

const skillGroups = [
  { title: "Security / SOC", icon: <ShieldIcon />, items: securitySkills, highlight: true },
  { title: "Development", icon: <CodeIcon />, items: developmentSkills },
  { title: "Professional", icon: <PeopleIcon />, items: professionalSkills },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {/* ---------------- HERO ---------------- */}
      <section id="top" className="grid items-center gap-14 pt-16 pb-24 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            Open to entry-level SOC roles
          </p>

          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
            {profile.title}
            <span className="cursor-blink">_</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href="/projects" variant="primary">
              View projects
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} arrow={false}>
              Contact me
            </LinkButton>
          </div>

          <div className="mt-10 flex items-center gap-5 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <PinIcon /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
              <GitHubIcon /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* live-looking Wazuh alert terminal */}
        <div className="relative">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
          <TerminalWindow title="wazuh-alerts.log - soc-lab">
            <CommandLine command="tail -f /var/ossec/logs/alerts/alerts.log" />
            <ul className="space-y-2.5">
              {alertFeed.map((a, i) => (
                <li
                  key={a.rule}
                  className="log-line grid grid-cols-[auto_auto_1fr] gap-x-3"
                  style={{ animationDelay: `${300 + i * 450}ms` }}
                >
                  <span className={toneClass[a.tone]}>lvl {a.level.padStart(2, "0")}</span>
                  <span className="text-accent">{a.rule}</span>
                  <span className="text-foreground/85">{a.text}</span>
                </li>
              ))}
              <li className="log-line pt-2 text-muted" style={{ animationDelay: "2300ms" }}>
                <span className="text-accent">✓</span> 4 alerts mapped to MITRE ATT&amp;CK
                <span className="cursor-blink ml-1 text-accent">▍</span>
              </li>
            </ul>
          </TerminalWindow>
        </div>
      </section>

      {/* quick stats strip */}
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { k: String(projects.length), v: "Projects shipped" },
            { k: "200h", v: "IT / network internship" },
            { k: String(certifications.length), v: "Certifications in progress" },
            { k: "ATT&CK", v: "Detections mapped to MITRE" },
          ].map((s) => (
            <div key={s.v} className="bg-surface px-6 py-6">
              <dt className="text-sm text-muted">{s.v}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-foreground">{s.k}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="pt-28">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.4fr] lg:gap-10">
            <SectionHeading index="01" label="about" title="Learning security by breaking and watching my own lab." />
            <p className="text-lg leading-relaxed text-foreground/85 lg:pt-10">{profile.summary}</p>
          </div>
        </Reveal>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="pt-28">
        <Reveal>
          <SectionHeading index="02" label="skills" title="What I work with" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100} className="h-full">
              <div className="card h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl border ${
                      g.highlight ? "border-accent-dim bg-accent/10 text-accent" : "border-border-strong bg-surface-2 text-foreground"
                    }`}
                  >
                    {g.icon}
                  </span>
                  <h3 className="font-semibold text-foreground">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-sm text-foreground/85 transition-colors hover:border-accent-dim hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="pt-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading index="03" label="projects" title="Featured work">
              Hands-on builds covering detection engineering and digital forensics.
            </SectionHeading>
            <div className="mb-10">
              <LinkButton href="/projects">All projects</LinkButton>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- EXPERIENCE ---------------- */}
      <section id="experience" className="pt-28">
        <Reveal>
          <SectionHeading index="04" label="experience" title="Where I've worked" />
        </Reveal>
        <ol className="relative ml-2 border-l border-border">
          {experience.map((entry, i) => (
            <li key={entry.role} className="relative pb-12 pl-8 last:pb-0">
              {/* timeline node */}
              <span className="absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
              <Reveal delay={i * 100}>
                <p className="font-mono text-xs text-muted">{entry.period}</p>
                <h3 className="mt-1.5 text-xl font-semibold text-foreground">{entry.role}</h3>
                <p className="text-accent">{entry.org}</p>
                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-foreground/80">
                      <span aria-hidden className="mt-1 font-mono text-xs text-accent">-&gt;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- CERTS + EDUCATION ---------------- */}
      <div className="grid gap-16 pt-28 lg:grid-cols-2 lg:gap-10">
        <section id="certifications">
          <Reveal>
            <SectionHeading index="05" label="certifications" title="Certifications" />
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="card flex items-center justify-between gap-4 p-5">
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border-strong bg-surface-2 text-amber">
                      <BadgeIcon />
                    </span>
                    <span className="font-medium text-foreground">{cert.name}</span>
                  </div>
                  <span className="shrink-0 rounded-full border border-amber/30 bg-amber/10 px-2.5 py-1 font-mono text-[11px] text-amber">
                    {cert.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="education">
          <Reveal delay={100}>
            <SectionHeading index="06" label="education" title="Education" />
            <ul className="space-y-3">
              {education.map((entry) => (
                <li key={entry.school} className="card p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{entry.school}</span>
                    <span className="font-mono text-xs text-muted">{entry.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{entry.program}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </div>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="pt-28">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-accent/15 blur-3xl" />
            <p className="font-mono text-xs tracking-wider text-accent uppercase">07 / contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Looking for a junior analyst who already runs a lab at home?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              I&apos;m open to SOC analyst and MSSP roles. The fastest way to reach me is email.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5">
              <CopyEmail email={profile.email} />
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-underline">
                  {profile.phone}
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-underline">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ---------- inline icons (no icon library needed) ---------- */
function Svg({ children, size = 18 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}
function ShieldIcon() {
  return <Svg><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></Svg>;
}
function CodeIcon() {
  return <Svg><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></Svg>;
}
function PeopleIcon() {
  return <Svg><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2 .7 3.2 2.5 3.5 5.2" /></Svg>;
}
function BadgeIcon() {
  return <Svg><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 22l5-3 5 3-1.5-8" /></Svg>;
}
function PinIcon() {
  return <Svg size={14}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></Svg>;
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
