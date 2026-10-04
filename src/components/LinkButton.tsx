import Link from "next/link";
import { ReactNode } from "react";

const base =
  "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]";

const variants = {
  // solid accent - the one main action per area
  primary: "bg-accent text-background hover:bg-accent-strong hover:shadow-[0_0_24px_rgba(94,242,154,0.35)]",
  // outlined - secondary actions
  secondary: "border border-border-strong bg-surface/60 text-foreground hover:border-accent hover:text-accent",
};

export default function LinkButton({
  href,
  children,
  variant = "secondary",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
}) {
  const isExternal = href.startsWith("http");
  const className = `${base} ${variants[variant]}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
          {isExternal ? "↗" : "->"}
        </span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  // mailto/tel and internal routes
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
