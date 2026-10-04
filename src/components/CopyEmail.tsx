"use client";

import { useState } from "react";

// Shows the email with a one-click copy button
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`; // clipboard blocked -> open mail app
    }
  };

  return (
    <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-border-strong bg-background/70 p-1.5 pl-5 font-mono text-sm">
      <span className="min-w-0 flex-1 truncate text-foreground">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-full bg-surface-2 px-4 py-2 text-xs text-foreground transition hover:bg-accent hover:text-background"
        aria-live="polite"
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </div>
  );
}
