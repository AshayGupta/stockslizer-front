import React from 'react';
import "./Overview.scss"

const Overview = () => {
  return (
    <div className='overview-container'>
      <div className='card about-card'>
        <h3 className='text-card-title'>About</h3>
        <p>
          Reliance Industries Limited is an Indian multinational conglomerate company, headquartered in Mumbai, India. Reliance is India's largest company by market value and is among the world's most profitable companies. The company's businesses span hydrocarbon exploration and production, petroleum refining and marketing, petrochemicals, advanced materials, composites, telecom, and retail.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="card">
          <h1>Overview</h1>
        </div>

        <div className="card">
          <h1>Overview</h1>
        </div>

        <div className="card">
          <h1>Overview</h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
