import React, { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { MapContainer, MapBox, BackButton, AddButton } from './MapStyle';

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
    <MapContainer>
      <MapBox ref={mapRef} />
      <BackButton onClick={notSelectLocation}> ← </BackButton>
      <AddButton onClick={addSelectedGeoLocation}> + </AddButton>
    </MapContainer>
  );
};

export default Map;
