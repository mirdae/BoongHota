import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeGeoLocation, changeAddress, toggleMap } from '../modules/map';
import { RootState } from '../modules';

const useMap = (window: any) => {
  const dispatch = useDispatch();
  const { kakao } = window;
  const { geoLocation, address, isMapVisible } = useSelector(
    (state: RootState) => state.map,
  );
  const getAddress = useCallback(
    (lat: number, lon: number) => {
      const geocoder = new kakao.maps.services.Geocoder();
      const coord = new kakao.maps.LatLng(lat, lon);
      const callback = function (result: any, status: any) {
        if (status === kakao.maps.services.Status.OK) {
          dispatch(changeAddress(result[0].address.address_name));
        }
      };

      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    },
    [dispatch, kakao],
  );

  const findMyGeoLocation = useCallback(
    (e) => {
      e.preventDefault();
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (
          position: any,
        ) {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
          dispatch(changeGeoLocation([lat, lon]));
          getAddress(lat, lon);
        });
      } else {
        console.log('geolocation을 사용할수 없어요..');
      }
    },
    [dispatch, window, getAddress],
  );

  const findMapGeoLocation = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(toggleMap());
    },
    [dispatch],
  );

  const addSelectedGeoLocation = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(toggleMap());
      getAddress(...geoLocation);
    },
    [dispatch, geoLocation, getAddress],
  );

  const showMap = useCallback(
    (ref) => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (
          position: any,
        ) {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
          const options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 3,
          };
          let map = new kakao.maps.Map(ref.current, options);
          let marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter(),
            clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          });

          // 지도에 마커를 표시합니다
          marker.setMap(map);

          kakao.maps.event.addListener(
            map,
            'click',
            function (mouseEvent: any) {
              // 클릭한 위도, 경도 정보를 가져옵니다
              let latlng = mouseEvent.latLng;
              let lat = latlng.getLat();
              let lon = latlng.getLng();
              dispatch(changeGeoLocation([lat, lon]));
              // 마커 위치를 클릭한 위치로 옮깁니다
              marker.setPosition(latlng);
              // 마커를 옮길수 있습니다
              marker.setDraggable(true);
            },
          );
        });
      } else {
        console.log('geolocation을 사용할수 없어요..');
      }
    },
    [dispatch, window, kakao],
  );

  return {
    geoLocation,
    address,
    isMapVisible,
    getAddress,
    findMyGeoLocation,
    findMapGeoLocation,
    addSelectedGeoLocation,
    showMap,
  };
};

export default useMap;
