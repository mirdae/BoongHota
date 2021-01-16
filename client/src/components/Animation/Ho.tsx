import React, { useState } from 'react';
import * as S from './AnimationStyle';

const Ho = () => {
  const [showSmoke, setShowSmoke] = useState(false);
  const mouseOver = () => {
    if (!showSmoke) {
      setShowSmoke(true);
      setTimeout(() => setShowSmoke(false), 2000);
    }
  };

  return (
    <S.Ho showSmoke={showSmoke} onMouseOver={mouseOver}>
      <img
        src="https://media.vlpt.us/images/dolarge/post/b97ad49f-d383-46dd-aa09-bdb33372eb2b/smoke.png"
        alt="smoke"
      />
    </S.Ho>
  );
};

export default Ho;
