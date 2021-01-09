import React from 'react';
import useForm from '../../hooks/useForm';

import './styles.scss';

type AlertProps = {
  message: string;
};

const Alert = ({ message }: AlertProps) => {
  const { isAlertVisible } = useForm();
  return (
    <div className={'alert-container ' + (isAlertVisible ? 'show' : 'hide')}>
      {message}
    </div>
  );
};

export default Alert;
