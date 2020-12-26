import React, { useRef, useState } from 'react';
import useSnackInput from '../../hooks/useSnackInput';

import Map from './Map';
import ModalForm from './ModalForm';

const { kakao } = window;

const Container = () => {
  const ref = useRef();
  const [location, setLocation] = useState();
  const [locationNum, setLocationNum] = useState([0, 0]);
  const [openMap, setOpenMap] = useState(false);

  // lat, lon을 받아와 구 주소로 변경해주는 함수
  const getAddress = (lat, lon) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lon);
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLocation(result[0].address.address_name);
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  // 나의 현재위치를 얻어오는 함수
  const findMyAddress = (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        setLocationNum([lat, lon]);
        getAddress(lat, lon);
      });
    } else {
      alert('geolocation을 사용할수 없어요..');
    }
  };

  // map상에서 위치를 찾음
  const findMapAddress = (e) => {
    e.preventDefault();
    setOpenMap(true);
    showMap();
  };

  // map 상에서 추가할 위치를 찾으면 그 위치를 등록하는 함수
  const addNewPlace = () => {
    setOpenMap(false);
    getAddress(...locationNum);
  };

  // 실제 map을 보여주고 map과 관련된 설정을 하는 함수
  const showMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
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
          setLocationNum([latlng.getLat(), latlng.getLng()]);
          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);
          // 마커를 옮길수 있습니다
          marker.setDraggable(true);
        });
      });
    } else {
      alert('geolocation을 사용할수 없어요..');
    }
  };

  return (
    <div className={'modal-container'}>
      {openMap ? (
        <Map ref={ref} addNewPlace={addNewPlace} />
      ) : (
        <ModalForm
          location={location}
          findMapAddress={findMapAddress}
          findMyAddress={findMyAddress}
        />
      )}
    </div>
  );
};

export default Container;
