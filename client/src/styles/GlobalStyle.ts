import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import PALETTE from './color-variables';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  {
    padding: 0;
    margin: 0;
  }
  body{
    background-color: ${PALETTE.BASE};
    overflow: hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    header {
      margin: 10vh 0;
      width: 147px;
      height: 91px;
    }
  }
`;

export default GlobalStyle;
