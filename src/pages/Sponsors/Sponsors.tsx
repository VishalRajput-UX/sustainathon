import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { sponsors } from '../../data/sponsors';
import SponsorPackages from './SponsorPackages';
import Footer from '../../components/layout/Footer';

const sponsorHeroImages = [
  { src: sponsors[4].pageLogo, alt: sponsors[4].alt, isLogo: true, url: sponsors[4].url },
  { src: sponsors[0].pageLogo, alt: sponsors[0].alt, isLogo: true, url: sponsors[0].url },
  { src: sponsors[1].pageLogo, alt: sponsors[1].alt, isLogo: true, url: sponsors[1].url },
  { src: sponsors[2].pageLogo, alt: sponsors[2].alt, isLogo: true, url: sponsors[2].url },
  { src: sponsors[3].pageLogo, alt: sponsors[3].alt, isLogo: true, url: sponsors[3].url },
];

const Sponsors = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Phase 2: Collage Reveal
      const images = collageRef.current?.querySelectorAll('.collage-item');
      if (images) {
        gsap.fromTo(
          images,
          { y: 35, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.9, 
            stagger: 0.08, 
            ease: 'power3.out' 
          }
        );
      }

      // Phase 3: Giant Typography Reveal
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: '12%', opacity: 0 },
          { 
            y: '0%', 
            opacity: 1, 
            duration: 1.1, 
            ease: 'power4.out',
            delay: 0.2
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#111111] overflow-x-hidden font-display flex flex-col">
      <section data-nav-theme="dark" 
        ref={containerRef}
        className="relative w-full h-[100svh] min-h-[600px] flex flex-col pt-[max(38px,env(safe-area-inset-top))] overflow-hidden justify-between"
      >
        {/* TOP IMAGE COLLAGE */}
        <div 
          ref={collageRef}
          className="w-full px-2 sm:px-4 md:px-6 lg:px-[1.5vw] mt-10 md:mt-[38px] relative z-20"
        >
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-[0.85fr_0.95fr_1fr_0.9fr_0.75fr_0.85fr] gap-[6px] lg:gap-2 xl:gap-[10px] h-[250px] lg:h-[280px] xl:h-[310px]">
            {/* Image 1 (Logo) */}
            <a href={sponsorHeroImages[0].url} target="_blank" rel="noopener noreferrer" className="collage-item relative w-full h-full overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-4 lg:p-6 cursor-pointer hover:bg-white transition-colors duration-300">
              <img src={sponsorHeroImages[0].src} alt={sponsorHeroImages[0].alt} className="w-full h-auto max-h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </a>
            {/* Image 2 (Logo) */}
            <a href={sponsorHeroImages[1].url} target="_blank" rel="noopener noreferrer" className="collage-item relative w-full h-full overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-4 lg:p-6 cursor-pointer hover:bg-white transition-colors duration-300">
              <img src={sponsorHeroImages[1].src} alt={sponsorHeroImages[1].alt} className="w-full h-auto max-h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </a>
            {/* Image 3 (Logo) */}
            <a href={sponsorHeroImages[2].url} target="_blank" rel="noopener noreferrer" className="collage-item relative w-full h-full overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-4 lg:p-6 cursor-pointer hover:bg-white transition-colors duration-300">
              <img src={sponsorHeroImages[2].src} alt={sponsorHeroImages[2].alt} className="w-full h-auto max-h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </a>
            {/* Image 4 (Logo) */}
            <a href={sponsorHeroImages[3].url} target="_blank" rel="noopener noreferrer" className="collage-item relative w-full h-full overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-4 lg:p-6 cursor-pointer hover:bg-white transition-colors duration-300">
              <img src={sponsorHeroImages[3].src} alt={sponsorHeroImages[3].alt} className="w-full h-auto max-h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </a>
            {/* Text Block */}
            <div className="collage-item relative w-full h-full flex items-center px-1 lg:px-2 xl:px-4">
              <p className="text-[#F5F5F5] text-[12px] lg:text-[14px] xl:text-[15px] leading-[1.1] tracking-tight font-sans max-w-[170px]">
                We craft bold, strategic identities that create lasting impressions, helping your brand stand out and thrive.
              </p>
            </div>
            {/* Image 5 (Logo) */}
            <a href={sponsorHeroImages[4].url} target="_blank" rel="noopener noreferrer" className="collage-item relative w-full h-full overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-4 lg:p-6 cursor-pointer hover:bg-white transition-colors duration-300">
              <img src={sponsorHeroImages[4].src} alt={sponsorHeroImages[4].alt} className="w-full h-auto max-h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </a>
          </div>

          {/* Mobile Strip */}
          <div className="md:hidden flex flex-col gap-4">
             {/* 3 prominent images for mobile in a horizontal flex */}
             <div className="flex gap-[4px] h-[180px] sm:h-[220px]">
                {/* Mobile Logo Block 1 */}
                <a href={sponsorHeroImages[0].url} target="_blank" rel="noopener noreferrer" className="collage-item relative flex-[0.8] overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-3 cursor-pointer">
                  <img src={sponsorHeroImages[0].src} alt={sponsorHeroImages[0].alt} className="w-full h-auto max-h-full object-contain" />
                </a>
                {/* Mobile Logo Block */}
                <a href={sponsorHeroImages[1].url} target="_blank" rel="noopener noreferrer" className="collage-item relative flex-[1.2] overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-3 cursor-pointer">
                  <img src={sponsorHeroImages[1].src} alt={sponsorHeroImages[1].alt} className="w-full h-auto max-h-full object-contain" />
                </a>
                <a href={sponsorHeroImages[2].url} target="_blank" rel="noopener noreferrer" className="collage-item relative flex-[0.9] overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-3 cursor-pointer">
                  <img src={sponsorHeroImages[2].src} alt={sponsorHeroImages[2].alt} className="w-full h-auto max-h-full object-contain" />
                </a>
             </div>
             
             {/* Second row for remaining logos */}
             <div className="flex gap-[4px] h-[120px] sm:h-[150px]">
                <a href={sponsorHeroImages[3].url} target="_blank" rel="noopener noreferrer" className="collage-item relative flex-1 overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-3 cursor-pointer">
                  <img src={sponsorHeroImages[3].src} alt={sponsorHeroImages[3].alt} className="w-full h-auto max-h-full object-contain" />
                </a>
                <a href={sponsorHeroImages[4].url} target="_blank" rel="noopener noreferrer" className="collage-item relative flex-1 overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-3 cursor-pointer">
                  <img src={sponsorHeroImages[4].src} alt={sponsorHeroImages[4].alt} className="w-full h-auto max-h-full object-contain" />
                </a>
             </div>
             {/* Mobile Text Block */}
             <div className="collage-item px-2 mt-2">
                <p className="text-[#F5F5F5] text-[13px] leading-[1.2] tracking-tight font-sans max-w-[280px]">
                  We craft bold, strategic identities that create lasting impressions, helping your brand stand out and thrive.
                </p>
             </div>
          </div>
        </div>

        {/* GIANT TYPOGRAPHY */}
        <div className="w-full flex-grow flex flex-col justify-end overflow-hidden select-none relative z-10 pointer-events-none mt-auto">
          <h1 
            ref={titleRef}
            className="text-[#F5F5F5] uppercase font-royal text-center w-[100vw] whitespace-nowrap ml-[-1vw]"
            style={{
              fontSize: 'clamp(80px, 25vw, 300px)',
              lineHeight: '0.78',
              letterSpacing: '-0.075em',
              transformOrigin: 'bottom center',
              marginBottom: '-1vh'
            }}
          >
            SPONSORS
          </h1>
        </div>
      </section>
      
      <SponsorPackages />
      <Footer />
    </main>
  );
};

export default Sponsors;
