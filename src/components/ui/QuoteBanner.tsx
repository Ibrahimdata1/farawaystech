"use client";

import { motion } from "framer-motion";

export default function QuoteBanner({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-medium text-text-primary/80 italic tracking-wide">
          &ldquo;{text}&rdquo;
        </p>
        <div className="mt-4 w-12 h-0.5 bg-accent-green/30 mx-auto" />
      </div>
    </motion.div>
  );
}
