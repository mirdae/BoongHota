import React, { useState } from 'react';
import './styles.scss';
const Ho = () => {
  const [isFall, setIsFall] = useState(false);
  const mouseOver = () => {
    if (!isFall) {
      setIsFall(true);
      setTimeout(() => setIsFall(false), 2000);
    }
  };

  return (
    <div
      className={'ho icon ' + (isFall ? 'fall' : '')}
      onMouseOver={mouseOver}
    >
      {isFall && (
        <img src="https://media.vlpt.us/images/dolarge/post/b97ad49f-d383-46dd-aa09-bdb33372eb2b/smoke.png" />
      )}
    </div>
  );
};

export default Ho;
