
import { motion } from 'framer-motion';

const team = [
  {
    id: 1,
    name: 'Dr. Rajneesh Kumar Singh',
    role: 'Head of the Department',
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789811760/Dr__Rajneesh_Kumar_Singh.jpg',
  },
  {
    id: 2,
    name: 'Prof. (Dr.) Ajay Shriram Khushwaha',
    role: 'Deputy Head of the Department',
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789811526/WhatsApp_Image_2026-09-18_at_22.26.20.jpg',
  },
  {
    id: 3,
    name: 'Ms. Kushwant Virdi',
    role: 'Co-Convener(Event Coordinator)',
    image: 'https://res.cloudinary.com/uj8rnowh/image/upload/v1789745381/IMG_0869.jpg',
  }
];

export const MeetTheTeam = () => {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 overflow-hidden font-sans">
      
      {/* Decorative Dotted Backgrounds */}
      <div 
        className="absolute top-0 left-0 w-full max-w-[400px] h-[500px] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#c084fc 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
          WebkitMaskImage: 'radial-gradient(ellipse at top left, black, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at top left, black, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-0 right-0 w-full max-w-[400px] h-[500px] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fb923c 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
          WebkitMaskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 max-w-[1400px] mx-auto">
        
      
       

        {/* Headings */}
        <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tight mb-4 text-white">
          Meet The Team
        </h2>
        <p className="text-[#AEAAA5] text-center max-w-2xl text-[15px] md:text-base leading-relaxed">
          Our philosophy is simple; hire great people and give them the resources and support to do their best work.
        </p>

        {/* Team Cards Gallery */}
        <div className="flex gap-4 mt-16 w-full overflow-x-auto pb-10 pt-4 px-4 snap-x snap-mandatory justify-start lg:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="relative w-[240px] md:w-[260px] h-[320px] md:h-[340px] rounded-2xl overflow-hidden shrink-0 snap-center cursor-pointer group bg-[#111]"
              initial={{ filter: 'grayscale(100%)' }}
              whileHover={{ 
                scale: 1.05, 
                filter: 'grayscale(0%)',
                zIndex: 20,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glassmorphism Info Card */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-[14px] p-3 text-white shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-[15px] drop-shadow-md">{member.name}</h3>
                <p className="text-[13px] text-white/90 font-medium drop-shadow-md">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
