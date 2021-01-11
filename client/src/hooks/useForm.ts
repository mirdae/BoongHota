import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { createShop, changeName, changeType } from '../modules/form';
import { initializeMapInfo, closeMap } from '../modules/map';
import { initializeFormInfo } from '../modules/form';
import { openModal, closeModal, showAlert, hideAlert } from '../modules/modal';
import { Name, Type, Time, Shop } from '../types';
import { ALERT_DURATION_TIME } from '../constants/constants';
const useForm = () => {
  const dispatch = useDispatch();
  const { name, type, openTime, closeTime } = useSelector(
    (state: RootState) => state.form,
  );
  const { isModalVisible, isAlertVisible } = useSelector(
    (state: RootState) => state.modal,
  );

  const changeHourFormat = useCallback((hour: Time) => {
    if (isNaN(parseInt(hour)) || parseInt(hour) > 12 || parseInt(hour) < 0) {
      return '';
    }
    if (hour.length === 1) {
      return '0' + hour;
    }
    return hour;
  }, []);

  const changeMinuteFormat = useCallback((minute: Time) => {
    if (
      isNaN(parseInt(minute)) ||
      parseInt(minute) > 59 ||
      parseInt(minute) < 0
    ) {
      return '';
    }
    if (minute.length === 1) {
      return '0' + minute;
    }
    return minute;
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
    changeHourFormat,
    changeMinuteFormat,
    onChangeName,
    onChangeType,
    onSubmit,
    onCancel,
    onOpenForm,
    onClose,
  };
};

export default useForm;
