import { useCallback } from 'react';

const useFullMap = (window: any, ref: any) => {
  const { kakao } = window;

  const displayMarker = useCallback(
    (locPosition, message, map) => {
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
    },
    [kakao],
  );

  const getAddress = useCallback(
    (map) => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (
          position: any,
        ) {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
          const locPosition = new kakao.maps.LatLng(lat, lon);
          const message = '<div style="padding:5px; ">내 위치</div>';

          displayMarker(locPosition, message, map);
        });
      } else {
        const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
        const message = 'geolocation을 사용할수 없어요..';

        displayMarker(locPosition, message, map);
      }
    },
    [displayMarker, kakao, window],
  );

  const drawMap = useCallback(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(ref.current, options);
    getAddress(map);
  }, [getAddress, kakao, ref]);

  return { drawMap };
};

export default useFullMap;
