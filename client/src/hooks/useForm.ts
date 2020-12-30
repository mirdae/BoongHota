import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  createSnack,
  changeStoreName,
  changeStoreType,
  changeTime,
} from '../modules/form';
import { toggleModal } from '../modules/modal';
import { StoreName, StoreType, Time, Snack } from '../types';

const useForm = () => {
  const dispatch = useDispatch();

  const onChangeStoreName = useCallback(
    (storeName: StoreName) => {
      dispatch(changeStoreName(storeName));
    },
    [dispatch],
  );
  const onChangeStoreType = useCallback(
    (storeType: StoreType) => dispatch(changeStoreType(storeType)),
    [dispatch],
  );
  const onChangeTime = useCallback((time: Time) => dispatch(changeTime(time)), [
    dispatch,
  ]);
  const onSubmit = useCallback(
    (storeInfo: Snack) => {
      dispatch(toggleModal());
      dispatch(createSnack(storeInfo));
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
    onChangeStoreName,
    onChangeStoreType,
    onChangeTime,
    onSubmit,
    onCancel,
    onOpenForm,
  };
};

export default useForm;
