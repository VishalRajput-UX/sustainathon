import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    // Deterministic pseudo-random values to avoid hydration issues and random re-rendering
    const randDuration = 18 + ((i * 13) % 15);
    const isAccent = i % 5 === 0;
    
    return {
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      color: isAccent ? "rgba(225, 6, 0, 0.5)" : "rgba(255, 255, 255, 0.25)",
      width: isAccent ? 1.5 : 0.5,
      duration: randDuration,
      initialOffset: ((i * 7) % 10) / 10,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.3 + path.id * 0.02}
            initial={{ 
              pathLength: 0.3, 
              pathOffset: path.initialOffset 
            }}
            animate={{
              pathOffset: path.initialOffset + 1,
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    // Static version for reduced motion
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d={`M-${380 - i * 15} -${189 + i * 15}C-${380 - i * 15} -${189 + i * 15} -${312 - i * 15} ${216 - i * 15} ${152 - i * 15} ${343 - i * 15}C${616 - i * 15} ${470 - i * 15} ${684 - i * 15} ${875 - i * 15} ${684 - i * 15} ${875 - i * 15}`}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={0.5}
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
