import { useRef, useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import infusionLogo from '../../assets/images/infusion.png';
import inlineImage from '../../assets/images/main2.jpg';

gsap.registerPlugin(ScrollTrigger);

// 7 Members Data
const teamMembers = [
  {
    id: 1,
    name: 'Moozuna Laskar',
    role: 'Club Precident',
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935556/a.jpg',
  },
  {
    id: 2,
    name: 'Vishal Singh',
    role: 'Gencode Club Lead',
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935555/vishal.jpg',
  },
  {
    id: 3,
    name: 'Rahul Raj',
    role: 'IOTronix Lead',
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935556/c.jpg',
  },
  {
    id: 4,
    name: 'Umang Varshney',
    role: 'CloudTitans Lead',
  
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935556/b.jpg',
  },
  {
    id: 5,
    name: 'Harsh Raj',
    role: 'FrameX Lead',

    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935556/harsh.jpg',
  },
  {
    id: 6,
    name: 'Nirmal Puri',
    role: 'Cybershield Lead',

    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935556/nirmal.jpg',
  },
  {
    id: 7,
    name: 'Moozuna Lashkar',
    role: 'OriginX Lead',
  
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789935556/a.jpg',
  }
];

export const CinematicTeamSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const expandingImageRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const presidentOverlayRef = useRef<HTMLDivElement>(null);
  const presidentTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      const placeholder = placeholderRef.current;
      const expandingImage = expandingImageRef.current;
      const horizontalTrack = horizontalTrackRef.current;
      const container = containerRef.current;
      const presidentOverlay = presidentOverlayRef.current;
      const presidentText = presidentTextRef.current;

      if (!placeholder || !expandingImage || !horizontalTrack || !container) return;

      // 1. Initial Measurement & Setup
      const setInitialBounds = () => {
        const bounds = placeholder.getBoundingClientRect();
        // Since container is pinned, we measure relative to viewport.
        // But expandingImage is inside horizontalTrack (which is fixed/absolute inside container).
        // Let's position horizontalTrack absolutely at inset-0.
        gsap.set(expandingImage, {
          position: 'absolute',
          top: bounds.top,
          left: bounds.left,
          width: bounds.width,
          height: bounds.height,
          borderRadius: 24, // Matching md:rounded-[24px] from original
          zIndex: 50
        });
        
        gsap.set(horizontalTrack, { x: 0 });
        gsap.set(presidentOverlay, { opacity: 0 });
        gsap.set(presidentText, { opacity: 0, y: 40 });
        gsap.set('.member-slide', { opacity: 1 });
      };

      // Call initially and on resize
      setInitialBounds();
      window.addEventListener('resize', setInitialBounds);

      // 2. Main Master Timeline
      const totalScrollLength = window.innerWidth * teamMembers.length + window.innerHeight * 2;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${totalScrollLength}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Stage 1: Expand Image
      masterTl.to(expandingImage, {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        borderRadius: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 0); // Start immediately when scrolling begins

      // Stage 2: Crossfade to President Photo & Reveal Text
      masterTl.to(presidentOverlay, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.inOut'
      }, 1.2); // Overlap slightly with end of expansion

      masterTl.to(presidentText, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, 1.4);

      // Hold President for a moment
      masterTl.to({}, { duration: 0.5 }); 

      // Stage 3: Horizontal Scroll
      // We calculate the exact width to move: total scrollWidth - viewport width
      masterTl.to(horizontalTrack, {
        x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
        ease: 'none',
        duration: teamMembers.length * 1.2 // Proportional duration based on slide count
      });

      return () => {
        window.removeEventListener('resize', setInitialBounds);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-nav-theme="dark" 
      ref={containerRef} 
      className="relative w-full bg-black text-white font-sans overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* ========================================================
          EDITORIAL LAYER (z-10)
          Remains strictly untouched in layout, preserved exactly.
          ======================================================== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        
        {/* Top Left Asterisk */}
        <div className="absolute -top-10 left-[-5%] md:left-[5%] text-white opacity-80">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-40 h-40 md:w-64 md:h-64 drop-shadow-2xl">
            <rect x="34" y="5" width="32" height="90" rx="4" />
            <rect x="5" y="34" width="90" height="32" rx="4" />
            <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
            <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
          </svg>
        </div>

        {/* Bottom Right Asterisk */}
        <div className="absolute -bottom-20 right-[-10%] md:right-[-5%] text-white opacity-80">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-56 h-56 md:w-96 md:h-96 drop-shadow-2xl">
            <rect x="34" y="5" width="32" height="90" rx="4" />
            <rect x="5" y="34" width="90" height="32" rx="4" />
            <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
            <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
          </svg>
        </div>

        <div className="font-sans font-bold text-[clamp(2.5rem,5.5vw,6rem)] xl:text-[7rem] leading-[1.3] md:leading-[1.2] tracking-tight md:tracking-[-0.04em] text-center w-full max-w-[min(94vw,1600px)]">
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-2 md:mb-4">
            <span>Hi. We are</span>
            <span className="inline-block">
              <img 
                src={infusionLogo} 
                alt="Infusion" 
                className="inline-block h-[1em] md:h-[1.1em] w-auto object-contain translate-y-[-5%]" 
              />
            </span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-2 md:mb-4">
            <span>Society.</span>
            <span className="inline-block">
              <div 
                className="inline-block h-[0.55em] w-[1.1em] rounded-t-[100px] bg-gradient-to-t from-[#821316] to-[#E34E35]"
                style={{ transform: "translateY(15%)" }}
              />
            </span>
            <span>And we are</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2">
            <span className="border-b-[4px] md:border-b-[5px] border-dotted border-white/70 pb-1 md:pb-2 leading-none">
              Introducing our
            </span>
            
            {/* INVISIBLE PLACEHOLDER FOR THE EXACT BOUNDS */}
            <span 
              ref={placeholderRef} 
              className="inline-block h-[0.75em] w-[1.4em] translate-y-[-5%]"
            />
            
            <span>club leaders</span>
          </div>
        </div>

        {/* Connect Button */}
        <div ref={buttonRef} className="mt-16 md:mt-24 pointer-events-auto">
          <a 
            href="https://infusion-tan.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button 
              className="bg-white text-black font-black text-xl md:text-[22px] px-12 py-4 md:px-[60px] md:py-[22px] rounded-[40px] hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              Connect
            </button>
          </a>
        </div>
      </div>

      {/* ========================================================
          HORIZONTAL TRACK LAYER (z-20)
          Starts hidden beneath editorial, expands and covers it.
          ======================================================== */}
      <div 
        ref={horizontalTrackRef} 
        className="absolute inset-0 flex h-full will-change-transform z-20 pointer-events-none"
      >
        {/* SLIDE 1: PRESIDENT (Contains the expanding inline image!) */}
        <div className="w-screen h-[100dvh] relative flex-shrink-0 flex items-center justify-center">
          
          {/* THE EXPANDING IMAGE - Initially positioned absolutely matching the placeholder */}
          <div ref={expandingImageRef} className="overflow-hidden bg-black flex items-center justify-center pointer-events-auto">
            
            {/* Base Image (Editorial Inline Visual) */}
            <img 
              src={inlineImage} 
              alt="Editorial Visual" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
            />
            
            {/* President Crossfade Image */}
            <div ref={presidentOverlayRef} className="absolute inset-0 z-10 bg-black">
              <img 
                src={teamMembers[0].image} 
                alt={teamMembers[0].name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* President Typography Overlay */}
            <div ref={presidentTextRef} className="absolute bottom-10 left-6 md:bottom-20 md:left-16 z-20 flex flex-col">
              <p className="text-accentOrange font-mono tracking-[0.25em] text-xs md:text-sm font-semibold mb-2">
                {teamMembers[0].role}
              </p>
              <h2 className="font-royal text-4xl md:text-7xl lg:text-[6rem] uppercase leading-[0.9] text-white">
                {teamMembers[0].name}
              </h2>
              
            </div>
            
          </div>
        </div>

        {/* SLIDES 2-7: REST OF TEAM */}
        {teamMembers.slice(1).map((member, idx) => (
          <div key={member.id} className="member-slide w-screen h-[100dvh] relative flex-shrink-0 border-l border-white/10 pointer-events-auto bg-black">
            <img 
              src={member.image} 
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-10 left-6 md:bottom-20 md:left-16 z-20 flex flex-col">
              <p className="text-accentOrange font-mono tracking-[0.25em] text-xs md:text-sm font-semibold mb-2">
                {member.role}
              </p>
              <h2 className="font-royal text-4xl md:text-6xl lg:text-[5rem] uppercase leading-[0.9] text-white max-w-4xl">
                {member.name}
              </h2>
            
            </div>

            {/* Optional Slide Number Indicator */}
            <div className="absolute top-10 right-6 md:top-16 md:right-16 text-white/30 font-mono text-xl md:text-3xl font-light">
              0{idx + 2} / 07
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
