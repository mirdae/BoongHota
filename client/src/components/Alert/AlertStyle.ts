import styled from 'styled-components';

type AlertProps = {
  isAlertVisible: boolean;
};

export const AlertContainer = styled.div`
  width: 300px;
  height: 50px;
  background-color: #e4d1c6;
  color: rgb(93, 93, 93);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 2px 2px 5px 5px rgba(194, 175, 166, 0.5);
  position: absolute;
  left: 50%;
  margin-left: -150px;
  z-index: 888;
  transition: 0.5s;
  bottom: ${({ isAlertVisible }: AlertProps) =>
    isAlertVisible ? '60px' : '-100px'};
`;
