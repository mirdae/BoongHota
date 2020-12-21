import React, { forwardRef } from 'react';
import './styles.scss';

const Map = forwardRef(({ addNewPlace }, ref) => {
  return (
    <div className="mini-map-container">
      <div ref={ref} className="mini-map-box"></div>
      <button className="add-btn" onClick={addNewPlace}>
        <p>+</p>
      </button>
    </div>
  );
});

export default Map;
