import React, { useRef, useState } from 'react';
import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;

const { kakao } = window;

import './styles.scss';

const ModalPage = ({ setOpenModal }) => {
  const ref = useRef();
  const [food, setFood] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState();
  const [openMap, setOpenMap] = useState(false);
  const [time, setTime] = useState(['00:00', '00:00']);

  const handleOk = (e) => {
    e.preventDefault();
    console.log('handleOk여기실행됏니');
    setOpenModal(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log('handleCancel여기실행됏니');
    setOpenModal(false);
  };

  const findMyAddress = (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        const geocoder = new kakao.maps.services.Geocoder();

        const coord = new kakao.maps.LatLng(lat, lon);
        const callback = function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            setLocation(result[0].address.address_name);
          }
        };

        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      });
    } else {
      alert('geolocation을 사용할수 없어요..');
    }
  };

  const findMapAddress = (e) => {
    e.preventDefault();
    setOpenMap(true);
  };

  const addNewPlace = () => {
    setOpenMap(false);
  };

  const showMap = () => {};

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
              <RangePicker format="HH:mm" bordered={false} className="time" />
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
