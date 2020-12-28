import { useCallback } from 'react';
import { allSnacks, selectedSnack } from '../modules/snacks';

import { useDispatch } from 'react-redux';
import { Food } from '../types';

const useSnackInfo = () => {
  const dispatch = useDispatch();

  const getAllSnacks = useCallback(() => {
    dispatch(allSnacks());
  }, [dispatch]);

  const getSelectedSnacks = useCallback(
    (snackType: Food) => {
      dispatch(selectedSnack(snackType));
    },
    [dispatch],
  );

  return {
    getAllSnacks,
    getSelectedSnacks,
  };
};

export default useSnackInfo;
