import { useState, useRef, useEffect } from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    id: "01",
    title: "Agriculture, FoodTech ",
    location: "",
    src: "https://zdpdvwhvukelzzbzbjvh.supabase.co/storage/v1/object/public/imported-images/1769123599014-59940f48-5bda-4920-9656-0d97624aa0f1-jeazcu.webp?width=1600&quality=60&format=avif",
    alt: "Sustainability"
  },
  {
    id: "02",
    title: "⁠MedTech / BioTech / HealthTech",
    location: "",
    src: "https://bme.umich.edu/wp-content/uploads/sites/13/2024/10/AMPED-Bioinstr-Lab-s-1536x790.jpg",
    alt: "AI and Emerging Tech"
  },
  {
    id: "03",
    title: "Smart Cities ",
    location: "",
    src: "https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Smart Cities"
  },
  {
    id: "04",
    title: "Cyber Security ",
    location: "PLANET",
    src: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Climate Tech"
  },
  {
    id: "05",
    title: "AI, Data Science ",
    location: "COMMUNITY",
    src: "https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Social Impact"
  },
  {
    id: "06",
    title: "Blockchain & FinTech",
    location: "RESOURCE",
    src: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Circular Economy"
  },
  {
    id: "07",
    title: "Miscellaneous",
    location: "BEYOND",
    src: "https://images.unsplash.com/photo-1577962144759-8dec6b55c952?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Open Innovation"
  }
];

const CinematicRow = ({ item }: { item: typeof ITEMS[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative flex flex-col md:flex-row items-start md:items-center justify-between border-t border-black/10 py-6 md:py-0 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ height: "auto" }}
      animate={{ 
        height: window.innerWidth >= 768 ? (isHovered ? "400px" : "96px") : "auto" 
      }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Background Image Reveal (Desktop Only) */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden pointer-events-none">
        <motion.div 
          className="w-full h-full bg-black/40 absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        />
        <motion.img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: isHovered ? 1 : 1.1, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-row items-center justify-between px-2 md:px-8">
        
        {/* Left Side: Number & Title */}
        <div className="flex items-center gap-4 md:gap-16">
          <span className="font-mono text-sm md:text-base tracking-widest text-black/50 group-hover:text-white/80 transition-colors duration-700">
            {item.id}
          </span>
          <motion.h3 
            className="font-royal text-2xl md:text-[2.5rem] lg:text-[3.5rem] uppercase tracking-tight text-black transition-colors duration-700 m-0"
            animate={{ 
              y: window.innerWidth >= 768 && isHovered ? -8 : 0,
              color: window.innerWidth >= 768 && isHovered ? "#ffffff" : "#000000"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {item.title}
          </motion.h3>
        </div>

        {/* Right Side: Category & Arrow */}
        <div className="flex items-center gap-6">
          <motion.span 
            className="hidden md:block font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
            initial={{ y: 32, opacity: 0, color: "#ffffff" }}
            animate={{ 
              y: isHovered ? 0 : 32, 
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {item.location}
          </motion.span>
          <span className="md:hidden font-sans text-[10px] tracking-widest uppercase text-black/60 mr-2">
            {item.location}
          </span>
          
          <motion.div 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 flex items-center justify-center shrink-0"
            animate={{
              backgroundColor: window.innerWidth >= 768 && isHovered ? "#ffffff" : "transparent",
              borderColor: window.innerWidth >= 768 && isHovered ? "#ffffff" : "rgba(0,0,0,0.2)",
              scale: window.innerWidth >= 768 && isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                rotate: window.innerWidth >= 768 && isHovered ? -45 : 0,
                color: window.innerWidth >= 768 && isHovered ? "#000000" : "#000000"
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <MoveRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const CinematicList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Rows Reveal
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white text-black py-[clamp(5rem,10vw,9rem)] px-4 md:px-8 relative z-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-24 w-full">
          <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.2em] text-black/50 uppercase mb-4 md:mb-6">
            SUSTAIN-A-THON 2.0
          </span>
          <h2 className="font-royal text-4xl md:text-[clamp(3.5rem,7vw,6rem)] leading-[0.9] tracking-tight uppercase mb-4 md:mb-6 text-black">
            BUILD WHAT MATTERS.
          </h2>
          <p className="font-sans text-sm md:text-base text-black/70 max-w-md md:max-w-xl font-normal leading-relaxed">
            Explore the ideas, tracks, and experiences that define Sustain-A-Thon 2.0.
          </p>
        </div>

        {/* Cinematic Rows */}
        <div ref={listRef} className="w-full flex flex-col border-b border-black/10">
          {ITEMS.map((item) => (
            <CinematicRow key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};
