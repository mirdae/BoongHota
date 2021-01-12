import React, { useEffect, useRef } from 'react';
import useForm from '../../hooks/useForm';
import useMap from '../../hooks/useMap';

import './styles.scss';

const Form = () => {
  const {
    name,
    type,
    onChangeName,
    onChangeType,
    onSubmit,
    onCancel,
    setTime,
    combineHourAndMinute,
  } = useForm();
  const {
    findMyGeoLocation,
    findMapGeoLocation,
    geoLocation,
    address,
  } = useMap(window);

  const openHourRef = useRef<HTMLInputElement>(null);
  const openMinuteRef = useRef<HTMLInputElement>(null);
  const closeHourRef = useRef<HTMLInputElement>(null);
  const closeMinuteRef = useRef<HTMLInputElement>(null);

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
    if (openHourRef.current && closeHourRef.current) {
      if (!openHourRef.current.value || !closeHourRef.current.value) {
        alert('시간뭔데');
        return;
      }
    }
    onSubmit({
      name,
      type,
      geoLocation,
      address,
      openTime: combineHourAndMinute(openHourRef, openMinuteRef),
      closeTime: combineHourAndMinute(closeHourRef, closeMinuteRef),
    });
  };

  useEffect(() => {}, [name, type, geoLocation, address]);

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
            <div className="open-time">
              <label className="open">open</label>
              <input
                placeholder="00"
                ref={openHourRef}
                onBlur={() => setTime('hour', openHourRef)}
              />
              <span>:</span>
              <input
                placeholder="00"
                ref={openMinuteRef}
                onBlur={() => setTime('minute', openMinuteRef)}
              />
            </div>
            <div className="close-time">
              <label className="close">close</label>
              <input
                placeholder="00"
                ref={closeHourRef}
                onBlur={() => setTime('hour', closeHourRef)}
              />
              <span>:</span>
              <input
                placeholder="00"
                ref={closeMinuteRef}
                onBlur={() => setTime('minute', closeMinuteRef)}
              />
            </div>
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
