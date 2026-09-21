import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { GrainGradient } from "@paper-design/shaders-react";
import { isSiteLoaded, markSiteAsLoaded } from "../../lib/loaderState";

const SiteLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const [isLoaded, setIsLoaded] = useState(() => isSiteLoaded());
  const [index, setIndex] = useState(0);

  // Sync morphing animation
  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 1100);
    return () => clearInterval(interval);
  }, [isLoaded]);

  // Lock scroll
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isLoaded]);

  // Main GSAP Timeline
  useEffect(() => {
    if (isLoaded) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          markSiteAsLoaded();
          setIsLoaded(true);
          document.body.style.overflow = '';
        }
      });

      if (prefersReducedMotion) {
        gsap.set(counterRef.current, { innerText: "100" });
        gsap.set(progressRef.current, { width: "100%" });
        
        tl.to(uiRef.current, { opacity: 0, duration: 0.2, delay: 0.5 })
          .to([leftPanelRef.current, rightPanelRef.current], {
            xPercent: (i) => (i === 0 ? -100 : 100),
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              markSiteAsLoaded();
              setIsLoaded(true);
              document.body.style.overflow = '';
            }
          });
        return;
      }

      const loaderObj = { val: 0 };
      tl.to(loaderObj, {
        val: 100,
        duration: 3.2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.floor(loaderObj.val).toString();
          }
          if (progressRef.current) {
            progressRef.current.style.width = `${loaderObj.val}%`;
          }
        }
      }, 0);

      tl.to(uiRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 3.6);

      tl.to([leftPanelRef.current, rightPanelRef.current], {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1.2,
        ease: "expo.inOut", 
      }, 3.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isLoaded) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Eagle+Lake&family=Jaini&display=swap');
        .font-bangers { font-family: 'Bangers', system-ui; font-weight: 400; font-style: normal; }
        .font-eagle { font-family: 'Eagle Lake', serif; font-weight: 400; font-style: normal; }
        .font-jaini { font-family: 'Jaini', system-ui; font-weight: 400; font-style: normal; }
      `}} />
      
      {/* SVG Gooey Filter for Liquid Morphing */}
      <svg className="fixed hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none">
        {/* Background Panels */}
        <div ref={leftPanelRef} className="absolute inset-y-0 left-0 w-1/2 bg-[#050505] pointer-events-auto" />
        <div ref={rightPanelRef} className="absolute inset-y-0 right-0 w-1/2 bg-[#050505] pointer-events-auto" />

        {/* UI Layer */}
        <div ref={uiRef} className="absolute inset-0 pointer-events-none isolate">
          
          {/* Top Left Percentage */}
          <div className="absolute top-[32px] left-[38px] font-sans font-black text-[clamp(3.5rem,5vw,6rem)] tracking-[-0.04em] leading-none text-white z-50">
            <span ref={counterRef}>0</span>%
          </div>

          {/* Shaders Layer (Mounted conditionally to save GPU) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none z-0">
            <AnimatePresence>
              {index === 0 && (
                <motion.div key="shader-hola" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}} className="absolute scale-125 md:scale-100">
                  <GrainGradient width={1280} height={720} colors={["#c6750c", "#beae60", "#d7cbc6"]} colorBack="#000a0f" softness={0.73} intensity={1} noise={0} shape="corners" speed={2} scale={0.88} rotation={68} offsetX={0.06} />
                </motion.div>
              )}
              {index === 1 && (
                <motion.div key="shader-hello" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}} className="absolute scale-125 md:scale-100">
                  <GrainGradient width={1280} height={720} colors={["#0c6cc6", "#63bfaf", "#c6d7d3"]} colorBack="#000e0f" softness={0.7} intensity={0.15} noise={0.5} shape="wave" speed={2} scale={1.72} rotation={40} />
                </motion.div>
              )}
              {index === 2 && (
                <motion.div key="shader-namaste" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}} className="absolute scale-125 md:scale-100">
                  <GrainGradient width={1280} height={720} colors={["#7300ff", "#eba8ff", "#00bfff", "#2b00ff"]} colorBack="#000000" softness={0.5} intensity={0.5} noise={0.25} shape="corners" speed={1} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Liquid Mask Layer */}
          <div className="absolute inset-0 bg-[#050505] mix-blend-darken flex items-center justify-center z-10">
            <div style={{ filter: "url(#goo)" }} className="relative flex items-center justify-center w-full h-full">
              <AnimatePresence>
                {index === 0 && (
                  <motion.span key="hola" initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(12px)" }} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute text-white font-bangers text-[clamp(5rem,10vw,10rem)] leading-none uppercase tracking-wide">
                    HOLA
                  </motion.span>
                )}
                {index === 1 && (
                  <motion.span key="hello" initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(12px)" }} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute text-white font-eagle text-[clamp(3.5rem,7vw,7rem)] leading-none uppercase">
                    HELLO
                  </motion.span>
                )}
                {index === 2 && (
                  <motion.span key="namaste" initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(12px)" }} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute text-white font-jaini text-[clamp(5rem,10vw,10rem)] leading-none pb-4">
                    नमस्ते
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Progress Bar - FULL BLEED */}
          <div className="absolute bottom-0 left-0 right-0 w-full h-[4px] md:h-[5px] bg-[#111111] z-10">
            <div ref={progressRef} className="absolute top-0 left-0 h-full bg-[#E10600] w-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteLoader;
