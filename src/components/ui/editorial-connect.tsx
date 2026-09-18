import { motion } from 'framer-motion';
import infusionLogo from '../../assets/images/infusion.png';
import inlineImage from '../../assets/images/main2.jpg';
import ScrollReveal from './ScrollReveal';

export const EditorialConnect = () => {
  return (
    <section className="relative w-full bg-black text-white py-32 md:py-48 overflow-hidden z-20 font-sans">
      
      {/* Top Left Asterisk */}
      <motion.div 
        className="absolute -top-10 left-[-5%] md:left-[5%] text-white pointer-events-none"
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-40 h-40 md:w-64 md:h-64 drop-shadow-2xl">
          <rect x="34" y="5" width="32" height="90" rx="4" />
          <rect x="5" y="34" width="90" height="32" rx="4" />
          <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
          <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      {/* Bottom Right Asterisk */}
      <motion.div 
        className="absolute -bottom-20 right-[-10%] md:right-[-5%] text-white pointer-events-none"
        initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-56 h-56 md:w-96 md:h-96 drop-shadow-2xl">
          <rect x="34" y="5" width="32" height="90" rx="4" />
          <rect x="5" y="34" width="90" height="32" rx="4" />
          <rect x="34" y="5" width="32" height="90" rx="4" transform="rotate(45 50 50)" />
          <rect x="5" y="34" width="90" height="32" rx="4" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[min(94vw,1600px)] mx-auto px-4 flex flex-col items-center text-center">
        
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={3}
          blurStrength={10}
          textClassName="font-sans font-bold text-[clamp(2.5rem,5.5vw,6rem)] xl:text-[7rem] leading-[1.3] md:leading-[1.2] tracking-tight md:tracking-[-0.04em]"
        >
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-2 md:mb-4">
            <span className="word">Hi.</span>
            <span className="word">We</span>
            <span className="word">are</span>
            <span className="word inline-block">
              <img 
                src={infusionLogo} 
                alt="Infusion" 
                className="inline-block h-[1em] md:h-[1.1em] w-auto object-contain translate-y-[-5%]" 
                aria-hidden="true"
              />
            </span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-2 md:mb-4">
            <span className="word">Society.</span>
            <span className="word inline-block">
              <div 
                className="inline-block h-[0.55em] w-[1.1em] rounded-t-[100px] bg-gradient-to-t from-[#821316] to-[#E34E35]"
                style={{ transform: "translateY(15%)" }}
                aria-hidden="true"
              />
            </span>
            <span className="word">And</span>
            <span className="word">we</span>
            <span className="word">are</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2">
            <span className="word border-b-[4px] md:border-b-[5px] border-dotted border-white/70 pb-1 md:pb-2 leading-none">
              Introducing
            </span>
            <span className="word border-b-[4px] md:border-b-[5px] border-dotted border-white/70 pb-1 md:pb-2 leading-none">
              our
            </span>
            <span className="word inline-block">
              <motion.div 
                className="inline-block h-[0.75em] w-[1.4em] rounded-[16px] md:rounded-[24px] overflow-hidden translate-y-[-5%]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={inlineImage} 
                  alt="Club Leaders" 
                  className="w-full h-full object-cover grayscale opacity-90" 
                />
              </motion.div>
            </span>
            <span className="word">club</span>
            <span className="word">leaders</span>
          </div>
        </ScrollReveal>

        {/* Connect Button */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button 
            className="bg-white text-black font-black text-xl md:text-[22px] px-12 py-4 md:px-[60px] md:py-[22px] rounded-[40px] hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Connect
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
