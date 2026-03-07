"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  speed = 50,
  delay = 500,
  className = "",
}: TypingAnimationProps) {
  const { displayed } = useTypingEffect(text, speed, delay);

  return (
    <span className={className}>
      {displayed}
      <span className="cursor-blink ml-0.5">
        |
      </span>
    </span>
  );
}
