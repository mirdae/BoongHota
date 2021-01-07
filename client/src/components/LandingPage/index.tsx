import React from 'react';
import { Link } from 'react-router-dom';
import Boong from '../Animation/Boong';
import Ho from '../Animation/Ho';
import Ta from '../Animation/Ta';
import Modal from '../Modal';
import Alert from '../Alert';
import useForm from '../../hooks/useForm';

import './styles.scss';

const LandingPage = () => {
  const { onOpenForm, isModalVisible } = useForm();
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
      <Alert message="붕호타 등록 완료" />
    </div>
  );
};

export default LandingPage;
