import { motion } from 'framer-motion';
import { heroCards } from '../../data/heroCards';
import PortfolioCard from './PortfolioCard';
import marque1 from '../../assets/images/marque1.jpeg';


const InfinitePortfolioCarousel = () => {
  // Construct new array with the requested images at position 3 and 6 (indices 2 and 5)
  const portfolioItems = [
    heroCards[0],
    heroCards[6],
    { id: 101, title: '', image: marque1 },
    heroCards[7],
    heroCards[8],
    heroCards[9]
  ].filter(Boolean);
  
  // We duplicate the items to ensure enough content for seamless scrolling
  const items = portfolioItems;
  
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
