import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createSnack,
  changeStoreName,
  changeFood,
  changeTime,
  closeForm,
  openForm,
} from '../modules/newSnack';
import { RootState } from '../modules';
import { StoreName, Food, Time, NewSnack } from '../types';

const useSnackInput = () => {
  const inputs = useSelector((state: RootState) => state.newSnack);
  const dispatch = useDispatch();

  const onChangeStoreName = useCallback(
    (storeName: StoreName) => {
      dispatch(changeStoreName(storeName));
    },
    [dispatch],
  );
  const onChangeFood = useCallback((food: Food) => dispatch(changeFood(food)), [
    dispatch,
  ]);
  const onChangeTime = useCallback((time: Time) => dispatch(changeTime(time)), [
    dispatch,
  ]);
  const onSubmit = useCallback(
    (snackInfo: NewSnack) => {
      dispatch(closeForm());
      dispatch(createSnack(snackInfo));
    },
    [dispatch],
  );
  const onCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      dispatch(closeForm());
    },
    [dispatch],
  );
  const onOpenForm = useCallback(() => dispatch(openForm()), [dispatch]);

  return {
    inputs,
    onChangeStoreName,
    onChangeFood,
    onChangeTime,
    onSubmit,
    onCancel,
    onOpenForm,
  };
};

export default useSnackInput;
