// src/components/Loader.js
import React from 'react';

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
