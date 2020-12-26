import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createSnack,
  changeTitle,
  changeFood,
  changeLocation,
  changeTime,
  closeForm,
  openForm,
} from '../modules/newSnack';

const useSnackInput = () => {
  const inputs = useSelector((state) => state.newSnack);
  console.log(inputs);
  const dispatch = useDispatch();

  const onChangeTitle = useCallback(
    (title) => {
      dispatch(changeTitle(title));
    },
    [dispatch],
  );
  const onChangeFood = useCallback((food) => dispatch(changeFood(food)), [
    dispatch,
  ]);
  const onChangeLocation = useCallback(
    (location) => dispatch(changeLocation(location)),
    [dispatch],
  );
  const onChangeTime = useCallback((time) => dispatch(changeTime(time)), [
    dispatch,
  ]);
  const onSubmit = useCallback(
    (snackInfo) => {
      dispatch(closeForm());
      dispatch(createSnack(snackInfo));
    },
    [dispatch],
  );
  const onCancle = useCallback(() => dispatch(closeForm()), [dispatch]);
  const onOpenForm = useCallback(() => dispatch(openForm()), [dispatch]);

  return {
    inputs,
    onChangeTitle,
    onChangeFood,
    onChangeLocation,
    onChangeTime,
    onSubmit,
    onCancle,
    onOpenForm,
  };
};

export default useSnackInput;
