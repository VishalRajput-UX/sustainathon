import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  section1: ReactNode;
  section2: ReactNode;
}

const StoryScrollTransition = ({ section1, section2 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const sec1 = section1Ref.current;
      const sec2 = section2Ref.current;

      if (!sec1 || !sec2) return;

      // 1. Pin Section 1 when it finishes scrolling
      ScrollTrigger.create({
        trigger: sec1,
        start: "bottom bottom",
        end: () => `+=${window.innerHeight}`, // Pin for exactly 1 viewport height
        pin: true,
        pinSpacing: false, // Allows Section 2 to natively scroll up over it
        invalidateOnRefresh: true,
      });

      // 2. Animate Section 2 entrance (rotation)
      gsap.fromTo(sec2,
        {
          rotation: window.innerWidth < 768 ? -5 : -10, // Reduced rotation for mobile
          transformOrigin: "bottom left",
          boxShadow: "0px -30px 50px rgba(0,0,0,0.5)", // Shadow to separate layers
        },
        {
          rotation: 0,
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          ease: "none",
          scrollTrigger: {
            trigger: sec1,
            start: "bottom bottom", // Start animating as soon as sec1 pins
            end: () => `+=${window.innerHeight}`, // Finish when sec2 reaches the top
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={section1Ref} className="w-full relative z-10">
        {section1}
      </div>
      <div ref={section2Ref} className="w-full relative z-20 bg-black will-change-transform">
        {section2}
      </div>
    </div>
  );
};

export default StoryScrollTransition;
