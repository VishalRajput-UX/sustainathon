import React from 'react';

interface PortfolioCardProps {
  item: {
    id: number;
    title: string;
    image: string;
  };
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div 
      className="group relative rounded-[24px] overflow-hidden bg-[#e0e0e0] flex-shrink-0 cursor-pointer
        w-[78vw] h-[450px]
        md:w-[350px] md:h-[450px]
        lg:w-[420px] lg:h-[500px]
        transition-transform duration-[400ms] ease-out hover:-translate-y-[10px] hover:scale-[1.02] z-0 hover:z-10"
    >
      <img 
        src={item.image} 
        alt={item.title.replace('\n', ' ')}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
};

export default PortfolioCard;
