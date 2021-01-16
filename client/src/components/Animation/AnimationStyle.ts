import styled, { keyframes, css } from 'styled-components';
import { animated } from 'react-spring';
import { BOONG_URL, HO_URL, TA_URL } from '../../constants/constants';

const taMove = keyframes`
    0% {
    transform: rotate(0deg);
    margin-left: 0;
  }
  50% {
    transform: rotate(360deg);
    margin-left: 1300px;
  }
  100% {
    margin-left: 0;
    transform: rotate(0deg);
  }
`;

const hoSmoke = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 80%;
    top: -30%;
  }
  40% {
    opacity: 40%;
    top: -20%;
  }
  60% {
    opacity: 80%;
    top: -30%;
  }
  80% {
    opacity: 40%;
    top: -20%;
  }
  100% {
    opacity: 0;
  }
`;

export const Boong = styled(animated.div)`
  height: 170px;
  width: 220px;
  background-image: url(${BOONG_URL});
  background-size: cover;
  background-position: center center;
  will-change: transform;
`;

type hoProps = {
  showSmoke: boolean;
};

export const Ho = styled.div`
  background-size: 100% 100%;
  height: 200px;
  width: 200px;
  background-image: url(${HO_URL});
  position: relative;
  img {
    ${({ showSmoke }: hoProps) => {
      return showSmoke
        ? css`
            display: block;
            position: absolute;
            top: 0%;
            left: 35%;
            animation-duration: 3s;
            animation-name: ${hoSmoke};
          `
        : css`
            display: none;
          `;
    }}
  }
`;

type TaProps = {
  isRoll: boolean;
  onMouseOver?: any;
};

export const Ta = styled.div`
  background-size: 100% 100%;
  background-image: url(${TA_URL});
  position: absolute;
  box-sizing: border-box;
  height: 200px;
  width: 200px;

  ${({ isRoll }: TaProps) => {
    return (
      isRoll &&
      css`
        animation-duration: 2s;
        animation-name: ${taMove};
      `
    );
  }}
`;
