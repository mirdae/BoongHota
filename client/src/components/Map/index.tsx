import React, { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import * as S from './MapStyle';

const Map = () => {
  const mapRef: any = useRef();
  const {
    addSelectedGeoLocation,
    notSelectLocation,
    showMap,
    isMapVisible,
  } = useMap(window);
  useEffect(() => {
    if (isMapVisible) {
      showMap(mapRef);
    }
  }, []);

  return (
    <S.MapContainer>
      <S.MapBox ref={mapRef} />
      <S.Button onClick={notSelectLocation} value="back">
        ←
      </S.Button>
      <S.Button onClick={addSelectedGeoLocation} value="add">
        +
      </S.Button>
    </S.MapContainer>
  );
};

export default Map;
