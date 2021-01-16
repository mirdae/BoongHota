import styled from 'styled-components';
import { HomeFilled } from '@ant-design/icons';

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

export const StyledHomeFilled = styled(HomeFilled)`
  color: rgb(191, 163, 133);
  svg {
    width: 1.7em;
    height: 2em;
  }
`;

// 이 부분도 겹치는 부분이기때문에 리팩토링이 필요함
export const IconImage = styled.img`
  cursor: pointer;
`;

export const IconImage2 = styled.li`
  img {
    width: 1.9em;
    height: 1.9em;
  }
`;
export const IconImage3 = styled.li`
  img {
    width: 2em;
    height: 1.4em;
  }
`;
export const IconImage4 = styled.li`
  img {
    width: 1.8em;
    height: 1.4em;
  }
`;
export const IconImage5 = styled.li`
  img {
    width: 1.6em;
    height: 1.5em;
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
