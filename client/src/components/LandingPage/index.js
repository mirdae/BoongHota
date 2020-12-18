import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Boong from '../FoodIcons/Boong';
import Ho from '../FoodIcons/Ho';
import Ta from '../FoodIcons/Ta';
import Modal from '../Modal';

import './styles.scss';

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = async (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div className="landing-container">
      <main>
        <Link to="/map/boong">
          <Boong />
        </Link>
        <Link to="/map/ho">
          <Ho />
        </Link>
        <Link to="/map/ta">
          <Ta />
        </Link>
      </main>
      <button onClick={handleModal}>붕호타 + </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default LandingPage;
