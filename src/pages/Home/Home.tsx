import Hero from '../../components/hero/Hero';
import EventTimeline from '../../components/ui/EventTimeline';
import PortfolioShowcaseSection from '../../components/showcase/PortfolioShowcaseSection';
import StoryScrollTransition from '../../components/ui/StoryScrollTransition';
import { CinematicList } from '../../components/ui/cinematic-list';
import Footer from '../../components/layout/Footer';

const Home = () => {
  return (
    <main className="w-full bg-black min-h-[100dvh]">
      <Hero />
      <StoryScrollTransition 
        section1={<PortfolioShowcaseSection />} 
        section2={<EventTimeline />} 
      />
      <CinematicList />
      <Footer />
    </main>
  );
};

export default Home;
