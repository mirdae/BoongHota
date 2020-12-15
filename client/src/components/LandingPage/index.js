import React from 'react';
import Boong from '../FoodIcons/Boong';
import Ho from '../FoodIcons/Ho';
import Ta from '../FoodIcons/Ta';

import './styles.scss';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <main>
        <Boong />
        <Ta />
        <Ho />
      </main>
      <button className="new-btn">붕호타 + </button>
    </div>
  );
};

export default LandingPage;
