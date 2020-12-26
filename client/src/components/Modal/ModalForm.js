import React from 'react';
import moment from 'moment';
import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;

import './styles.scss';

const ModalForm = ({
  storeName,
  location,
  findMapAddress,
  findMyAddress,
  setStoreName,
  setTime,
  handleCancel,
  handleSumbit,
}) => {
  return (
    <form className="modal-form" onSubmit={handleSumbit}>
      <div className="kind-box">
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
        <div className="input-box_title">
          <label htmlFor="name">가게명</label>
          <input
            onChange={(e) => setStoreName(e.currentTarget.value)}
            value={storeName}
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
        <button type="submit">등록하기</button>
      </div>
    </form>
  );
};

export default ModalForm;
