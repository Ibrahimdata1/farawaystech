"use client";

interface StatusBadgeProps {
  text: string;
}

export default function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-status-green/20 bg-status-green/5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-status-green" />
      </span>
      <span className="text-xs text-status-green font-medium">{text}</span>
    </div>
  );
}
