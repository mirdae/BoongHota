import React, { useState } from 'react';
import Boong from '../FoodIcons/Boong';
import Ho from '../FoodIcons/Ho';
import Ta from '../FoodIcons/Ta';
import Modal from '../Modal';

import './styles.scss';

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = async (e) => {
    e.preventDefault();
    await setOpenModal(true);
    setOpenModal(false);
  };

  return (
    <div className="landing-container">
      <main>
        <Boong />
        <Ta />
        <Ho />
      </main>
      <button onClick={handleModal}>붕호타 + </button>
      <Modal openModal={openModal} />
    </div>
  );
};

export default LandingPage;
