import React from 'react';
import useMap from '../../hooks/useMap';
import Map from './Map';
import ModalForm from './ModalForm';

const Container = () => {
  const { isMapVisible } = useMap(window);
  return (
    <div className={'modal-container'}>
      {isMapVisible ? <Map /> : <ModalForm />}
    </div>
  );
};

export default Container;
