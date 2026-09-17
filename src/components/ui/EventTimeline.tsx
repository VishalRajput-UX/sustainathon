import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local images from assets
import main1 from '../../assets/images/table1.jpg';
import main2 from '../../assets/images/main2.jpg';
import main3 from '../../assets/images/table3.jpg';
import idea from '../../assets/images/idea.jpg';


gsap.registerPlugin(ScrollTrigger);

const TIMELINE_DATA = [
  {
    id: 1,
    number: "01",
    title: "REGISTRATION OPENS",
    date: "19th Sept",
    imgSrc: main1,
  },
   {
    id: 2,
    number: "03",
    title: "IDEA SUBMIT",
    date: "1st & 2nd Oct",
    imgSrc: idea,
  },
  {
    id: 3,
    number: "02",
    title: "ONLINE SCREENING",
    date: "8th Nov",
    imgSrc: main2,
  },
  {
    id: 4,
    number: "03",
    title: "GRAND FINALE",
    date: "27 & 28th Oct",
    imgSrc: main3,
  },
  
];

import BackgroundPaths from './BackgroundPaths';

const EventTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
      gsap.fromTo(headlineRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
          }
        }
      );

      // Rows entrance
      if (listRef.current) {
        const rows = listRef.current.children;
        gsap.fromTo(rows,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 40%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-32 md:py-48 px-6 relative overflow-hidden">
      
      {/* Animated Background SVG Layer */}
      <BackgroundPaths />

      {/* Main Content Layer */}
      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        
        {/* Section Headline */}
        <div ref={headlineRef} className="mb-20 md:mb-32 flex flex-col items-start">
          <span className="text-[#8A8A8A] text-[10px] md:text-[12px] tracking-[0.5em] uppercase mb-4 md:mb-6 font-medium">
            SUSTAIN-A-THON 2.0
          </span>
          <h2 className="font-royal text-[clamp(3rem,6vw,5.5rem)] text-white uppercase leading-[0.9] tracking-[-0.02em]">
            EVENT TIMELINE
          </h2>
        </div>

        {/* Timeline List */}
        <ul ref={listRef} className="flex flex-col w-full border-t border-[#222]">
          {TIMELINE_DATA.map((item) => (
            <li 
              key={item.id}
              className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-[#222] hover:border-[#8f0707] transition-colors duration-500 py-6 md:py-12 cursor-pointer hover:z-50 gap-2 md:gap-0"
            >
              <div className="flex justify-between items-center w-full md:w-auto">
                {/* Left Number */}
                <div className="text-[#8A8A8A] text-xs md:text-sm tracking-[0.2em] font-mono group-hover:text-[#E10600] transition-colors duration-500 w-12 md:w-24 shrink-0">
                  {item.number}
                </div>
                {/* Mobile Date */}
                <div className="md:hidden text-[#8A8A8A] text-[9px] tracking-[0.15em] uppercase text-right shrink-0 mt-1">
                  {item.date}
                </div>
              </div>

              {/* Center Title (Rolling Text) */}
              <div className="flex-1 overflow-hidden pr-0 md:pr-4 w-full">
                <div className="relative h-[1.1em] font-royal uppercase text-[clamp(1.3rem,6vw,4.5rem)] leading-[1.1] text-white overflow-hidden w-fit whitespace-nowrap md:whitespace-normal">
                  <span className="block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full transform-gpu">
                    {item.title}
                  </span>
                  <span className="absolute inset-0 block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-[#E10600] italic transform-gpu origin-bottom-left">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Right Date (Desktop) */}
              <div className="hidden md:block text-[#8A8A8A] text-[11px] tracking-[0.25em] uppercase text-right shrink-0">
                {item.date}
              </div>

              {/* Hover Image Reveal */}
              <div className="hidden md:block absolute right-[25%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-[240px] aspect-[4/3] rounded-lg overflow-hidden opacity-0 scale-90 translate-x-8 rotate-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] shadow-2xl">
                {/* Subtle Red Overlay */}
                <div className="absolute inset-0 bg-[#E10600]/10 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] scale-105 group-hover:scale-100" 
                />
              </div>
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default EventTimeline;
