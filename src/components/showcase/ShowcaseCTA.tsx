import { motion } from 'framer-motion';

const ShowcaseCTA = () => {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex justify-center items-center mt-8 mb-16 md:mb-24 px-6"
    >
      <a href="https://forms.gle/zbYYm9C4eP87xHm47">
      <button className="bg-black text-white font-medium text-[11px] md:text-[13px] tracking-wider uppercase rounded-full w-[160px] h-[48px] hover:scale-[1.04] hover:bg-[#111] transition-transform duration-300 ease-out flex items-center justify-center">
        Start A Project
      </button></a>
    </motion.div>
  );
};

export default ShowcaseCTA;
