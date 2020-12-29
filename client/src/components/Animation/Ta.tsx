import React, { useState } from 'react';
import './styles.scss';

const Ta = () => {
  const [isRoll, setIsRoll] = useState(false);

  const mouseOver = () => {
    console.log(123);
    setIsRoll(true);
    setTimeout(() => setIsRoll(false), 2000);
  };
  return (
    <div
      className={'ta icon ' + (isRoll ? 'roll' : '')}
      onMouseOver={mouseOver}
    ></div>
  );
};

export default Ta;
