import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export interface TextRotateProps {
  items: React.ReactNode[];
  interval?: number;
  className?: string;
}

export const TextRotate = ({ items, interval = 1500, className }: TextRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", className)}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
