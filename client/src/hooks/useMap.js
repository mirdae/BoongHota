import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeLocationNum,
  changeLocation,
  openMap,
  closeMap,
} from '../modules/newSnack';

const useMap = (window) => {
  const dispatch = useDispatch();
  const { kakao } = window;
  const { locationNum, location, isMapVisible } = useSelector(
    (state) => state.newSnack,
  );

  const getAddress = useCallback(
    (lat, lon) => {
      const geocoder = new kakao.maps.services.Geocoder();
      const coord = new kakao.maps.LatLng(lat, lon);
      const callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          dispatch(changeLocation(result[0].address.address_name));
        }
      };

      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    },
    [dispatch],
  );

  const findMyAddress = useCallback(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        dispatch(changeLocationNum([lat, lon]));
        getAddress(lat, lon);
      });
    } else {
      console.log('geolocation을 사용할수 없어요..');
    }
  }, [dispatch]);

  const findMapAddress = useCallback(() => {
    dispatch(openMap());
  }, [dispatch]);

  const addNewAddress = useCallback(() => {
    dispatch(closeMap());
    getAddress(...locationNum);
  }, [dispatch, locationNum]);

  const showMap = useCallback((ref) => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function (position) {
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

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          let latlng = mouseEvent.latLng;
          let lat = latlng.getLat();
          let lon = latlng.getLng();
          dispatch(changeLocationNum([lat, lon]));
          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);
          // 마커를 옮길수 있습니다
          marker.setDraggable(true);
        });
      });
    } else {
      console.log('geolocation을 사용할수 없어요..');
    }
  });

  return {
    locationNum,
    location,
    isMapVisible,
    getAddress,
    findMyAddress,
    findMapAddress,
    addNewAddress,
    showMap,
  };
};

export default useMap;
