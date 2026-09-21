import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import infusionLogo from '../../assets/images/infusion.png';
const inlineImage = 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789936897/team.jpg';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export const EditorialConnect = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLSpanElement>(null);
  const inlineImageRef = useRef<HTMLDivElement>(null);
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      const updatePosition = () => {
        if (!placeholderRef.current || !sectionRef.current || !fullscreenContainerRef.current) return;
        
        const pRect = placeholderRef.current.getBoundingClientRect();
        const sRect = sectionRef.current.getBoundingClientRect();
        
        // Calculate offset inside the section
        const topOffset = pRect.top - sRect.top;
        const leftOffset = pRect.left - sRect.left;
        
        // Set initial state of the expanding wrapper exactly over the placeholder
        gsap.set(fullscreenContainerRef.current, {
          top: topOffset,
          left: leftOffset,
          width: pRect.width,
          height: pRect.height,
          borderRadius: window.innerWidth >= 768 ? 24 : 16,
          opacity: 0 // Hidden until scroll hits
        });
      };

      // Initial setup
      updatePosition();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          onRefresh: updatePosition
        }
      });

      // At progress 0, swap the inline image with the absolute one
      tl.set(fullscreenContainerRef.current, { opacity: 1 }, 0)
        .set(inlineImageRef.current, { opacity: 0 }, 0)
        
        // Main expansion animation
        .to(fullscreenContainerRef.current, {
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          borderRadius: 0,
          ease: "none"
        }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black text-white py-32 md:py-48 z-20 font-sans">
      
      {/* Decorative shapes wrapped in overflow-hidden so they don't break page layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Asterisk */}
        <motion.div 
          className="absolute -top-10 left-[-5%] md:left-[5%] text-white"
          initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-40 h-40 md:w-64 md:h-64 drop-shadow-2xl">
            <rect x="34" y="5" width="32" height="90" rx="4" />
            <rect x="5" y="34" width="90" height="32" rx="4" />
            <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
            <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
          </svg>
        </motion.div>

        {/* Bottom Right Asterisk */}
        <motion.div 
          className="absolute -bottom-20 right-[-10%] md:right-[-5%] text-white"
          initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-56 h-56 md:w-96 md:h-96 drop-shadow-2xl">
            <rect x="34" y="5" width="32" height="90" rx="4" />
            <rect x="5" y="34" width="90" height="32" rx="4" />
            <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
            <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content (Text and Inline Placeholder) */}
      <div className="relative z-10 w-full max-w-[min(94vw,1600px)] mx-auto px-4 flex flex-col items-center text-center">
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
            <span className="word inline-block relative">
              {/* This is the structural placeholder that keeps the DOM space */}
              <span ref={placeholderRef} className="inline-block h-[0.75em] w-[1.4em]"></span>
              
              {/* This is the visual inline image before scroll expansion */}
              <motion.div 
                ref={inlineImageRef}
                className="absolute inset-0 rounded-[16px] md:rounded-[24px] overflow-hidden translate-y-[-5%]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={inlineImage} 
                  alt="Club Leaders" 
                  className="w-full h-full object-cover grayscale opacity-90" 
                />
              </motion.div>
            </span>
            <span className="word">club</span>
            <span className="word">leaders</span>
          </div>
        </ScrollReveal>

        {/* Connect Button */}
        <motion.div
          className="mt-16 md:mt-24 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <a 
            href="https://infusion-tan.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.button 
              className="bg-white text-black font-black text-xl md:text-[22px] px-12 py-4 md:px-[60px] md:py-[22px] rounded-[40px] hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Connect
            </motion.button>
          </a>
        </motion.div>

      </div>

      {/* 
        Fullscreen Expanding Image Wrapper 
        z-30 ensures it covers the text (z-10) during expansion 
      */}
      <div 
        ref={fullscreenContainerRef} 
        className="absolute z-30 pointer-events-none overflow-hidden"
      >
        <img 
          src={inlineImage} 
          alt="Club Leaders Fullscreen" 
          className="w-full h-full object-cover grayscale opacity-90" 
        />
      </div>

    </section>
  );
};
