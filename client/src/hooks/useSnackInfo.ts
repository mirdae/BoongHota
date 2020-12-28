import { useCallback } from 'react';
import { allSnacks, selectedSnack } from '../modules/snacks';

import { useDispatch } from 'react-redux';

const useSnackInfo = () => {
  const dispatch = useDispatch();

  const getAllSnacks = useCallback(() => {
    dispatch(allSnacks());
  }, [dispatch]);

  const getSelectedSnacks = useCallback(
    (snackType) => {
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
