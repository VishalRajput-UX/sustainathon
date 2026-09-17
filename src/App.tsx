import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home/Home';
import PageTransition from './components/layout/PageTransition';

// Placeholder pages
const About = () => <PageTransition><div className="h-screen flex items-center justify-center pt-24 text-white"><h1 className="text-4xl">About</h1></div></PageTransition>;
const Tracks = () => <PageTransition><div className="h-screen flex items-center justify-center pt-24 text-white"><h1 className="text-4xl">Tracks</h1></div></PageTransition>;
const Sponsors = () => <PageTransition><div className="h-screen flex items-center justify-center pt-24 text-white"><h1 className="text-4xl">Sponsors</h1></div></PageTransition>;
const FAQ = () => <PageTransition><div className="h-screen flex items-center justify-center pt-24 text-white"><h1 className="text-4xl">FAQ</h1></div></PageTransition>;

import Cursor from './components/ui/Cursor';
import SiteLoader from './components/ui/SiteLoader';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<About />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/faq" element={<FAQ />} />
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
