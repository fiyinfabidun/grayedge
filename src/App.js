// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import 'aos/dist/aos.css';
import Loader from './pages/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
    } else {
      window.addEventListener('load', () => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
    }
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      {isLoading && <Loader fadeOut={fadeOut} />}
      {!isLoading && <Home />}
    </div>
  );
}

export default App;
