import React, { useRef } from 'react';
import useForm from '../../hooks/useForm';
import useMap from '../../hooks/useMap';
import * as S from './FormStyle';
import { BOONG_IMG, HO_IMG, TA_IMG } from '../../styles/img';

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

  return (
    <S.ModalForm>
      <S.TypeBox>
        <S.BoongType
          checked={type === 'boong'}
          onClick={() => onChangeType('boong')}
        >
          <img src={`${BOONG_IMG}`} alt="boong" />
        </S.BoongType>
        <S.HoType checked={type === 'ho'} onClick={() => onChangeType('ho')}>
          <img src={`${HO_IMG}`} alt="ho" />
        </S.HoType>
        <S.TaType checked={type === 'ta'} onClick={() => onChangeType('ta')}>
          <img src={`${TA_IMG}`} alt="ta" />
        </S.TaType>
      </S.TypeBox>
      <S.InputBox>
        <S.Label htmlFor="name">가게명</S.Label>
        <S.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeName(e.target.value)
          }
          value={name}
          id="name"
          name="name"
        />
      </S.InputBox>
      <S.InputBox>
        <S.Label htmlFor="location">가게위치</S.Label>
        <S.Input id="location" name="location" value={address} />
        <S.LocationButtonBox>
          <S.MapButton onClick={findMapGeoLocation} message="지도에서 찾기" />
          <S.MapButton onClick={findMyGeoLocation} message="현재 위치" />
        </S.LocationButtonBox>
      </S.InputBox>
      <S.InputBox>
        <S.Label htmlFor="time">영업시간</S.Label>
        <S.TimeLayoutBox>
          <S.TimeEachBox>
            <S.TimeInputLabel>open</S.TimeInputLabel>
            <S.TimeInput
              placeholder="00"
              ref={openHourRef}
              onBlur={() => setTime('hour', openHourRef)}
            />
            <S.TimeSpan>:</S.TimeSpan>
            <S.TimeInput
              placeholder="00"
              ref={openMinuteRef}
              onBlur={() => setTime('minute', openMinuteRef)}
            />
          </S.TimeEachBox>
          <S.TimeEachBox>
            <S.TimeInputLabel>close</S.TimeInputLabel>
            <S.TimeInput
              placeholder="00"
              ref={closeHourRef}
              onBlur={() => setTime('hour', closeHourRef)}
            />
            <S.TimeSpan>:</S.TimeSpan>
            <S.TimeInput
              placeholder="00"
              ref={closeMinuteRef}
              onBlur={() => setTime('minute', closeMinuteRef)}
            />
          </S.TimeEachBox>
        </S.TimeLayoutBox>
      </S.InputBox>
      <S.ButtonBox>
        <S.FormButton onClick={onCancel} message="뒤로가기" />
        <S.FormButton onClick={submitWithCheck} message="등록하기" />
      </S.ButtonBox>
    </S.ModalForm>
  );
};

export default Form;
