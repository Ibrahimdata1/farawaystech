"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  height = 220,
  frontContent,
  backContent,
}: FlippingCardProps) {
  return (
    <div
      className="group/flipping-card [perspective:1000px]"
      style={{ height: `${height}px` }}
    >
      <div
        className={cn(
          "relative w-full rounded-xl border border-border bg-bg-card shadow-sm transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]",
          className
        )}
        style={{ height: `${height}px` }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-[inherit] bg-bg-card overflow-hidden [backface-visibility:hidden] [transform:rotateY(0deg)]">
          {frontContent}
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-[inherit] bg-bg-card overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}
