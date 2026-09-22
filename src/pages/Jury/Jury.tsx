import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

const featuredJury = {
  name: "Mr. Sarvesh Kumar Gupta",
  designation: "Consulting Member of Technical Staff (Senior Principal Engineer)",
  organization: "Oracle",
  bio: "Mr. Sarvesh Kumar Gupta is a Senior Principal Engineer (CMT5) at Oracle specializing in Globally Distributed Databases (GDD), Exascale architectures, and high-performance data platforms. ",
  image: "https://res.cloudinary.com/uj8rnowh/image/upload/v1790004644/sarvesh-kumar-gupta-transparent.png",
  category: ""
};

const juryMembers = [
  {
    id: "01",
    name: "",
    designation: "",
    organization: "",
    image: "",
    expertise: "",
  },
  {
    id: "02",
    name: "",
    designation: "",
    organization: "",
    image: "",
    expertise: "",
  },
  {
    id: "03",
    name: "",
    designation: "",
    organization: "",
    image: "",
    expertise: "",
  },
  {
    id: "04",
    name: "",
    designation: "",
    organization: "",
    image: "",
    expertise: "",
  },
  {
    id: "05",
    name: "",
    designation: "",
    organization: "",
    image: "",
    expertise: "",
  },
  {
    id: "06",
    name: "",
    designation: "",
    organization: "",
    image: "",
    expertise: "",
  }
];

const Jury = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      // Featured reveal
      gsap.fromTo(
        '.featured-reveal',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.featured-section',
            start: 'top 80%',
          }
        }
      );

      // Grid reveal
      gsap.fromTo(
        '.jury-card',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.jury-grid',
            start: 'top 85%',
          }
        }
      );

      // CTA reveal
      gsap.fromTo(
        '.cta-reveal',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 90%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#111111] overflow-x-hidden font-display flex flex-col text-[#F5F5F5]">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[60svh] md:min-h-[70svh] flex flex-col items-center justify-center pt-32 pb-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,111,62,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10">
          <span className="hero-reveal text-xs font-medium uppercase tracking-[0.25em] text-accentOrange mb-6">
            THE MINDS BEHIND THE JUDGING
          </span>
          <h1 className="hero-reveal font-royal uppercase leading-[0.85] tracking-tight mb-8" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>
            MEET THE JURY
          </h1>
          <p className="hero-reveal font-sans text-base md:text-xl text-[#a0a0a0] leading-relaxed max-w-2xl">
            Industry experts, innovators, and technology leaders shaping the future of sustainable innovation.
          </p>
        </div>

        <div className="hero-reveal absolute bottom-8 md:bottom-12 flex flex-col items-center gap-3 opacity-60">
          <span className="text-[9px] uppercase tracking-[0.2em] font-sans">Scroll to explore</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* FEATURED JURY */}
      <section className="featured-section relative w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 z-10 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="featured-reveal w-full lg:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#1a1a1a]" />
            <img 
              src={featuredJury.image} 
              alt={featuredJury.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 border border-white/10" />
            <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-xs font-sans uppercase tracking-widest text-white">
              Featured Jury
            </div>
          </div>

          <div className="featured-reveal w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-xs font-mono tracking-widest text-[#666666] mb-4 uppercase">
              {featuredJury.category}
            </span>
            <h2 className="font-royal text-4xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight mb-4">
              {featuredJury.name}
            </h2>
            <div className="flex flex-col gap-1 mb-8 pb-8 border-b border-white/10 w-full">
              <span className="font-sans text-lg md:text-xl text-white font-medium">
                {featuredJury.designation}
              </span>
              <span className="font-sans text-base md:text-lg text-accentOrange">
                {featuredJury.organization}
              </span>
            </div>
            <p className="font-sans text-[#a0a0a0] leading-relaxed text-sm md:text-base max-w-lg mb-10">
              {featuredJury.bio}
            </p>
            <button className="flex items-center gap-3 group text-sm font-sans font-semibold tracking-widest uppercase transition-colors hover:text-accentOrange">
              VIEW PROFILE
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </button>
          </div>

        </div>
      </section>

      {/* JURY PANEL GRID */}
      <section className="jury-grid relative w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 z-10 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {juryMembers.map((member) => (
            <div 
              key={member.id} 
              className="jury-card group relative flex flex-col bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Image Area */}
              <div className="w-full aspect-[4/5] overflow-hidden relative bg-[#1a1a1a]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                
                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-xs font-mono text-white/30 group-hover:text-white/60 transition-colors">
                  {member.id}
                </div>
              </div>

              {/* Details Area */}
              <div className="flex flex-col p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2 bg-[#111111] relative z-10">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#666666] mb-3">
                  {member.expertise}
                </span>
                <h3 className="font-royal text-2xl md:text-3xl uppercase tracking-tight mb-2 text-white">
                  {member.name}
                </h3>
                <div className="flex flex-col gap-1 mb-8">
                  <span className="font-sans text-sm font-medium text-[#c0c0c0]">
                    {member.designation}
                  </span>
                  <span className="font-sans text-xs text-accentOrange opacity-80">
                    {member.organization}
                  </span>
                </div>
                
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#888888] group-hover:text-white transition-colors">
                    View Profile
                  </span>
                  <span className="text-[#888888] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section relative w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 z-10 bg-[#111111] border-t border-white/5 text-center flex flex-col items-center">
        <h2 className="cta-reveal font-royal uppercase tracking-tight leading-[0.9] text-white mb-6" style={{ fontSize: 'clamp(40px, 6vw, 90px)' }}>
          READY TO BUILD<br />THE FUTURE?
        </h2>
        <p className="cta-reveal font-sans text-[#a0a0a0] max-w-lg mb-12">
          Join innovators, creators, and problem-solvers at Sustain-a-thon 2.0.
        </p>
        
        <div className="cta-reveal flex flex-col sm:flex-row gap-4 items-center">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-black font-sans text-xs font-bold tracking-widest uppercase hover:bg-accentOrange hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            REGISTER NOW ↗
          </Link>
          <Link 
            to="/tracks" 
            className="px-8 py-4 border border-white/20 text-white font-sans text-xs font-bold tracking-widest uppercase hover:border-white transition-colors duration-300"
          >
            EXPLORE HACKATHON
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default Jury;
