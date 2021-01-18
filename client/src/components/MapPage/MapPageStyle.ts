import styled, { css } from 'styled-components';
import { HomeFilled as AntdHomeFilled } from '@ant-design/icons';

export const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
`;

export const HomeFilled = styled(AntdHomeFilled)`
  color: rgb(191, 163, 133);
  svg {
    width: 1.7em;
    height: 2em;
  }
`;

export const IconImage = styled.li`
  img {
  cursor: pointer;
    ${(props) =>
      props.id === 'all' &&
      css`
        width: 1.9em;
        height: 1.9em;
      `}
    ${(props) =>
      props.id === 'boong' &&
      css`
        width: 2em;
        height: 1.4em;
      `}
    ${(props) =>
      props.id === 'ho' &&
      css`
        width: 1.8em;
        height: 1.4em;
      `}
    ${(props) =>
      props.id === 'ta' &&
      css`
        width: 1.6em;
        height: 1.5em;
      `}
  }
`;

export const MapButtonBox = styled.ul`
  width: 20vw;
  height: 50px;
  background-color: rgba(56, 56, 56, 0.741);
  box-shadow: 3px 0px 2px 2px rgba(56, 56, 56, 0.741);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  li {
    list-style: none;
    float: left;
    width: 20%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
