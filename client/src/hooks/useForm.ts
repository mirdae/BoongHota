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
import { initializeMapInfo, closeMap } from '../modules/map';
import { initializeFormInfo } from '../modules/form';
import { openModal, closeModal, showAlert, hideAlert } from '../modules/modal';
import { Name, Type, Time, Shop } from '../types';
import { ALERT_DURATION_TIME } from '../constants/constants';
import {
  TIME_FORMAT_1,
  TIME_FORMAT_2,
  TIME_FORMAT_3,
  TIME_FORMAT_4,
  TIME_FORMAT_5,
} from '../constants/regex';
const useForm = () => {
  const dispatch = useDispatch();
  const { name, type, openTime, closeTime } = useSelector(
    (state: RootState) => state.form,
  );
  const { isModalVisible, isAlertVisible } = useSelector(
    (state: RootState) => state.modal,
  );

  const changeTimeFormat = useCallback((time: string) => {
    const splittedTime = time.split(':');
    if (
      isNaN(parseInt(splittedTime[0])) ||
      (splittedTime[1] && isNaN(parseInt(splittedTime[1])))
    ) {
      return '';
    } else if (
      parseInt(splittedTime[0]) > 24 ||
      (splittedTime[1] && parseInt(splittedTime[1]) > 60)
    ) {
      return '';
    } else if (
      splittedTime[0].length > 2 ||
      (splittedTime[1] && splittedTime[1].length > 2)
    ) {
      return '';
    }
    if (TIME_FORMAT_1.test(time)) {
      time = '0' + time;
    } else if (TIME_FORMAT_2.test(time)) {
    } else if (TIME_FORMAT_3.test(time)) {
      time = splittedTime[0] + ':0' + splittedTime[1];
    } else if (TIME_FORMAT_4.test(time)) {
      time += ':00';
    } else if (TIME_FORMAT_5.test(time)) {
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
      setTimeout(() => dispatch(hideAlert()), ALERT_DURATION_TIME);
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
        dispatch(closeMap());
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
