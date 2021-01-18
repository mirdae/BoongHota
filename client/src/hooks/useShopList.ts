import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { Shop } from '../types';
import { BOONG_IMG, HO_IMG, TA_IMG, MARKER } from '../styles/img';

const useShopList = (window: any, ref: any) => {
  const { kakao } = window;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [map, setMap] = useState({ setCenter: (test: any) => {} });
  const { geoLocation, address, isMapVisible } = useSelector(
    (state: RootState) => state.map,
  );
  const { shopList } = useSelector((state: RootState) => state.shop);
  useEffect(() => {
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
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        const iwContent = message;
        const iwRemoveable = true;
        const infowindow = new kakao.maps.InfoWindow({
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
          imageSrc = BOONG_IMG;
          imageSize = new kakao.maps.Size(35, 24);
          break;
        case 'ho':
          imageSrc = HO_IMG;
          imageSize = new kakao.maps.Size(30, 30);
          break;
        case 'ta':
          imageSrc = TA_IMG;
          imageSize = new kakao.maps.Size(30, 30);
          break;
        default:
          imageSrc = MARKER;
          imageSize = new kakao.maps.Size(24, 35);
      }
      return [imageSrc, imageSize];
    },
    [kakao.maps.Size],
  );

  const makeInfoWindow = useCallback(
    (shop: any) => {
      // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
      const iwContent = `
        <div style="
          background-color: #e8ded8;
          background-size: 100%;
          padding: 1em;
          width: 148px;
          height: 100px;
          text-align: center;
          border: 3px solid #8e8986;
          color: #8e8986;
          box-sizing: border-box;
          color: #5d5959;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center
          ">
          <p style="
            font-size:1rem;" >
            ${shop.name}
          </p>
          <p style="
            font-size:12px;
            margin:5px 0">
            ${shop.address}
          </p>
          <p style="
            font-size:11px;">
            ${shop.openTime}-${shop.closeTime}
          </p>
        </div>`;
      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
      });
      return infowindow;
    },
    [kakao.maps.InfoWindow],
  );

  const drawMarkers = useCallback(
    (shopList: Shop[]) => {
      const markerArr: any[] = [];
      if (Object.keys(map).length > 1) {
        for (let i = 0; i < shopList.length; i++) {
          const [imageSrc, imageSize] = setImage(shopList[i].type);

          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
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
