import styled from 'styled-components';
import Button from '../common/Button';
import { darken } from 'polished';

export const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 80%;
  display: flex;
  & a {
    display: flex;
    justify-content: center;
    width: 33%;
  }
`;

export const OpenModalButton = styled(Button)`
  background-color: #e5b589;
  margin-top: 20vh;
  &:hover {
    background-color: ${darken(0.1, '#e5b589')};
  }
`;
