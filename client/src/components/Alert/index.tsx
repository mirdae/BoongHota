import React from 'react';
import useForm from '../../hooks/useForm';

import './styles.scss';
const Alert = ({ message }: any) => {
  const { isAlertVisible } = useForm();
  return (
    <div className={'alert-container ' + (isAlertVisible ? 'show' : 'hide')}>
      {message}
    </div>
  );
};

export default Alert;
