import { useCallback } from 'react';
import { getAllShop, getSelectedShop } from '../modules/shop';

import { useDispatch } from 'react-redux';
import { Type } from '../types';

const useShop = () => {
  const dispatch = useDispatch();

  const showAllShop = useCallback(() => {
    dispatch(getAllShop());
  }, [dispatch]);

  const showSelectedShop = useCallback(
    (type: Type) => {
      dispatch(getSelectedShop(type));
    },
    [dispatch],
  );

  return {
    showAllShop,
    showSelectedShop,
  };
};

export default useShop;
