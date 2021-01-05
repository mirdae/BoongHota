import { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Shop } from '../types';

const boongImg =
  'https://media.vlpt.us/images/dolarge/post/9df7aa9c-5827-4928-8711-25763612cc5f/%EB%B6%95%EC%96%B4.png';
const hoImg =
  'https://media.vlpt.us/images/dolarge/post/18a0d072-1987-44e6-a8dc-74fb5d40a337/%ED%98%B8%EB%96%A1.png';
const taImg =
  'https://media.vlpt.us/images/dolarge/post/9afdecdf-2a14-4079-9c06-487d657c6c7e/%ED%83%80%EC%BD%94.png';

const useShopList = (window: any, ref: any) => {
  const { kakao } = window;
  const [map, setMap] = useState({ setCenter: (test: any) => {} });
  const { geoLocation, address, isMapVisible } = useSelector(
    (state: RootState) => state.map,
  );
  const { shopList } = useSelector((state: RootState) => state.shop);
  useEffect(() => {
    console.log(map);
    if (Object.keys(map).length === 1) {
      setMap(
        new kakao.maps.Map(ref.current, {
          center: new kakao.maps.LatLng(...geoLocation),
          level: 3,
        }),
      );
    }
  }, [map, kakao, geoLocation, ref]);

  const displayMarker = useCallback(
    (locPosition, message) => {
      if (Object.keys(map).length > 1) {
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
      }
    },
    [kakao, map],
  );

  const getDefaultAddress = useCallback(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function (position: any) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        const locPosition = new kakao.maps.LatLng(lat, lon);
        const message = '<div style="padding:5px; ">내 위치</div>';

        displayMarker(locPosition, message);
      });
    } else {
      const locPosition = new kakao.maps.LatLng(...geoLocation);
      const message = 'geolocation을 사용할수 없어요..';

      displayMarker(locPosition, message);
    }
  }, [displayMarker, kakao, window, geoLocation]);

  const drawMap = useCallback(() => {
    getDefaultAddress();
  }, [getDefaultAddress]);

  const setImage = useCallback(
    (type) => {
      let imageSrc: string;
      let imageSize: any;
      switch (type) {
        case 'boong':
          imageSrc = boongImg;
          imageSize = new kakao.maps.Size(35, 24);
          break;
        case 'ho':
          imageSrc = hoImg;
          imageSize = new kakao.maps.Size(30, 30);
          break;
        case 'ta':
          imageSrc = taImg;
          imageSize = new kakao.maps.Size(30, 30);
          break;
        default:
          imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
          imageSize = new kakao.maps.Size(24, 35);
      }
      return [imageSrc, imageSize];
    },
    [kakao.maps.Size],
  );

  const makeInfoWindow = useCallback(
    (shop: any) => {
      // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
      const iwContent = `<div style="padding:5px;"><p>${shop.name}</p><p>${shop.address}</p><p>${shop.time[0]}-${shop.time[1]}</p></div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
      });
      return infowindow;
    },
    [kakao.maps.InfoWindow],
  );

  const drawMarkers = useCallback(
    (shopList: Shop[]) => {
      let markerArr: any[] = [];
      if (Object.keys(map).length > 1) {
        for (var i = 0; i < shopList.length; i++) {
          const [imageSrc, imageSize] = setImage(shopList[i].type);

          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(...shopList[i].geoLocation),
            image: markerImage,
          });

          markerArr.push(marker);

          const info = makeInfoWindow(shopList[i]);

          // 마커에 마우스오버 이벤트를 등록합니다
          (function (marker, info) {
            kakao.maps.event.addListener(marker, 'mouseover', function () {
              info.open(map, marker);
            });

            kakao.maps.event.addListener(marker, 'mouseout', function () {
              info.close();
            });
          })(marker, info);
        }
      }
      return markerArr;
    },
    [kakao, map, setImage],
  );

  return {
    map,
    shopList,
    geoLocation,
    address,
    isMapVisible,
    drawMap,
    drawMarkers,
  };
};

export default useShopList;
