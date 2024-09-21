// src/components/Loader.js
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <ClipLoader color="#ffed92e6" loading={loading} size={80} />
    </div>
  );
};

export default Loader;
