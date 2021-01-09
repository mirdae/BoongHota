import React, { useEffect, useRef } from 'react';
import useForm from '../../hooks/useForm';
import useMap from '../../hooks/useMap';

import './styles.scss';

const Form = () => {
  const {
    name,
    type,
    openTime,
    closeTime,
    onChangeName,
    onChangeType,
    onChangeOpenTime,
    onChangeCloseTime,
    onSubmit,
    onCancel,
  } = useForm();
  const {
    findMyGeoLocation,
    findMapGeoLocation,
    geoLocation,
    address,
  } = useMap(window);

  const submitWithCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '') {
      alert('가게이름뭔데');
      return;
    }
    if (type === '') {
      return;
    }
    if (address === '') {
      return;
    }
    if (openTime === '00:00' || closeTime === '00:00') {
      return;
    }
    onSubmit({ name, type, geoLocation, address, openTime, closeTime });
  };

  const openTimeRef = useRef<HTMLInputElement>(null);
  const closeTimeRef = useRef<HTMLInputElement>(null);
  const setOpenTime = () => {
    if (openTimeRef.current) {
      const time = onChangeOpenTime(openTimeRef.current.value);
      openTimeRef.current.value = time;
    }
  };
  const setCloseTime = () => {
    if (closeTimeRef.current) {
      const time = onChangeCloseTime(closeTimeRef.current.value);
      closeTimeRef.current.value = time;
    }
  };
  useEffect(() => {
    console.log(789);
  }, [name, type, geoLocation, address, openTime, closeTime]);

  return (
    <form className="modal-form" onSubmit={submitWithCheck}>
      <div
        className="kind-box"
        onChange={(e: any) => onChangeType(e.target.value)}
      >
        <input
          name="food"
          type="radio"
          value="boong"
          id="boong"
          className="boong-mini"
        />
        <label className="boong-label" htmlFor="boong" />
        <input
          name="food"
          type="radio"
          id="ho"
          value="ho"
          className="ho-mini"
        />
        <label className="ho-label" htmlFor="ho" />
        <input
          name="food"
          type="radio"
          id="ta"
          value="ta"
          className="ta-mini"
        />
        <label className="ta-label" htmlFor="ta" />
      </div>
      <div className="input-box">
        <div className="input-box_name">
          <label htmlFor="name">가게명</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeName(e.target.value)
            }
            value={name}
            id="name"
            name="name"
          />
        </div>
        <div className="input-box_location">
          <label htmlFor="location">가게위치</label>
          <input id="location" name="location" value={address} />
          <div className="button-box_location">
            <button onClick={findMapGeoLocation}>지도에서 찾기</button>
            <button onClick={findMyGeoLocation}>현재 위치</button>
          </div>
        </div>
        <div className="input-box_time">
          <label htmlFor="time">영업시간</label>
          <div className="time">
            <input
              placeholder="open"
              ref={openTimeRef}
              onBlur={setOpenTime}
            ></input>
            <span>-</span>
            <input
              placeholder="close"
              ref={closeTimeRef}
              onBlur={setCloseTime}
            ></input>
          </div>
        </div>
      </div>
      <div className="button-box">
        <button onClick={onCancel}>뒤로가기</button>
        <button type="submit">등록하기</button>
      </div>
    </form>
  );
};

export default Form;
