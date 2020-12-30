import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { Link } from 'react-router-dom';
import Boong from '../Animation/Boong';
import Ho from '../Animation/Ho';
import Ta from '../Animation/Ta';
import Modal from '../Modal';
import useForm from '../../hooks/useForm';

import './styles.scss';

const LandingPage = () => {
  const { onOpenForm } = useForm();
  const { isModalVisible } = useSelector((state: RootState) => state.modal);

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
      <button onClick={onOpenForm}>붕호타 + </button>
      {isModalVisible && <Modal />}
    </div>
  );
};

export default LandingPage;
