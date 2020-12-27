import React, { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';

import './styles.scss';

const Map = () => {
  const ref = useRef();
  const { addNewAddress, isMapVisible, showMap } = useMap(window);
  useEffect(() => {
    if (isMapVisible) {
      showMap(ref);
    }
  }, [isMapVisible]);
  return (
    <div className="mini-map-container">
      <div ref={ref} className="mini-map-box"></div>
      <button
        className="add-btn"
        onClick={(e) => {
          e.preventDefault();
          addNewAddress();
        }}
      >
        <p>+</p>
      </button>
    </div>
  );
};

export default Map;
