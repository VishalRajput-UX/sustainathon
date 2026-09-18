"use client";


import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface DepthFlipTextProps {
  text: string;
  className?: string;
}

export function DepthFlipText({ text, className }: DepthFlipTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={cn("inline-block", className)}>{text}</span>;
  }

  return (
    <motion.span
      className={cn("group relative inline-flex [perspective:1000px]", className)}
      initial={{ opacity: 0, rotateX: -15, y: 20 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      whileTap="hover"
    >
      <span className="sr-only">{text}</span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="relative inline-block"
          style={{ transformStyle: "preserve-3d" }}
          variants={{
            hover: { rotateX: 90 },
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.025,
          }}
        >
          {/* Front Face */}
          <span className="block [transform:translateZ(0.3em)]">
            {char === " " ? "\u00A0" : char}
          </span>
          {/* Bottom Face - becomes visible when rotated up 90deg */}
          <span className="absolute left-0 top-0 block text-[inherit] [transform:rotateX(-90deg)_translateZ(0.3em)]">
            {char === " " ? "\u00A0" : char}
          </span>
        </motion.span>
      ))}
    </motion.span>
  );
}
