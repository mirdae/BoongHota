import React from 'react';
import useMap from '../../hooks/useMap';
import useForm from '../../hooks/useForm';
import Map from '../Map';
import Form from '../Form';
import * as S from './ModalStyle';

const Modal = () => {
  const { onClose } = useForm();
  const { isMapVisible } = useMap(window);

  return (
    <S.ModalContainer onClick={onClose}>
      {isMapVisible ? <Map /> : <Form />}
    </S.ModalContainer>
  );
};

export default Modal;
