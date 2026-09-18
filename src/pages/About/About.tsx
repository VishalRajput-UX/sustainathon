import PageTransition from "../../components/layout/PageTransition";
import { HoverExpandGallery } from "../../components/ui/hover-expand-gallery";
import Footer from "../../components/layout/Footer";

import PageTransition from '../../components/layout/PageTransition';
import { HoverExpandGallery } from '../../components/ui/hover-expand-gallery';
import DecryptedText from '../../components/ui/DecryptedText';
import Footer from '../../components/layout/Footer';

// Use actual existing local assets for the images
import main1 from '../../assets/images/main1.jpg';
import main2 from '../../assets/images/main2.jpg';
import main3 from '../../assets/images/main3.jpg';
import main4 from '../../assets/images/main4.jpg';
import idea from '../../assets/images/idea.jpg';
import table1 from '../../assets/images/table1.jpg';
import table3 from '../../assets/images/table3.jpg';
import win from '../../assets/images/win.jpg';
import aboutBg from '../../assets/images/about-bg.jpg';

const aboutImages = [
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635926/WhatsApp_Image_2026-09-17_at_2.31.19_PM_2.jpg",
    alt: "Sustainathon Event Atmosphere",
    code: "01 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635926/WhatsApp_Image_2026-09-17_at_2.31.20_PM.jpg",
    alt: "Hackathon Participants",
    code: "02 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635928/WhatsApp_Image_2026-09-17_at_2.31.20_PM_1.jpg",
    alt: "Coding and Technology",
    code: "03 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635928/WhatsApp_Image_2026-09-17_at_2.31.21_PM.jpg",
    alt: "Team Collaboration",
    code: "04 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635926/WhatsApp_Image_2026-09-17_at_2.31.19_PM.jpg",
    alt: "Brainstorming Ideas",
    code: "05 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635927/WhatsApp_Image_2026-09-17_at_2.31.21_PM_1.jpg",
    alt: "Project Presentation",
    code: "06 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635927/WhatsApp_Image_2026-09-17_at_2.31.21_PM_1.jpg",
    alt: "Mentorship Session",
    code: "07 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635927/WhatsApp_Image_2026-09-17_at_2.31.22_PM.jpg",
    alt: "Sustainathon Winners",
    code: "08 / 08",
  },
];

const About = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0A0A0A] font-display text-white selection:bg-accentOrange selection:text-white pt-32 md:pt-40 flex flex-col relative overflow-hidden">

        
        {/* ATMOSPHERIC BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* HERO SECTION */}
        <section className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="text-center mb-12 md:mb-20">
            <p className="mb-4 text-xs font-mono font-medium uppercase tracking-[0.25em] text-accentOrange">
              INFUSION
            </p>
            <h1 className="font-royal text-[clamp(2.5rem,5.5vw,5.5rem)] uppercase leading-[1] tracking-tight text-white max-w-4xl mx-auto">
              WHERE IDEAS
              <br />
              <span className="text-accentOrange">MEET INOVATION</span>
            </h1>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-[#AEAAA5] max-w-2xl mx-auto">

              Sustainathon is more than a hackathon — it is a community, a
              movement, and a collection of people building the future. Explore
              the archive of previous events.
              <DecryptedText
                text="Sustainathon is more than a hackathon — it is a community, a movement, and a collection of people building the future. Explore the archive of previous events."
                animateOn="view"
                speed={40}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                encryptedClassName="text-[#555] font-mono"
              />
            </p>
          </div>
        </section>

        {/* HOVER EXPAND GALLERY - TRULY FULL WIDTH */}
        <section className="relative z-10 w-full mb-24 px-2 md:px-4">
          <HoverExpandGallery images={aboutImages} initialActive={1} />
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </PageTransition>
  );
};

export default About;
