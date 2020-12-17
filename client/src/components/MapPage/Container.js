import React, { useEffect, useRef } from 'react';
import Presenter from './Presenter';

const { kakao } = window;

const Container = () => {
  const ref = useRef();
  let map;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        const locPosition = new kakao.maps.LatLng(lat, lon);
        const message = '<div style="padding:5px; ">내 위치</div>';

        displayMarker(locPosition, message);
      });
    } else {
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      const message = 'geolocation을 사용할수 없어요..';

      displayMarker(locPosition, message);
    }
  };

  // 지도에 마커와 인포윈도우를 표시하는 함수
  const displayMarker = (locPosition, message) => {
    let marker = new kakao.maps.Marker({
      map: map,
      position: locPosition,
    });

    let iwContent = message;
    let iwRemoveable = true;
    let infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(map, marker);
    map.setCenter(locPosition);
  };

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    map = new kakao.maps.Map(ref.current, options);
    getLocation();
  }, []);

  return <Presenter ref={ref} />;
};

export default Container;
