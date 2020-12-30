import { useCallback } from 'react';
import { getAllSnacks, getSelectedSnack } from '../modules/snackStores';

import { useDispatch } from 'react-redux';
import { StoreType } from '../types';

const useStores = () => {
  const dispatch = useDispatch();

  const showAllSnacks = useCallback(() => {
    dispatch(getAllSnacks());
  }, [dispatch]);

  const showSelectedSnacks = useCallback(
    (storeType: StoreType) => {
      dispatch(getSelectedSnack(storeType));
    },
    [dispatch],
  );

  return {
    showAllSnacks,
    showSelectedSnacks,
  };
};

export default useStores;
