import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sponsorshipPackages = [
  {
    number: "01",
    name: "PLATINUM",
    description: "Premium partnership package for organizations seeking maximum visibility and engagement.",
    benefits: [
      "Title sponsorship positioning",
      "Keynote speaking opportunity",
      "Prime booth location",
      "Access to participant resumes",
      "Dedicated brand integration"
    ],
    cta: "₹1,50,000/-"
  },
  {
    number: "02",
    name: "GOLD",
    description: "Partnership package designed for meaningful event visibility and engagement.",
    benefits: [
      "Prominent logo placement",
      "Workshop hosting opportunity",
      "Standard booth location",
      "Mentorship integration",
      "Social media features"
    ],
    cta: "₹1,00,000/-"
  },
  {
    number: "03",
    name: "SILVER",
    description: "A sponsorship option for organizations looking to support innovation and engage with the community.",
    benefits: [
      "Logo on website and banners",
      "Event attendance passes",
      "Swag distribution",
      "Community recognition"
    ],
    cta: "₹50,000/-"
  }
];

const SponsorPackages = () => {
  const containerRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Reveal
      const introElements = introRef.current?.children;
      if (introElements) {
        gsap.fromTo(
          introElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 85%',
            }
          }
        );
      }

      // Cards Reveal
      const cards = gridRef.current?.querySelectorAll('.sponsor-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            }
          }
        );
      }

      // Bottom CTA Reveal
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-nav-theme="dark" ref={containerRef} className="w-full bg-[#111111] text-[#F5F5F5] py-24 md:py-32 overflow-hidden flex flex-col relative z-10 border-t border-white/10">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-[1.5vw]">
        
        {/* INTRO AREA */}
        <div ref={introRef} className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10 mb-20 md:mb-32">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-accentOrange drop-shadow-md">
              BECOME A SPONSOR
            </span>
            <h2 
              className="font-royal uppercase tracking-tight leading-[0.85] text-white"
              style={{ fontSize: 'clamp(56px, 8vw, 140px)' }}
            >
              PARTNER WITH<br />SUSTAIN-A-THON 2.0
            </h2>
          </div>
          
          <div className="md:max-w-[280px] lg:max-w-[320px] pb-2 md:pb-4">
            <p className="text-base md:text-lg leading-relaxed text-[#c0c0c0] font-sans">
              Connect your brand with innovation, technology, student talent, and emerging ideas shaping the future.
            </p>
          </div>
        </div>

        {/* PACKAGE GRID */}
        {/* We use a 1px gap on a slightly lighter background to create ultra-thin, sharp borders */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 mb-32">
          {sponsorshipPackages.map((pkg, i) => (
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPv_oGmMVn9GDlfjoigGhE1N8wAmv6P5Jt-mHDuQo5N-Upyg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              key={pkg.number} 
              className="sponsor-card flex flex-col bg-[#111111] hover:bg-[#151515] transition-colors duration-500 min-h-[500px] lg:min-h-[600px] p-8 md:p-10 lg:p-12 relative group cursor-pointer block"
            >
              {/* Top: Number & Name */}
              <div className="flex flex-col gap-2 mb-12">
                <span className={`font-mono text-sm tracking-widest ${i === 0 ? 'text-accentOrange' : 'text-[#888888]'}`}>
                  {pkg.number}
                </span>
                <h3 className={`font-royal uppercase tracking-tight text-3xl md:text-4xl ${i === 0 ? 'text-white' : 'text-[#e0e0e0]'}`}>
                  {pkg.name}
                </h3>
              </div>

              {/* Middle: Description */}
              <p className="font-sans text-sm md:text-base text-[#a0a0a0] leading-relaxed max-w-[90%] mb-12">
                {pkg.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-col mb-16">
                <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#666666] mb-4 pb-4 border-b border-white/10">
                  BENEFITS
                </h4>
                <ul className="flex flex-col gap-3">
                  {pkg.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="font-sans text-[13px] md:text-sm text-[#d0d0d0] flex items-start gap-3">
                      <span className="text-accentOrange mt-1 opacity-70 text-[10px]">●</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: CTA */}
              <div className="mt-auto pt-8 flex items-center gap-3 border-t border-white/5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-xs font-semibold tracking-wider uppercase text-white group-hover:text-accentOrange transition-colors">
                  {pkg.cta}
                </span>
                <span className="text-white group-hover:text-accentOrange transition-all duration-300 transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* BOTTOM CTA STRIP */}
        <a 
          ref={ctaRef as any} 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdPv_oGmMVn9GDlfjoigGhE1N8wAmv6P5Jt-mHDuQo5N-Upyg/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-t border-b border-white/10 py-16 md:py-24 gap-12 group cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 block"
        >
          <h2 
            className="font-royal uppercase tracking-tight leading-[0.9] text-white max-w-4xl"
            style={{ fontSize: 'clamp(40px, 6vw, 90px)' }}
          >
            READY TO BUILD SOMETHING<br />MEANINGFUL TOGETHER?
          </h2>
          <div className="flex items-center gap-4 text-accentOrange md:pb-4">
            <span className="font-sans text-sm md:text-base font-semibold tracking-wider uppercase">
              BECOME A SPONSOR
            </span>
            <span className="text-xl md:text-2xl transition-transform duration-500 transform group-hover:translate-x-4">
              →
            </span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default SponsorPackages;
