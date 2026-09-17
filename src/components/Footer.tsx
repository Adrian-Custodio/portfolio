import { profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {year} {profile.name}.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li>
            <a href={profile.github} className="footer-link">
              github
            </a>
          </li>
          <li>
            <a href={profile.linkedin} className="footer-link">
              linkedin
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="footer-link">
              email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
