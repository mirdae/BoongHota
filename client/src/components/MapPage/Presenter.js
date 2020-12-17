import React, { forwardRef } from 'react';
import './styles.scss';

const Presenter = forwardRef((props, ref) => {
  return (
    <div className="map-container">
      <div id="map" className="map-box" ref={ref}></div>
    </div>
  );
});

export default Presenter;
