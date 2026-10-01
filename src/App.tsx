import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home/Home';
import PageTransition from './components/layout/PageTransition';
import Cursor from './components/ui/Cursor';
import SiteLoader from './components/ui/SiteLoader';

// Lazy loaded routes (below fold / other pages)
const About = lazy(() => import('./pages/About/About'));
const Tracks = lazy(() => import('./pages/Tracks/Tracks'));
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors'));
const Jury = lazy(() => import('./pages/Jury/Jury'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
        <Route path="/tracks" element={<Suspense fallback={null}><PageTransition><Tracks /></PageTransition></Suspense>} />
        <Route path="/sponsors" element={<Suspense fallback={null}><PageTransition><Sponsors /></PageTransition></Suspense>} />
        <Route path="/jury" element={<Suspense fallback={null}><PageTransition><Jury /></PageTransition></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={null}><PageTransition><Contact /></PageTransition></Suspense>} />
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
