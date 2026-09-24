import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import infusionLogo from '../../assets/images/infusion.png';
const inlineImage = 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789936897/team.jpg';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    id: 1,
    name: 'Moozuna Laskar',
    role: 'Club President',
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

export const EditorialTeamScrollScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLSpanElement>(null);
  const cloneRef = useRef<HTMLImageElement>(null);
  const presidentRef = useRef<HTMLDivElement>(null);
  const teamTrackRef = useRef<HTMLDivElement>(null);
  const originalImgRef = useRef<HTMLImageElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const scene = sceneRef.current;
      const placeholder = placeholderRef.current;
      const clone = cloneRef.current;
      const originalImg = originalImgRef.current;
      const president = presidentRef.current;
      const track = teamTrackRef.current;
      const textContent = textContentRef.current;

      if (!scene || !placeholder || !clone || !originalImg || !president || !track || !textContent) return;

      const setupClone = () => {
        const pRect = placeholder.getBoundingClientRect();
        const tRect = track.getBoundingClientRect();
        
        const top = pRect.top - tRect.top;
        const left = pRect.left - tRect.left;
        
        gsap.set(clone, {
          top: top,
          left: left,
          width: pRect.width,
          height: pRect.height,
          borderRadius: 24,
          x: 0,
          y: 0,
          scale: 1,
        });
      };

      // Set initial positions
      setupClone();
      gsap.set(originalImg, { visibility: 'hidden' });
      gsap.set(president, { opacity: 0, y: 30 });
      gsap.set(track, { x: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "+=1000%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: setupClone,
        }
      });

      // STAGE 0: Editorial Hold
      tl.addLabel("editorial")
        .to({}, { duration: 0.1 });

      // STAGE 1: Image Expansion
      tl.addLabel("expand")
        .to(clone, {
          top: 0,
          left: 0,
          width: '100vw',
          height: '100dvh',
          borderRadius: 0,
          duration: 1,
          ease: "power2.inOut",
        }, "expand")
        .to(textContent, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut"
        }, "expand");

      // STAGE 2: Fullscreen Hold
      tl.addLabel("fullscreen")
        .to({}, { duration: 0.2 });

      // STAGE 3: President Reveal
      tl.addLabel("president")
        .to(president, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "president");

      // STAGE 4: President Hold
      tl.addLabel("presidentHold")
        .to({}, { duration: 0.2 });

      // STAGE 5: Team Sequence
      tl.addLabel("team")
        .to(track, {
          x: () => `-${100 * (team.length - 1)}vw`,
          ease: "none",
          duration: 4
        }, "team");

      // STAGE 6: End Hold
      tl.addLabel("end")
        .to({}, { duration: 0.1 });

      // Diagnostics requested for debugging scroll exhaustion
      console.log("MASTER SCENE", sceneRef.current);
      console.log("TEAM TRACK WIDTH", track.scrollWidth);
      console.log("VIEWPORT WIDTH", window.innerWidth);
      console.log("SCROLLTRIGGER START", tl.scrollTrigger?.start);
      console.log("SCROLLTRIGGER END", tl.scrollTrigger?.end);
      console.log("TIMELINE DURATION", tl.duration());

    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-nav-theme="dark" ref={sceneRef} className="relative w-screen h-[100dvh] overflow-hidden bg-black text-white z-20 font-sans">
      
      {/* BACKGROUND DECORATIONS (Top left, bottom right asterisks) */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg viewBox="0 0 100 100" fill="currentColor" className="absolute -top-10 left-[-5%] md:left-[5%] w-40 h-40 md:w-64 md:h-64">
          <rect x="34" y="5" width="32" height="90" rx="4" />
          <rect x="5" y="34" width="90" height="32" rx="4" />
          <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
          <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
        </svg>
        <svg viewBox="0 0 100 100" fill="currentColor" className="absolute -bottom-20 right-[-10%] md:right-[-5%] w-56 h-56 md:w-96 md:h-96">
          <rect x="34" y="5" width="32" height="90" rx="4" />
          <rect x="5" y="34" width="90" height="32" rx="4" />
          <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
          <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* TEAM TRACK */}
      <div ref={teamTrackRef} className="absolute top-0 left-0 h-full flex z-30 pointer-events-none" style={{ width: `${team.length * 100}vw` }}>
        
        {/* SLIDE 1: PRESIDENT / FULLSCREEN IMAGE */}
        <div className="relative w-screen h-[100dvh] flex-shrink-0 flex items-center justify-center overflow-hidden">
          {/* The expanding clone image */}
          <img 
            ref={cloneRef} 
            src={inlineImage} 
            className="absolute object-cover z-0 grayscale"
            alt="" 
          />
          
          {/* President Overlay */}
          <div ref={presidentRef} className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center p-4">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-white/20 shadow-2xl">
              <img src={team[0].image} alt={team[0].name} className="w-full h-full object-cover" />
            </div>
            <p className="text-accentOrange font-mono tracking-widest text-sm mb-2">{team[0].role}</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{team[0].name}</h2>
            <p className="text-white/50 text-6xl md:text-8xl font-black absolute bottom-10 right-10 opacity-20">01</p>
          </div>
        </div>

        {/* SLIDES 2 to 7 */}
        {team.slice(1).map((member, index) => (
          <div key={member.id} className="relative w-screen h-[100dvh] flex-shrink-0 flex items-center justify-center overflow-hidden bg-[#050505]">
            <img src={member.image} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" alt="" />
            <div className="relative z-10 flex flex-col items-center justify-center p-4">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-white/20 shadow-2xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-accentOrange font-mono tracking-widest text-sm mb-2">{member.role}</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center">{member.name}</h2>
              <p className="text-white/50 text-6xl md:text-8xl font-black absolute bottom-10 right-10 opacity-20">
                0{index + 2}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* EDITORIAL CONTENT */}
      <div ref={textContentRef} className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none">
        
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={10}
          textClassName="font-sans font-bold text-[clamp(2.5rem,5.5vw,6rem)] xl:text-[7rem] leading-[1.3] md:leading-[1.2] tracking-tight md:tracking-[-0.04em]"
        >
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-2 md:mb-4">
            <span className="word">Hi.</span>
            <span className="word">We</span>
            <span className="word">are</span>
            <span className="word inline-block">
              <img 
                src={infusionLogo} 
                alt="Infusion" 
                className="inline-block h-[1em] md:h-[1.1em] w-auto object-contain translate-y-[-5%]" 
                aria-hidden="true"
              />
            </span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-2 md:mb-4">
            <span className="word">Society.</span>
            <span className="word inline-block">
              <div 
                className="inline-block h-[0.55em] w-[1.1em] rounded-t-[100px] bg-gradient-to-t from-[#821316] to-[#E34E35]"
                style={{ transform: "translateY(15%)" }}
                aria-hidden="true"
              />
            </span>
            <span className="word">And</span>
            <span className="word">we</span>
            <span className="word">are</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2">
            <span className="word border-b-[4px] md:border-b-[5px] border-dotted border-white/70 pb-1 md:pb-2 leading-none">
              Introducing
            </span>
            <span className="word border-b-[4px] md:border-b-[5px] border-dotted border-white/70 pb-1 md:pb-2 leading-none">
              our
            </span>
            <span className="word inline-block">
              <span 
                ref={placeholderRef}
                className="inline-block h-[0.75em] w-[1.4em] rounded-[16px] md:rounded-[24px] overflow-hidden translate-y-[-5%]"
              >
                <img 
                  ref={originalImgRef}
                  src={inlineImage} 
                  alt="Club Leaders" 
                  className="w-full h-full object-cover grayscale opacity-90" 
                />
              </span>
            </span>
            <span className="word">club</span>
            <span className="word">leaders</span>
          </div>
        </ScrollReveal>

        {/* Connect Button */}
        <div className="mt-16 md:mt-24 pointer-events-auto relative z-50">
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

    </section>
  );
};
