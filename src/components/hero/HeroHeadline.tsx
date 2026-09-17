import { useEffect, useRef } from "react";
import gsap from 'gsap';

const HeroHeadline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const versionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 4.2 });

      gsap.set([line2Ref.current, versionRef.current], {
        y: 40,
        opacity: 0,
      });

      tl.to(line2Ref.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
        .to(versionRef.current, { y: 0, opacity: 1, scale: 1.05, duration: 1, ease: 'elastic.out(1, 0.5)' }, "-=0.4")
        .to(versionRef.current, { scale: 1, duration: 0.3 }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center mt-20 md:mt-32 mb-8 z-10 relative w-full">
      {/* Main Title Container */}
      <div 
        ref={line2Ref}
        className="flex items-center justify-center relative w-full"
      >
        {/* Giant 2.0 Background - Absolutely positioned with inset-0 to prevent GSAP transform conflicts */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center w-full">
          <div 
            ref={versionRef}
            className="relative flex items-center justify-center w-full"
          >
            <span className="font-didone text-[clamp(8rem,17vw,18rem)] font-bold leading-none glass-chrome-text">
              2.0
            </span>
            <span className="absolute font-didone text-[clamp(8rem,17vw,18rem)] font-bold leading-none glass-chrome-overlay">
              2.0
            </span>
          </div>
        </div>

        {/* Foreground Title */}
        <h1 className="font-royal text-[clamp(1.7rem,8.5vw,9.5rem)] tracking-tight md:tracking-[-0.03em] leading-[0.9] text-center text-red-texture text-red-3d uppercase relative z-10 px-4 w-full">
          SUSTAIN-A-THON
        </h1>
      </div>
    </div>
  );
};

export default HeroHeadline;
