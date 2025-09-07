import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import JarvisLoader from './components/JarvisLoader';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Consulting from './pages/Consulting';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [jarvisComplete, setJarvisComplete] = useState(false);
  const location = useLocation();
  
  // Don't show Jarvis loader for admin route
  const isAdminRoute = location.pathname === '/admin';

  useEffect(() => {
    if (isAdminRoute) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setJarvisComplete(true);
        setTimeout(() => setLoading(false), 500);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isAdminRoute]);

  return (
    <>
      {!isAdminRoute && loading && <JarvisLoader isComplete={jarvisComplete} />}
      {!loading && (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;