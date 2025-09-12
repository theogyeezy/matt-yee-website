import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import JarvisLoader from './components/JarvisLoader';
import SinglePageApp from './components/SinglePageApp';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import './styles/carbon-override.scss';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [jarvisComplete, setJarvisComplete] = useState(false);
  const location = useLocation();
  
  // Don't show Jarvis loader for admin route or blog routes
  const skipJarvisRoutes = ['/admin', '/blog'].some(route => 
    location.pathname === route || location.pathname.startsWith(route + '/')
  );

  useEffect(() => {
    if (skipJarvisRoutes) {
      setLoading(false);
    } else {
      // Prevent double execution in React.StrictMode
      let isMounted = true;
      
      const timer = setTimeout(() => {
        if (isMounted) {
          setJarvisComplete(true);
          setTimeout(() => {
            if (isMounted) {
              setLoading(false);
            }
          }, 500);
        }
      }, 4000);

      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    }
  }, [skipJarvisRoutes]);

  return (
    <>
      {!skipJarvisRoutes && loading && <JarvisLoader isComplete={jarvisComplete} />}
      {!loading && (
        <Routes>
          <Route path="/" element={<SinglePageApp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
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