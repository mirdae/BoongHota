import React, { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';

import './styles.scss';

const Map = () => {
  const mapRef: any = useRef();
  const { addNewAddress, isMapVisible, showMap } = useMap(window);
  useEffect(() => {
    if (isMapVisible) {
      showMap(mapRef);
    }
  }, [isMapVisible, showMap]);
  return (
    <div className="mini-map-container">
      <div ref={mapRef} className="mini-map-box"></div>
      <button className="add-btn" onClick={addNewAddress}>
        <p>+</p>
      </button>
    </div>
  );
};

export default Map;
