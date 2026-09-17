import { useEffect, useRef, useState } from "react";

;
import { heroCards } from '../../data/heroCards';
import gsap from 'gsap';

const HeroCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Entrance Animation
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(cardRefs.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 0.8,
        opacity: 0,
        filter: 'blur(10px)',
      });

      gsap.set(tagRefs.current, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline({ delay: 4.8 });

      // Calculate relative x offsets for spreading based on screen width
      const isMobile = window.innerWidth < 768;
      const spreadX = isMobile 
        ? [-120, -60, 0, 60, 120] 
        : [-380, -180, 0, 180, 380];
      const spreadY = isMobile
        ? [60, 30, 0, 20, 50]
        : [30, 10, 0, 15, 35];
      const rotations = [-12, -6, 0, 6, 12];

      // Center card (index 2) appears first
      tl.to(cardRefs.current[2], {
        scale: isMobile ? 0.8 : 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
      });

      // Then inner cards (1 and 3)
      tl.to([cardRefs.current[1], cardRefs.current[3]], {
        x: (i) => (i === 0 ? spreadX[1] : spreadX[3]),
        y: (i) => (i === 0 ? spreadY[1] : spreadY[3]),
        rotation: (i) => (i === 0 ? rotations[1] : rotations[3]),
        scale: isMobile ? 0.7 : 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
      }, "-=0.6");

      // Then outer cards (0 and 4)
      tl.to([cardRefs.current[0], cardRefs.current[4]], {
        x: (i) => (i === 0 ? spreadX[0] : spreadX[4]),
        y: (i) => (i === 0 ? spreadY[0] : spreadY[4]),
        rotation: (i) => (i === 0 ? rotations[0] : rotations[4]),
        scale: isMobile ? 0.6 : 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
      }, "-=0.6");

      // Tags appear
      tl.to(tagRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] flex items-center justify-center mt-8 perspective-1000">
      {heroCards.map((card, i) => {
        
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== i;

        return (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ 
              zIndex: isHovered ? 50 : card.zIndex,
            }}
          >
            {/* The wrapper that handles the hover transition so we don't conflict with GSAP */}
            <div 
              className="relative transition-all duration-500 ease-out cursor-pointer"
              style={{
                transform: isHovered ? 'translateY(-30px) scale(1.1) rotate(0deg)' : 'translateY(0) scale(1)',
                filter: isOtherHovered ? 'brightness(0.5) blur(2px)' : 'brightness(1) blur(0px)',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Floating Tag */}
              {card.tag && (
                <div 
                  ref={(el) => (tagRefs.current[i] = el)}
                  className={`absolute ${i === 2 ? '-bottom-6 left-1/2 -translate-x-1/2' : '-top-6 left-1/2 -translate-x-1/2'} 
                  bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg transition-transform duration-300 z-10`}
                  style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                >
                  {card.tag}
                </div>
              )}

              {/* Card Image and Content */}
              <div 
                className={`
                  relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black
                  ${card.size === 'large' ? 'w-[420px] h-[280px]' : card.size === 'medium' ? 'w-[340px] h-[240px]' : 'w-[280px] h-[200px]'}
                  max-w-[80vw]
                `}
              >
                <img 
                  src={card.image} 
                  alt={card.title.replace('\n', ' ')} 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex items-center justify-center text-center">
                  <h3 className="text-white font-display font-medium text-sm md:text-lg tracking-widest uppercase leading-snug whitespace-pre-line">
                    {card.title}
                  </h3>
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCards;
