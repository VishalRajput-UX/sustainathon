import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils"; // Fallback path if alias not defined

export interface HoverExpandGalleryProps {
  images: {
    src: string;
    alt: string;
    code?: string;
  }[];
  className?: string;
  initialActive?: number;
}

export const HoverExpandGallery: React.FC<HoverExpandGalleryProps> = ({
  images,
  className,
  initialActive = 1,
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(initialActive);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("w-full mx-auto", className)}
    >
      <div className="flex w-full items-center justify-center gap-1.5 md:gap-2 overflow-x-hidden md:overflow-visible">
        {images.map((image, index) => {
          const isActive = activeImage === index;
          return (
            <motion.div
              key={index}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={`View ${image.alt}`}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-2xl md:rounded-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accentOrange origin-center",
              )}
              initial={false}
              style={{ flexBasis: "0%" }}
              animate={{
                flexGrow: isActive ? (isMobile ? 12 : 10) : 1,
                height: isMobile ? "260px" : "500px",
              }}
              transition={{
                flexGrow: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                height: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
              }}
              onHoverStart={() => !isMobile && setActiveImage(index)}
              onClick={() => setActiveImage(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveImage(index);
                }
              }}
            >
              {/* Overlay Gradient on Active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Metadata code */}
              <AnimatePresence>
                {isActive && image.code && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute z-20 flex h-full w-full flex-col items-start justify-end p-4 md:p-6 pointer-events-none"
                  >
                    <p className="text-left text-xs font-mono tracking-widest text-white/80 uppercase">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover origin-center"
                animate={{
                  scale: isActive ? 1 : 1.1, // Subtle parallax
                }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                loading={index > 4 ? "lazy" : "eager"}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
