import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMap from '../../hooks/useMap';
import { RootState } from '../../modules';

import './styles.scss';

const Map = () => {
  const mapRef: any = useRef();
  const isMapVisible = useSelector((state: RootState) => state.map);
  const { addSelectedGeoLocation, showMap } = useMap(window);
  useEffect(() => {
    if (isMapVisible) {
      showMap(mapRef);
    }
  }, []);

  return (
    <div className="mini-map-container">
      <div ref={mapRef} className="mini-map-box"></div>
      <button className="add-btn" onClick={addSelectedGeoLocation}>
        <p>+</p>
      </button>
    </div>
  );
};

export default Map;
