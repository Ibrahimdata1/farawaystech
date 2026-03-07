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
      whileHover={{ borderColor: "rgba(88, 166, 255, 0.3)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-primary/50">
        <span className="w-3 h-3 rounded-full bg-terminal-red" />
        <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
        <span className="w-3 h-3 rounded-full bg-terminal-green" />
        <span className="ml-2 text-xs text-text-secondary font-sans">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-5 overflow-hidden">{children}</div>
    </motion.div>
  );
}
