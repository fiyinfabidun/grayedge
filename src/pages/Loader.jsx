// src/components/Loader.js
import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <CircleLoader color="#ffed92e6" loading={loading} size={100} />
    </div>
  );
};

export default Loader;
