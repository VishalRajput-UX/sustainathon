import { motion } from 'framer-motion';
import { heroCards } from '../../data/heroCards';
import PortfolioCard from './PortfolioCard';

const InfinitePortfolioCarousel = () => {
  // We duplicate the items to ensure enough content for seamless scrolling
  // 5 items, duplicated enough times. One loop should be exact width of one full set of items.
  const items = heroCards;
  
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full overflow-hidden relative"
    >
      <div className="flex w-max animate-marquee">
        {/* First Set */}
        <div className="flex pr-4 md:pr-4 gap-4">
          {items.map((item, idx) => (
            <PortfolioCard key={`set1-${item.id}-${idx}`} item={item} />
          ))}
        </div>
        {/* Second Set */}
        <div className="flex pr-4 md:pr-4 gap-4">
          {items.map((item, idx) => (
            <PortfolioCard key={`set2-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InfinitePortfolioCarousel;
