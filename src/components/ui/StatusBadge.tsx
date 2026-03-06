"use client";

interface StatusBadgeProps {
  text: string;
}

export default function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green" />
      </span>
      <span className="text-sm text-accent-green font-medium">{text}</span>
    </div>
  );
}
