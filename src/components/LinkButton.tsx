import Link from "next/link";
import { ReactNode } from "react";

const styles =
  "inline-flex items-center gap-2 rounded border border-accent px-4 py-2 text-sm font-medium text-accent transition-all duration-150 hover:bg-accent hover:text-background hover:shadow-[0_0_16px_rgba(74,222,128,0.35)] active:scale-95";

export default function LinkButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
