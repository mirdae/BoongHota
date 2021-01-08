import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  createShop,
  changeName,
  changeType,
  changeOpenTime,
  changeCloseTime,
} from '../modules/form';
import { initializeMapInfo, toggleMap } from '../modules/map';
import { initializeFormInfo } from '../modules/form';
import { openModal, closeModal, showAlert, hideAlert } from '../modules/modal';
import { Name, Type, Time, Shop } from '../types';

const useForm = () => {
  const dispatch = useDispatch();
  const { name, type, openTime, closeTime } = useSelector(
    (state: RootState) => state.form,
  );
  const { isModalVisible, isAlertVisible } = useSelector(
    (state: RootState) => state.modal,
  );

  const changeTimeFormat = useCallback((time: string) => {
    const timeFormat1 = /^([0-9]):([0-5][0-9])$/;
    const timeFormat2 = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;
    const timeFormat3 = /^([01][0-9]|2[0-3]):([0-9])$/;
    const timeFormat4 = /^([01][0-9]|2[0-3])$/;
    const timeFormat5 = /^[0-9]*$/;
    const splittedTime = time.split(':');
    if (timeFormat1.test(time)) {
      time = '0' + time;
    } else if (timeFormat2.test(time)) {
    } else if (timeFormat3.test(time)) {
      time = splittedTime[0] + ':0' + splittedTime[1];
    } else if (timeFormat4.test(time)) {
      time += ':00';
    } else if (timeFormat5.test(time)) {
      time = '0' + splittedTime[0] + ':00';
    } else {
      console.log('없음');
      return '';
    }
    console.log(time);
    return time;
  }, []);

  const onChangeName = useCallback(
    (name: Name) => {
      dispatch(changeName(name));
    },
    [dispatch],
  );
  const onChangeType = useCallback((type: Type) => dispatch(changeType(type)), [
    dispatch,
  ]);
  const onChangeOpenTime = useCallback(
    (time: Time) => {
      const formattedTime = changeTimeFormat(time);
      dispatch(changeOpenTime(formattedTime));
      return formattedTime;
    },
    [dispatch, changeTimeFormat],
  );

  const onChangeCloseTime = useCallback(
    (time: Time) => {
      const formattedTime = changeTimeFormat(time);
      dispatch(changeCloseTime(formattedTime));
      return formattedTime;
    },
    [dispatch, changeTimeFormat],
  );

  const onSubmit = useCallback(
    (shopInfo: Shop) => {
      dispatch(closeModal());
      console.log(shopInfo);
      dispatch(createShop(shopInfo));
      dispatch(initializeMapInfo());
      dispatch(initializeFormInfo());
      dispatch(showAlert());
      setTimeout(() => dispatch(hideAlert()), 2000);
    },
    [dispatch],
  );
  const onCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      dispatch(closeModal());
      dispatch(initializeMapInfo());
      dispatch(initializeFormInfo());
    },
    [dispatch],
  );

  const onClose = useCallback(
    (e) => {
      if (e.target.className === 'modal-container') {
        dispatch(toggleMap());
        dispatch(closeModal());
        dispatch(initializeMapInfo());
        dispatch(initializeFormInfo());
      }
    },
    [dispatch],
  );
  const onOpenForm = useCallback(() => dispatch(openModal()), [dispatch]);

  return {
    name,
    type,
    openTime,
    closeTime,
    isModalVisible,
    isAlertVisible,
    changeTimeFormat,
    onChangeName,
    onChangeType,
    onChangeOpenTime,
    onChangeCloseTime,
    onSubmit,
    onCancel,
    onOpenForm,
    onClose,
  };
};

export default useForm;
