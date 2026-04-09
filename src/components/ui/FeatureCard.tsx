"use client";

import { cn } from "@/lib/utils";
import React from "react";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
  icon: LucideIcon;
};

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(): number[][] {
  return Array.from({ length: 5 }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

export default function FeatureCard({ title, description, icon: Icon, className, ...props }: FeatureCardProps) {
  const p = genRandomPattern();

  return (
    <div className={cn("group relative overflow-hidden p-6 hover:bg-bg-card-hover/50 transition-colors duration-300", className)} {...props}>
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 to-accent-blue/5 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-accent-green/5 stroke-border absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10 border border-accent-green/15 group-hover:scale-110 group-hover:bg-accent-green/15 group-hover:shadow-lg group-hover:shadow-accent-green/10 transition-all duration-300">
        <Icon className="text-accent-green" size={24} strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="mt-6 text-base font-semibold text-text-primary">{title}</h3>
      <p className="text-text-secondary relative z-20 mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
