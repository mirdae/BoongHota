import React from 'react';
import * as S from './ButtonStyle';

type ButtonProps = {
  message: string;
  onClick?: any;
};

const Button = ({ message, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{message}</S.Button>;
};

export default Button;
