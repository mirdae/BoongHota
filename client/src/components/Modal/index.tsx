import React from 'react';
import useMap from '../../hooks/useMap';
import Map from '../Map';
import Form from '../Form';
import './styles.scss';

const Modal = () => {
  const { isMapVisible } = useMap(window);
  return (
    <div className={'modal-container'}>{isMapVisible ? <Map /> : <Form />}</div>
  );
};

export default Modal;
