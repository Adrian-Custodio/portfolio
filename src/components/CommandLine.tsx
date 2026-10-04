export default function CommandLine({ command }: { command: string }) {
  return (
    <p className="mb-3 font-mono text-[13px]">
      <span className="text-accent">adrian@soc-lab</span>
      <span className="text-muted">:~$ </span>
      <span className="text-foreground">{command}</span>
    </p>
  );
}
