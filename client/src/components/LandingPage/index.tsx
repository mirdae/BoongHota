import React from 'react';
import { Link } from 'react-router-dom';
import Boong from '../Animation/Boong';
import Ho from '../Animation/Ho';
import Ta from '../Animation/Ta';
import Modal from '../Modal';
import Alert from '../Alert';
import useForm from '../../hooks/useForm';
import * as S from './LandingStyle';

const LandingPage = () => {
  const { onOpenForm, isModalVisible } = useForm();
  return (
    <S.LandingContainer className="landing-container">
      <S.Main>
        <Link to="/map/boong">
          <Boong />
        </Link>
        <Link to="/map/ho">
          <Ho />
        </Link>
        <Link to="/map/ta">
          <Ta />
        </Link>
      </S.Main>
      <S.OpenModalButton message="붕호타 + " onClick={onOpenForm} />
      {isModalVisible && <Modal />}
      <Alert message="붕호타 등록 완료" />
    </S.LandingContainer>
  );
};

export default LandingPage;
