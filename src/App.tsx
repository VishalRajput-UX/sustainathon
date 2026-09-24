import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home/Home';
import Tracks from './pages/Tracks/Tracks';
import PageTransition from './components/layout/PageTransition';

import About from './pages/About/About';
import Sponsors from './pages/Sponsors/Sponsors';
import Jury from './pages/Jury/Jury';

// const FAQ = () => <PageTransition><div className="h-[100dvh] flex items-center justify-center pt-24 text-white"><h1 className="text-4xl">FAQ</h1></div></PageTransition>;

import Cursor from './components/ui/Cursor';
import SiteLoader from './components/ui/SiteLoader';
import Contact from './pages/Contact/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<About />} />
        <Route path="/tracks" element={<PageTransition><Tracks /></PageTransition>} />
        <Route path="/sponsors" element={<PageTransition><Sponsors /></PageTransition>} />
        <Route path="/jury" element={<PageTransition><Jury /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SiteLoader />
      <Cursor />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
