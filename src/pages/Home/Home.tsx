import { Suspense, lazy } from 'react';
import Hero from '../../components/hero/Hero';

// Below-fold lazy components
const EventTimeline = lazy(() => import('../../components/ui/EventTimeline'));
const PortfolioShowcaseSection = lazy(() => import('../../components/showcase/PortfolioShowcaseSection'));
const StoryScrollTransition = lazy(() => import('../../components/ui/StoryScrollTransition'));
const CinematicList = lazy(() => import('../../components/ui/cinematic-list').then(m => ({ default: m.CinematicList })));
const Footer = lazy(() => import('../../components/layout/Footer'));

const Home = () => {
  return (
    <main className="w-full bg-black min-h-[100dvh]">
      <Hero />
      <Suspense fallback={<div className="h-[100vh] w-full bg-black" />}>
        <StoryScrollTransition 
          section1={<PortfolioShowcaseSection />} 
          section2={<EventTimeline />} 
        />
        <CinematicList />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
