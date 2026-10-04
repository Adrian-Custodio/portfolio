import { ReactNode } from "react";

// macOS-style window chrome, used for the hero's live log and code-flavoured bits
export default function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border-strong bg-surface/90 shadow-2xl shadow-black/60 backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed sm:p-6">{children}</div>
    </div>
  );
}
