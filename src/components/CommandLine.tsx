export default function CommandLine({ command }: { command: string }) {
  return (
    <p className="mb-4 text-sm text-muted">
      <span className="text-accent">adrian@portfolio</span>
      <span className="text-muted">:~$ </span>
      <span className="text-foreground">{command}</span>
    </p>
  );
}
