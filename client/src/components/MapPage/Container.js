import React, { useEffect, useRef } from 'react';
import Presenter from './Presenter';

const { kakao } = window;

const Container = () => {
  const ref = useRef();

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(ref.current, options);
  }, []);

  return <Presenter ref={ref} />;
};

export default Container;
