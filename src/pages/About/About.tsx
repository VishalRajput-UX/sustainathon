import PageTransition from '../../components/layout/PageTransition';
import { HoverExpandGallery } from '../../components/ui/hover-expand-gallery';
import DecryptedText from '../../components/ui/DecryptedText';
import TextType from '../../components/ui/TextType';
import { EditorialTeamScrollScene } from '../../components/ui/EditorialTeamScrollScene';
import { MeetTheTeam } from '../../components/ui/meet-the-team';
import Footer from '../../components/layout/Footer';

// Use actual existing local assets for the images

const aboutImages = [
  {
    src: "https://res.cloudinary.com/uj8rnowh/image/upload/v1789746243/DSC_0523.jpg",
    alt: "Sustainathon Event Atmosphere",
    code: "01 / 08",
  },
  {
    src: "https://res.cloudinary.com/uj8rnowh/image/upload/v1789746231/DSC_0206.jpg",
    alt: "Hackathon Participants",
    code: "02 / 08",
  },
  {
    src: "https://res.cloudinary.com/uj8rnowh/image/upload/v1789746237/DSC_0131.jpg",
    alt: "Coding and Technology",
    code: "03 / 08",
  },
  {
    src: "https://res.cloudinary.com/uj8rnowh/image/upload/v1789746229/DSC_0146.jpg",
    alt: "Team Collaboration",
    code: "04 / 08",
  },
  {
    src: "https://res.cloudinary.com/uj8rnowh/image/upload/v1789746242/DSC_0551.jpg",
    alt: "Brainstorming Ideas",
    code: "05 / 08",
  },
  {
    src: "https://res.cloudinary.com/u79xuib0/image/upload/v1789635927/WhatsApp_Image_2026-09-17_at_2.31.21_PM_1.jpg",
    alt: "Project Presentation",
    code: "06 / 08",
  },
  {
    src: "https://res.cloudinary.com/uj8rnowh/image/upload/v1789746231/DSC_0149.jpg",
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
      <main className="min-h-screen bg-[#0A0A0A] font-display text-white selection:bg-accentOrange selection:text-white pt-32 md:pt-40 relative overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section data-nav-theme="dark" className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="text-center mb-12 md:mb-20">
            <p className="mb-4 text-xs font-mono font-medium uppercase tracking-[0.25em] text-accentOrange">
              INFUSION
            </p>
            <h1 className="font-royal text-[clamp(2.5rem,5.5vw,5.5rem)] uppercase leading-[1] tracking-tight text-white max-w-4xl mx-auto flex flex-col items-center">
              <TextType
                as="span"
                text="WHERE IDEAS"
                loop={false}
                showCursor={false}
                typingSpeed={70}
                startOnVisible={true}
              />
              <TextType
                as="span"
                text="MEET INOVATION"
                className="text-gradient-wave"
                loop={false}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.8}
                typingSpeed={70}
                initialDelay={800}
                startOnVisible={true}
              />
            </h1>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-[#AEAAA5] max-w-2xl mx-auto">
              <DecryptedText
                text="INFUSION is more than a Society it is a community, a movement, and a collection of people building the future. Explore the archive of previous events."
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
        <section data-nav-theme="dark" className="relative z-10 w-full mb-24 px-2 md:px-4">
          <HoverExpandGallery images={aboutImages} initialActive={1} />
        </section>

        {/* MEET THE TEAM SECTION (Re-added per request) */}
        <MeetTheTeam />

        {/* EDITORIAL -> TEAM CINEMATIC SCROLL */}
        <EditorialTeamScrollScene />

        {/* FOOTER */}
        <Footer />
      </main>
    </PageTransition>
  );
};

export default About;
