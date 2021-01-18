import React from 'react';
import useForm from '../../hooks/useForm';

import * as S from './AlertStyle';

type AlertProps = {
  message: string;
};

const Alert = ({ message }: AlertProps) => {
  const { isAlertVisible } = useForm();
  return (
    <S.AlertContainer isAlertVisible={isAlertVisible}>
      {message}
    </S.AlertContainer>
  );
};

export default Alert;
