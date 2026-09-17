import Link from "next/link";
import { navLinks } from "@/data/site";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 text-sm">
        <Link href="/" className="text-accent transition-transform hover:scale-105">
          adrian@custodio<span className="cursor-blink">_</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative py-1 transition-colors hover:text-accent after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
