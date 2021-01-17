import styled, { css } from 'styled-components';
import { darken } from 'polished';
import PALETTE from '../../styles/color-variables';

export const MapContainer = styled.div`
  width: 50%;
  height: 65vh;
  margin: 0 auto;
  margin-top: 20vh;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 999;
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  top: 25%;
  ${(props) =>
    props.value === 'back' &&
    css`
      left: 27%;
      background-color: ${PALETTE.MAP_BUTTON[0]};
      &:hover {
        background-color: ${darken(0.1, PALETTE.MAP_BUTTON[0])};
      }
    `}

  ${(props) =>
    props.value === 'add' &&
    css`
      right: 27%;
      background-color: ${PALETTE.MAP_BUTTON[1]};
      &:hover {
        background-color: ${darken(0.1, PALETTE.MAP_BUTTON[1])};
      }
    `}
`;
