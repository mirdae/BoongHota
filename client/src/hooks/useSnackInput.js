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

const useSnackInput = () => {
  const inputs = useSelector((state) => state.newSnack);
  const dispatch = useDispatch();

  const onChangeStoreName = useCallback(
    (storeName) => {
      dispatch(changeStoreName(storeName));
    },
    [dispatch],
  );
  const onChangeFood = useCallback((food) => dispatch(changeFood(food)), [
    dispatch,
  ]);
  const onChangeTime = useCallback((time) => dispatch(changeTime(time)), [
    dispatch,
  ]);
  const onSubmit = useCallback(
    (snackInfo, e) => {
      e.preventDefault();
      dispatch(closeForm());
      dispatch(createSnack(snackInfo));
    },
    [dispatch],
  );
  const onCancel = useCallback(
    (e) => {
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
