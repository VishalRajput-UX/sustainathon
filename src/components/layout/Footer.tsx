import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const giantWordRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very subtle reveal for the giant word
      gsap.fromTo(
        giantWordRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: giantWordRef.current,
            start: "top 95%",
          },
        }
      );

      // Continuous subtle atmospheric glow movement to mimic light shifting
      gsap.to(glowRef.current, {
        opacity: 0.8,
        scale: 1.05,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-[100vh] bg-[#0A0A0A] flex flex-col overflow-hidden text-white pt-24"
    >
      {/* MASSIVE ATMOSPHERIC PURPLE GLOW (Exact color theme match) */}
      <div
        ref={glowRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80%] pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.4) 0%, transparent 10%),
            radial-gradient(ellipse at 50% 100%, rgba(138, 43, 226, 0.8) 15%, transparent 40%),
            radial-gradient(ellipse at 50% 100%, rgba(45, 10, 105, 0.9) 30%, transparent 70%)
          `,
          filter: "blur(40px)",
        }}
      />

      {/* TOP CONTENT AREA */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
        
        {/* Left Side: Eyebrow + Email + Nav */}
        <div className="flex flex-col items-start mb-20 md:mb-0">
          <span className="text-[#888888] text-sm mb-2 font-normal">
            Live Limitless
          </span>
          <a
            href="mailto:hackathon@sharda.ac.in"
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-tight text-white hover:text-[#B48EFE] transition-colors duration-500 mb-12 block leading-none"
          >
            hackathon@sharda.ac.in
          </a>
          
          <nav className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-[#888888] font-normal">
            {["How It Works", "Who Benefits", "Events", "Learn More"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: CTA (Left-aligned internally, positioned on right) */}
        <div className="flex flex-col items-start text-left mt-8 md:mt-0">
          <h3 className="text-white text-xl md:text-2xl mb-2 font-medium tracking-tight">
            Upgrade Your Reality
          </h3>
          <p className="text-[#888888] text-sm max-w-[260px] mb-8 leading-relaxed font-normal">
            Join the waitlist and get priority access
          </p>
          
          <button className="bg-white text-black font-medium text-sm rounded-full px-7 py-3 hover:scale-105 transition-transform duration-300 ease-out">
            Register Now
          </button>
        </div>
      </div>

      {/* LARGE NEGATIVE SPACE */}
      <div className="flex-grow min-h-[25vh] md:min-h-[30vh]"></div>

      {/* BOTTOM SECTION (Socials + Word + Meta) */}
      <div className="relative z-10 w-full flex flex-col pb-8">
        
        {/* Social Row */}
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between gap-x-6 gap-y-3 pb-5 text-[14px] md:text-[15px] text-white font-medium">
          <a href="#" className="hover:text-[#B48EFE] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#B48EFE] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#B48EFE] transition-colors">Twitter X</a>
          <a href="#" className="hover:text-[#B48EFE] transition-colors">Youtube</a>
        </div>

        {/* Thin Divider */}
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* GIANT BRAND WORD */}
        <div className="w-full flex items-center justify-center px-4 md:px-12 pt-10 pb-2 overflow-hidden">
          <h2
            ref={giantWordRef}
            className="font-sans font-medium text-[clamp(1.5rem,10vw,18rem)] text-white uppercase leading-[0.75] tracking-[-0.04em] text-center w-full max-w-[1920px] mx-auto"
          >
            SUSTAINATHON
          </h2>
        </div>

        {/* BOTTOM META AREA */}
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#888888] font-normal">
          <p>© 2026 Sustainathon. All Rights Reserved.</p>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/whos.vishuu/" className="hover:text-white transition-colors">Developed By</a>
            <a href="https://www.instagram.com/whos.vishuu/" className="hover:text-white transition-colors">Vishal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
