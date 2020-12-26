import React from 'react';
import { Link } from 'react-router-dom';
import Boong from '../Animation/Boong';
import Ho from '../Animation/Ho';
import Ta from '../Animation/Ta';
import Modal from '../Modal/Container';
import useSnackInput from '../../hooks/useSnackInput';

import './styles.scss';

const LandingPage = () => {
  const {
    inputs: { isModalVisible },
    onOpenForm,
  } = useSnackInput();

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
      <button onClick={() => onOpenForm()}>붕호타 + </button>
      {isModalVisible && <Modal />}
    </div>
  );
};

export default LandingPage;
