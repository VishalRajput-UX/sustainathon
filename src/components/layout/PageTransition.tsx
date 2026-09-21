;
import { motion } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <motion.div
        className="fixed inset-0 bg-[#111111] z-[100] origin-bottom pointer-events-none"
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ scaleY: 0, opacity: 0 }}
        exit={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
    </>
  );
};

export default PageTransition;
