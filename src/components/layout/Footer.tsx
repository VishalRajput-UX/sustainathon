import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LogoCloud } from "../ui/logo-cloud-4";
import scholarHubLogo from "../../assets/images/ScholarHubWork.svg";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  {
    src: scholarHubLogo,
    alt: "ScholarHub Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/31/319eeae853dd1af99d442b6c16b6c38dc52a66a719f8e502c65f85d26255cbd3.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/2b/2bcdd4124223e3bf8e66bc08ce0ac32a6cc42ffe3584bbecfd377847176a188d.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/fc/fc7b090ebcfc468d24a1dc482b2db1fcbfd99ca14568552a30ce553d6dda7fcb.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/56/5624b7c243ac8d60e848fb5ea222ec932c1600df54a2762238b37498372fb0c8.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/90/90f01a9537335666282ae5acc80bd4305f86d085a92d60904c3aa3ccc4414570.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/e8/e8514b1206f79e1abdafcc1d2632393cc7cfbcbbe25426ac5143b17b184b56b8.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/96/96517bce3574d648280ff639d01d9889f354b488b3f826db5df746d730232a0c.svg",
    alt: "Clerk Logo",
  },
];

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
            Mail Us At
          </span>
          <a
            href="mailto:hackathon@sharda.ac.in"
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-tight text-white hover:text-[#B48EFE] transition-colors duration-500 mb-12 block leading-none"
          >
            hackathon@sharda.ac.in
          </a>
          
          
        </div>

        {/* Right Side: CTA (Left-aligned internally, positioned on right) */}
        <div className="flex flex-col items-start text-left mt-8 md:mt-0">
          <h3 className="text-white text-xl md:text-2xl mb-2 font-medium tracking-tight">
           Innovate For Impact
          </h3>
          <p className="text-[#888888] text-sm max-w-[260px] mb-8 leading-relaxed font-normal">
            Innovate today for a sustainable tomorrow
          </p>
          <a href="https://forms.gle/zbYYm9C4eP87xHm47">
          <button className="bg-white text-black font-medium text-sm rounded-full px-7 py-3 hover:scale-105 transition-transform duration-300 ease-out">
            Register Now
          </button></a>
        </div>
      </div>

      {/* SPONSOR LOGO MARQUEE (in negative space) */}
      <div className="relative z-10 w-full flex-grow min-h-[25vh] md:min-h-[30vh] flex flex-col justify-center py-10">
        <div className="w-full max-w-[1920px] mx-auto">
          <p className="text-center text-sm font-medium text-[#888888] mb-6 tracking-wide uppercase px-6 md:px-12">
            Trusted by Industry Leaders
          </p>
          <div className="w-full">
            <LogoCloud logos={logos} />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION (Socials + Word + Meta) */}
      <div className="relative z-10 w-full flex flex-col pb-8">
        
        {/* Social Row */}
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between gap-x-6 gap-y-3 pb-5 text-[14px] md:text-[15px] text-white font-medium">
          <a href="https://www.instagram.com/_team_infusion_/" className="hover:text-[#B48EFE] transition-colors">Instagram</a>
          <a href="https://chat.whatsapp.com/DxDyWzt3cPV9bqY1keIntq" className="hover:text-[#B48EFE] transition-colors">Whatsapp</a>
          <a href="#" className="hover:text-[#B48EFE] transition-colors">Twitter X</a>
          <a href="https://www.youtube.com/@shardauniversity" className="hover:text-[#B48EFE] transition-colors">Youtube</a>
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
