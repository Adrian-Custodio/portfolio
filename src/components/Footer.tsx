import { profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          <span className="text-accent">$</span> © {year} {profile.name}. Built with Next.js, deployed on Vercel.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-underline">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="link-underline">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
