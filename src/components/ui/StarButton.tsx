"use client";

import React, { useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface StarButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function StarButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
}: StarButtonProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty(
        "--path",
        `path('M 0 0 H ${ref.current.offsetWidth} V ${ref.current.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  const inner = (
    <>
      <div
        className="absolute aspect-square inset-0 animate-star-btn bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
        style={{ offsetPath: "var(--path)", offsetDistance: "0%", width: "var(--light-width)" } as CSSProperties}
      />
      <div
        className="absolute inset-0 z-[4] overflow-hidden rounded-[inherit]"
        style={{ borderWidth: "var(--border-width)", borderColor: variant === "primary" ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.1)" }}
        aria-hidden="true"
      >
        <div className="w-full h-full" style={{ backgroundColor: variant === "primary" ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.05)" }} />
      </div>
      <span className={cn(
        "z-10 relative inline-flex items-center gap-2",
        variant === "primary" ? "text-white" : "text-text-primary"
      )}>
        {children}
      </span>
    </>
  );

  const baseClass = cn(
    "relative z-[3] overflow-hidden h-12 px-6 py-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all",
    variant === "primary"
      ? "bg-accent-green hover:bg-accent-green/90 shadow-sm shadow-accent-green/20"
      : "bg-transparent border border-border hover:border-accent-green/30",
    className
  );

  const style = {
    "--duration": 3,
    "--light-width": "110px",
    "--light-color": variant === "primary" ? "#60a5fa" : "#3b82f6",
    "--border-width": "1px",
    isolation: "isolate",
  } as CSSProperties;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseClass}
        style={style}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={baseClass}
      style={style}
    >
      {inner}
    </button>
  );
}
