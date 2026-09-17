import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface MagicTextProps {
  text: string;
  className?: string;
}

export function MagicText({ text, className }: MagicTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start revealing when the top of the element hits 80% of the viewport height
    // Finish revealing when the bottom of the element hits 40% of the viewport height
    offset: ["start 80%", "end 40%"],
  });

  const words = text.split(" ");

  if (reducedMotion) {
    return (
      <p className={cn("flex flex-wrap justify-center", className)}>
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      className={cn("flex flex-wrap justify-center", className)}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em]">
      <span className="absolute opacity-[0.15]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
