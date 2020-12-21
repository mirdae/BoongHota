import React, { useRef, useState } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = TimePicker;

const { kakao } = window;

import './styles.scss';

const ModalPage = ({ setOpenModal }) => {
  const ref = useRef();
  const [food, setFood] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState();
  const [locationNum, setLocationNum] = useState([0, 0]);
  const [openMap, setOpenMap] = useState(false);
  const [time, setTime] = useState(['00:00', '00:00']);

  const handleOk = (e) => {
    e.preventDefault();
    console.log('handleOk여기실행됏니');
    setOpenModal(false);
    console.log(food);
    console.log(name);
    console.log(location);
    console.log(locationNum);
    console.log(time);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log('handleCancel여기실행됏니');
    setOpenModal(false);
  };

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

  const findMapAddress = (e) => {
    e.preventDefault();
    setOpenMap(true);
    showMap();
  };

  const addNewPlace = () => {
    setOpenMap(false);
    getAddress(...locationNum);
  };

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

  const selectFood = (e) => {
    e.preventDefault();
    setFood(e.target.classList[0]);
    console.dir(e.target);
  };

  return (
    <div className={'modal-container'}>
      {openMap ? (
        <>
          <div className="mini-map-container">
            <div ref={ref} className="mini-map-box"></div>
            <button className="add-btn" onClick={addNewPlace}>
              <p>+</p>
            </button>
          </div>
        </>
      ) : (
        <form className="modal-form">
          <ul className="kind-box">
            <li
              onClick={selectFood}
              className={
                'boong-mini ' + (food === 'boong-mini' ? 'clicked' : '')
              }
            />
            <li
              onClick={selectFood}
              className={'ho-mini ' + (food === 'ho-mini' ? 'clicked' : '')}
            />
            <li
              onClick={selectFood}
              className={'ta-mini ' + (food === 'ta-mini' ? 'clicked' : '')}
            />
          </ul>
          <div className="input-box">
            <div className="input-box_title">
              <label htmlFor="name">가게명</label>
              <input
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                id="name"
                name="name"
              />
            </div>
            <div className="input-box_location">
              <label htmlFor="location">가게위치</label>
              <input id="location" name="location" value={location} />
              <div className="button-box_location">
                <button onClick={findMapAddress}>지도에서 찾기</button>
                <button onClick={findMyAddress}>현재 위치</button>
              </div>
            </div>
            <div className="input-box_time">
              <label htmlFor="time">영업시간</label>
              <RangePicker
                format="HH:mm"
                bordered={false}
                className="time"
                onChange={(_, b) => setTime(moment(b)._i)}
              />
            </div>
          </div>
          <div className="button-box">
            <button onClick={handleCancel}>뒤로가기</button>
            <button onClick={handleOk}>등록하기</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ModalPage;
