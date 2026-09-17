import { useEffect, useRef, useState } from "react";

;
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth following using GSAP ticker
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      gsap.set(cursor, { x: cursorX, y: cursorY });
    };

    gsap.ticker.add(updateCursor);
    window.addEventListener('mousemove', onMouseMove);

    // Hover interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('a') || target.closest('button')) {
        gsap.to(cursor, { scale: 1.5, duration: 0.3, ease: 'power2.out' });
      } 
      else if (target.closest('.card-image-hover')) {
        gsap.to(cursor, { scale: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.9)', duration: 0.3 });
        gsap.to(text, { opacity: 1, duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('a') || target.closest('button')) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' });
      } 
      else if (target.closest('.card-image-hover')) {
        gsap.to(cursor, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)', duration: 0.3 });
        gsap.to(text, { opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      gsap.ticker.remove(updateCursor);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-white/30 rounded-full pointer-events-none z-[9999] flex items-center justify-center -ml-2 -mt-2 backdrop-blur-sm"
      style={{ transform: 'translate(0,0)' }}
    >
      <span ref={textRef} className="text-black text-[4px] font-bold tracking-widest opacity-0 uppercase">EXPLORE</span>
    </div>
  );
};

export default Cursor;
