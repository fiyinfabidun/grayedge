import React, { useState } from 'react';
import sampleVideo from '../images/DreamScapeSequence.mp4'; 

const VideoPlayer = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <div className="video-container">
        <h1>THE STORY UNFOLDS</h1>
      {loading && <div className="loader">Loading...</div>}
      <video controls onLoadedData={handleLoadedData}>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
