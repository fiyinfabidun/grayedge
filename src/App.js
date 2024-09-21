// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import 'aos/dist/aos.css';
import Loader from './pages/Loader';

function App() {
  const [loading, setLoading] = useState(true);

 
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };

  useEffect(() => {
    const handleFontsLoaded = () => {
      if (document.fonts) {
        return document.fonts.ready;
      }
      return Promise.resolve();
    };

    const handlePageLoaded = () => {
      return new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.addEventListener('load', resolve);
        }
      });
    };

 
    Promise.all([handleFontsLoaded(), handlePageLoaded()]).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      {loading ? <Loader loading={loading} /> : <Home />} 
    </div>
  );
}

export default App;
