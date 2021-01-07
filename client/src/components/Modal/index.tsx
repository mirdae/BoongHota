import React from 'react';
import useMap from '../../hooks/useMap';
import useForm from '../../hooks/useForm';
import Map from '../Map';
import Form from '../Form';
import './styles.scss';

const Modal = () => {
  const { onClose } = useForm();
  const { isMapVisible } = useMap(window);

  return (
    <div className={'modal-container'} onClick={onClose}>
      {isMapVisible ? <Map /> : <Form />}
    </div>
  );
};

export default Modal;
