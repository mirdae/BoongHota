import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import moment from 'moment';
import { TimePicker } from 'antd';
import useForm from '../../hooks/useForm';
import useMap from '../../hooks/useMap';

import './styles.scss';
const { RangePicker } = TimePicker;

const ModalForm = () => {
  const {
    onChangeStoreName,
    onChangeStoreType,
    onChangeTime,
    onSubmit,
    onCancel,
  } = useForm();
  const { findMyGeoLocation, findMapGeoLocation } = useMap(window);
  const { storeName, storeType, time } = useSelector(
    (state: RootState) => state.form,
  );
  const { geoLocation, address } = useSelector((state: RootState) => state.map);

  const submitWithCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (storeName === '') {
      alert('가게이름뭔데');
      return;
    }
    if (storeType === '') {
      return;
    }
    if (address === '') {
      return;
    }
    if (time[0] === '00:00' || time[1] === '00:00') {
      return;
    }
    onSubmit({ storeName, storeType, geoLocation, address, time });
  };

  useEffect(() => {
    console.log(789);
  }, [storeName, storeType, geoLocation, address, time]);
  const momentAny = useCallback((b: any): any => {
    return moment(b);
  }, []);

  return (
    <form className="modal-form" onSubmit={submitWithCheck}>
      <div
        className="kind-box"
        onChange={(e: any) => onChangeStoreType(e.target.value)}
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
              onChangeStoreName(e.target.value)
            }
            value={storeName}
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
          <RangePicker
            format="HH:mm"
            bordered={false}
            className="time"
            onChange={(_, b) => onChangeTime(momentAny(b)._i)}
          />
        </div>
      </div>
      <div className="button-box">
        <button onClick={onCancel}>뒤로가기</button>
        <button type="submit">등록하기</button>
      </div>
    </form>
  );
};

export default ModalForm;
