import React, { useState } from 'react';
import * as S from './AnimationStyle';

const Ta = () => {
  const [isRoll, setIsRoll] = useState(false);

  const mouseOver = () => {
    if (!isRoll) {
      setIsRoll(true);
      setTimeout(() => setIsRoll(false), 2000);
    }
  };

  return <S.Ta onMouseOver={mouseOver} isRoll={isRoll}></S.Ta>;
};

export default Ta;
