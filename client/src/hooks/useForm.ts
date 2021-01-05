import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  createShop,
  changeName,
  changeType,
  changeTime,
} from '../modules/form';
import { initializeMapInfo } from '../modules/map';
import { toggleModal } from '../modules/modal';
import { Name, Type, Time, Shop } from '../types';

const useForm = () => {
  const dispatch = useDispatch();
  const { name, type, time } = useSelector((state: RootState) => state.form);
  const { isModalVisible } = useSelector((state: RootState) => state.modal);
  const onChangeName = useCallback(
    (name: Name) => {
      dispatch(changeName(name));
    },
    [dispatch],
  );
  const onChangeType = useCallback((type: Type) => dispatch(changeType(type)), [
    dispatch,
  ]);
  const onChangeTime = useCallback((time: Time) => dispatch(changeTime(time)), [
    dispatch,
  ]);
  const onSubmit = useCallback(
    (shopInfo: Shop) => {
      dispatch(toggleModal());
      console.log(shopInfo);
      dispatch(createShop(shopInfo));
      dispatch(initializeMapInfo());
    },
    [dispatch],
  );
  const onCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      dispatch(toggleModal());
    },
    [dispatch],
  );

  const onOpenForm = useCallback(() => dispatch(toggleModal()), [dispatch]);

  return {
    name,
    type,
    time,
    isModalVisible,
    onChangeName,
    onChangeType,
    onChangeTime,
    onSubmit,
    onCancel,
    onOpenForm,
  };
};

export default useForm;
