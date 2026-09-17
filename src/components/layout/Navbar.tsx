import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import shardaLogo from '../../assets/images/sharda-logo.png';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'TRACKS', path: '/tracks' },
  { name: 'SPONSOR', path: '/sponsors' },
  { name: 'CONTACT', path: '/faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 w-full p-4 md:p-6 lg:p-10 z-50 pointer-events-none">
        <div className="relative w-full h-full flex items-start justify-between">
          
          {/* LEFT: SUSTAINATHON 2.0 BRAND */}
          <div className="flex items-center space-x-2 md:space-x-3 pointer-events-auto group cursor-pointer transition-opacity duration-300 hover:opacity-80">
            <img src={logo} alt="Sustainathon Logo" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain" />
            <div className="flex items-baseline space-x-1 md:space-x-2">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] leading-none text-white uppercase">
                SUSTAINATHON
              </span>
              <span className="font-royal text-xs sm:text-sm italic tracking-tighter text-[#E86F3E] leading-none">
                2.0
              </span>
            </div>
          </div>

          {/* CENTER: NAVIGATION (Mathematically Centered) */}
          <nav className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex pointer-events-auto items-center justify-center space-x-1 lg:space-x-2 border border-white/5 bg-black/40 backdrop-blur-xl px-4 lg:px-6 py-[8px] lg:py-[10px] rounded-full shadow-2xl">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `relative px-2 lg:px-3 py-1 text-[8px] lg:text-[10px] tracking-[0.15em] lg:tracking-[0.2em] transition-colors duration-300 hover:text-white font-medium ${isActive ? 'text-white' : 'text-white/50'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: SHARDA LOGO */}
          <div className="hidden sm:flex items-center pointer-events-auto group cursor-pointer transition-opacity duration-300 hover:opacity-80">
            <img src={shardaLogo} alt="Sharda Logo" className="h-6 md:h-8 lg:h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
          </div>

          {/* MOBILE FALLBACK RIGHT */}
          <div className="md:hidden flex pointer-events-auto z-50 relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md gap-[4px] relative"
            >
              <span className={`w-4 h-[1px] bg-white transition-transform duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
              <span className={`w-4 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <span className={`w-4 h-[1px] bg-white transition-transform duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center pointer-events-auto md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm px-6 pb-20">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="w-full text-center"
                >
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `block w-full py-4 text-xl tracking-[0.2em] uppercase transition-colors duration-300 ${isActive ? 'text-[#E86F3E] font-bold' : 'text-white/70 hover:text-white font-medium'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-10 left-0 w-full flex justify-center items-center">
              <img src={shardaLogo} alt="Sharda Logo" className="h-1 object-contain opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
