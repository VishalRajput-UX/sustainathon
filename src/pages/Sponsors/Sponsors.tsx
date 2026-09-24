import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import main1 from '../../assets/images/main1.jpg';
import main3 from '../../assets/images/main3.jpg';
import main4 from '../../assets/images/main4.jpg';
import table1 from '../../assets/images/table1.jpg';
import scholarHubLogo from '../../assets/images/ScholarHubWork.svg';
import SponsorPackages from './SponsorPackages';
import Footer from '../../components/layout/Footer';

const sponsorHeroImages = [
  { src: main1, alt: 'Sponsor Editorial 1', isLogo: false },
  { src: scholarHubLogo, alt: 'ScholarHub Sponsor', isLogo: true },
  { src: main3, alt: 'Sponsor Editorial 3', isLogo: false },
  { src: table1, alt: 'Sponsor Editorial 4', isLogo: false },
  { src: main4, alt: 'Sponsor Editorial 5', isLogo: false },
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
            {/* Image 1 */}
            <div className="collage-item relative w-full h-full overflow-hidden group bg-[#1a1a1a]">
              <img src={sponsorHeroImages[0].src} alt={sponsorHeroImages[0].alt} className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </div>
            {/* Image 2 (Logo) */}
            <div className="collage-item relative w-full h-full overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-4 lg:p-6">
              <img src={sponsorHeroImages[1].src} alt={sponsorHeroImages[1].alt} className="w-full h-auto max-h-full object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </div>
            {/* Image 3 */}
            <div className="collage-item relative w-full h-full overflow-hidden group bg-[#1a1a1a]">
              <img src={sponsorHeroImages[2].src} alt={sponsorHeroImages[2].alt} className="w-full h-full object-cover object-[center_30%] transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </div>
            {/* Image 4 */}
            <div className="collage-item relative w-full h-full overflow-hidden group bg-[#1a1a1a]">
              <img src={sponsorHeroImages[3].src} alt={sponsorHeroImages[3].alt} className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </div>
            {/* Text Block */}
            <div className="collage-item relative w-full h-full flex items-center px-1 lg:px-2 xl:px-4">
              <p className="text-[#F5F5F5] text-[12px] lg:text-[14px] xl:text-[15px] leading-[1.1] tracking-tight font-sans max-w-[170px]">
                We craft bold, strategic identities that create lasting impressions, helping your brand stand out and thrive.
              </p>
            </div>
            {/* Image 5 */}
            <div className="collage-item relative w-full h-full overflow-hidden group bg-[#1a1a1a]">
              <img src={sponsorHeroImages[4].src} alt={sponsorHeroImages[4].alt} className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
            </div>
          </div>

          {/* Mobile Strip */}
          <div className="md:hidden flex flex-col gap-4">
             {/* 3 prominent images for mobile in a horizontal flex */}
             <div className="flex gap-[4px] h-[180px] sm:h-[220px]">
                <div className="collage-item relative flex-[0.8] overflow-hidden group bg-[#1a1a1a]">
                  <img src={sponsorHeroImages[0].src} alt={sponsorHeroImages[0].alt} className="w-full h-full object-cover" />
                </div>
                {/* Mobile Logo Block */}
                <div className="collage-item relative flex-[1.2] overflow-hidden group bg-[#E6E6E6] flex items-center justify-center p-3">
                  <img src={sponsorHeroImages[1].src} alt={sponsorHeroImages[1].alt} className="w-full h-auto max-h-full object-contain" />
                </div>
                <div className="collage-item relative flex-[0.9] overflow-hidden group bg-[#1a1a1a]">
                  <img src={sponsorHeroImages[4].src} alt={sponsorHeroImages[4].alt} className="w-full h-full object-cover" />
                </div>
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
