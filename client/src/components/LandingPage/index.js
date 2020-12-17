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
    setOpenModal(true);
  };

  return (
    <div className="landing-container">
      <main>
        <Boong />
        <Ta />
        <Ho />
      </main>
      <button onClick={handleModal}>붕호타 + </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default LandingPage;
