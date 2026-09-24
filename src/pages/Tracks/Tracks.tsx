import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import MorphGallery, { MorphItem } from '../../components/ui/morph-gallery';
import { tracks } from '../../data/tracks';
import Footer from '../../components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

// Combine hero slide + 7 themes
const galleryItems: MorphItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    alt: 'Earth from space representing global innovation',
  },
  ...tracks.map(t => ({
    src: t.image,
    alt: t.imageAlt
  }))
];

const Tracks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const totalSlides = 8;
    
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${(totalSlides - 1) * 100}%`,
        pin: true,
        scrub: 1, // Smooth scrubbing
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: 0.5,
          delay: 0.1,
          ease: "power1.inOut"
        },
        onUpdate: (self) => {
          // Convert progress (0 to 1) to an index (0 to 7)
          const newIndex = Math.round(self.progress * (totalSlides - 1));
          setActiveIndex(newIndex);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main data-nav-theme="dark" className="bg-[#101010] font-display text-secondary">
      <div ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden">
        
        {/* WebGL Morphing Background Gallery */}
        <div className="absolute inset-0 z-0">
          <MorphGallery 
            items={galleryItems}
            index={activeIndex}
            arrows={false}
            thumbnails={false}
            loop={false}
            autoplay={0}
            noiseScale={3.0} // Adjust tearing scale
            edge={0.2}
          />
          {/* Vignette & Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-black/40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        </div>

        {/* Dynamic Foreground Content */}
        <div className="absolute inset-0 z-10 flex flex-col pt-24 px-6 md:px-12 lg:px-24 pointer-events-none">
          <AnimatePresence mode="wait">
            {activeIndex === 0 ? (
              <motion.div 
                key="hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full justify-center pb-20 pointer-events-auto"
              >
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-accentOrange drop-shadow-md">
                  Sustain-a-thon 2.0 / Tracks
                </p>
                <h1 className="font-royal text-[clamp(2.5rem,7vw,6.5rem)] uppercase leading-[0.95] tracking-tight drop-shadow-2xl">
                  Big ideas.<br/>
                  <span className="text-accentOrange">Real impact.</span>
                </h1>
                <div className="max-w-xl mt-8">
                  <p className="mb-4 text-xl font-medium leading-snug md:text-2xl drop-shadow-md">
                    Seven themes. One better future.
                  </p>
                  <p className="text-base leading-relaxed text-[#f0f0f0] drop-shadow-md">
                    Choose a challenge that matters to you. Bring your perspective,
                    build with purpose, and turn your idea into a solution for the
                    world around you.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-xs tracking-widest uppercase text-white/70 animate-pulse-slow">
                  Scroll to explore <span aria-hidden="true" className="text-accentOrange">↓</span>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={`theme-${activeIndex}`}
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full justify-center pb-20 pointer-events-auto"
              >
                <div className="max-w-4xl">
                  <span aria-hidden="true" className="mb-4 block font-mono text-xl md:text-2xl text-accentOrange drop-shadow-md">
                    {tracks[activeIndex - 1].id}
                  </span>
                  <h2 className="mb-6 text-[clamp(2rem,5vw,4.5rem)] font-royal uppercase leading-[0.95] tracking-tight text-white drop-shadow-2xl">
                    {tracks[activeIndex - 1].title}
                  </h2>
                  
                  <div className="max-w-2xl backdrop-blur-md bg-black/25 p-5 md:p-6 rounded-2xl border border-white/10 shadow-2xl">
                    <p className="text-base md:text-lg leading-relaxed text-[#f5f5f5]">
                      {tracks[activeIndex - 1].description}
                    </p>
                    
                    <div className="mt-8">
                      <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-accentOrange mb-4">
                        Focus Areas
                      </h3>
                      <ul aria-label="Focus areas" className="flex flex-wrap gap-2 md:gap-3">
                        {tracks[activeIndex - 1].focusAreas.map((area) => (
                          <li key={area} className="text-xs md:text-sm font-medium leading-relaxed text-white bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20 transition-colors hover:bg-white/20 hover:border-white/40 cursor-default">
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Global Progress Indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 z-20 flex items-center gap-4">
          <div className="text-sm font-mono text-white min-w-[20px]">
            0{activeIndex + 1}
          </div>
          <div className="h-[2px] w-32 md:w-48 bg-white/20 relative overflow-hidden rounded-full">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accentOrange rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((activeIndex + 1) / 8) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="text-sm font-mono text-white/50">
            08
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
};

export default Tracks;
