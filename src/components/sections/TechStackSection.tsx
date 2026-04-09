"use client";

import { content, type Lang } from "@/lib/content";
import { motion } from "framer-motion";
import { FlippingCard } from "@/components/ui/FlippingCard";
import { Code2, Cpu, TabletSmartphone, CloudCog, DatabaseZap, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TechStackSectionProps {
  lang: Lang;
}

const categoryIconMap: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Cpu,
  Mobile: TabletSmartphone,
  Cloud: CloudCog,
  Database: DatabaseZap,
  AI: BrainCircuit,
};

export default function TechStackSection({ lang }: TechStackSectionProps) {
  const t = content.techStack[lang];
  const categories = content.techStack.categories;

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.heading}
          </h2>
          <p className="text-text-secondary text-sm">
            {lang === "th"
              ? "เลื่อนเมาส์ผ่านการ์ดเพื่อดูเทคโนโลยี"
              : "Hover over cards to see technologies"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const Icon = categoryIconMap[cat.name] ?? Code2;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <FlippingCard
                  height={200}
                  frontContent={
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-accent-green/10 border border-accent-green/15 flex items-center justify-center mb-4">
                        <Icon className="text-accent-green" size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className={`text-lg font-bold ${cat.color}`}>{cat.name}</h3>
                      <p className="text-text-secondary/50 text-xs mt-2">
                        {cat.techs.length} {lang === "th" ? "เทคโนโลยี" : "technologies"}
                      </p>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col items-center justify-center h-full p-5">
                      <h4 className={`text-sm font-semibold mb-4 ${cat.color}`}>{cat.name}</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {cat.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-bg-primary border border-border/50 text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
