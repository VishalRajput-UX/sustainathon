import { motion } from 'framer-motion';

const ShowcaseHeading = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex justify-center items-center overflow-hidden pt-12 md:pt-24 pb-8"
    >
     <h2
  className="
    font-display
    font-[1000]
    uppercase
    tracking-tighter
    text-center
    leading-[0.85]
    text-[15vw]
    md:text-[11vw]
    lg:text-[10vw]
    text-liquid
    m-0
    scale-x-[1.12]
  "
>
  SUSTAINATHON
</h2>
    </motion.div>
  );
};

export default ShowcaseHeading;
