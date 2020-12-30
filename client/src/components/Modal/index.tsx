import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import Map from '../Map';
import Form from '../Form';
import './styles.scss';

const Modal = () => {
  const { isMapVisible } = useSelector((state: RootState) => state.map);
  return (
    <div className={'modal-container'}>{isMapVisible ? <Map /> : <Form />}</div>
  );
};

export default Modal;
