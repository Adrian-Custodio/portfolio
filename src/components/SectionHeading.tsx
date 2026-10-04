import { ReactNode } from "react";

// Numbered section header: "01 / about" eyebrow + big title + optional blurb
export default function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-wider text-accent uppercase">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent-dim" />
        <span className="text-muted">{label}</span>
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-relaxed text-muted">{children}</p>}
    </div>
  );
}
