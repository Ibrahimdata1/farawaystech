"use client";

import { motion } from "framer-motion";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title = "terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <motion.div
      className={`rounded-lg border border-border bg-bg-card overflow-hidden ${className}`}
      whileHover={{ borderColor: "var(--color-accent-blue)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg-primary/50">
        <div className="w-1 h-4 rounded-full bg-accent-green/60" />
        <span className="text-xs text-text-secondary font-sans tracking-wide uppercase">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-5 overflow-x-auto">{children}</div>
    </motion.div>
  );
}
