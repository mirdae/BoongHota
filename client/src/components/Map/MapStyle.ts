import styled from 'styled-components';

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

// 겹치는 부분이 많으니 리팩토링 할 예정!
export const BackButton = styled.button`
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
  top: 23%;
  left: 27%;
  outline: none;
  cursor: pointer;
  background-color: #e4706c;
  &:hover {
    background-color: #bd5451;
  }
`;

export const AddButton = styled.button`
  height: 50px;
  width: 50px;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 999;
  border-radius: 50px;
  font-size: 30px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  top: 23%;
  right: 27%;
  background-color: #4969da;
  &:hover {
    background-color: #1641dc;
  }
`;
