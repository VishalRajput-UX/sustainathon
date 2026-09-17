import { useEffect, useRef, useState } from "react";

;
import HeroHeadline from './HeroHeadline';
import HeroCards from './HeroCards';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomElementsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 20px movement
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bottomElementsRef.current, { opacity: 0, y: 20 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 5.6 });
      tl.to(bottomElementsRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
        .to(scrollIndicatorRef.current, { opacity: 1, duration: 1 }, "-=0.5");

      // Scroll Indicator animation
      gsap.to('.scroll-arrow', {
        y: 15,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black pb-32"
    >
      {/* Decorative Line SVG */}
      <svg className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="none" stroke="#FFFFFF" strokeWidth="1" d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160" />
      </svg>

      <div 
        className="w-full flex-1 flex flex-col items-center pt-10"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
        }}
      >
        <HeroHeadline />
        <HeroCards />
      </div>

      {/* Bottom Content */}
      <div 
        ref={bottomElementsRef}
        className="w-full max-w-7xl mx-auto flex flex-col items-center mt-8 mb-24 md:mb-12 px-6 z-10 relative"
      >
        

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center group">
            Register Now
            <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
          </button>
          
          <button className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Watch Teaser</span>
              <span className="text-[10px] text-muted">See what's coming</span>
            </div>
          </button>
        </div>

        {/* Hero Tagline / Eyebrow moved below buttons */}
        <div className="mt-8 text-[rgba(255,255,255,0.75)] text-[10px] md:text-[11px] tracking-[0.55em] md:tracking-[0.65em] font-normal uppercase text-center animate-pulse-slow">
          A NATIONAL-LEVEL HACKATHON
        </div>
      </div>

       

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        
        <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center mb-2 overflow-hidden">
          <span className="scroll-arrow text-[10px]">↓</span>
        </div>
        
        <span className="text-[8px] tracking-[0.3em] text-muted uppercase">Scroll to explore</span>
      </div>

      {/* Corner Texts */}
      <div className="hidden md:block absolute bottom-8 left-8 text-[10px] tracking-[0.3em] text-muted uppercase font-mono leading-relaxed">
        IDEAS<br/>TODAY.
      </div>
      <div className="hidden md:block absolute bottom-8 right-8 text-[10px] tracking-[0.3em] text-muted uppercase text-right font-mono leading-relaxed">
        A BRIGHTER<br/>TOMORROW.
      </div>

    </div>
  );
};

export default Hero;
