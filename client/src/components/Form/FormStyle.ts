import styled, { css } from 'styled-components';
import Button from '../common/Button';
import { darken } from 'polished';
import { BOONG_IMG, HO_IMG, TA_IMG } from '../../styles/img';
import PALETTE from '../../styles/color-variables';

// global
export const InputBox = styled.div`
  width: 40%;
  margin: 1.3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #635959;
  background: none;
  padding: 7px 10px;
  outline: none;
`;

export const Label = styled.label`
  width: 100%;
  display: block;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const RadioLabel = styled.label``;

// form
export const ModalForm = styled.form`
  width: 50%;
  min-height: 65vh;
  padding: 2% 3%;
  margin: 0 auto;
  margin-top: 20vh;
  background-color: rgb(226, 217, 212);
  border-radius: 10px;
  box-shadow: 2px 2px 10px 3px rgba(198, 173, 159, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

// 음식 종류 선택
export const TypeBox = styled.div`
  width: 70%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TypeDiv = styled.div`
  cursor: pointer;
`;

type SelectedType = {
  checked: boolean;
};

export const BoongType = styled(TypeDiv)<SelectedType>`
  img {
    ${(props) =>
      props.checked
        ? css`
            width: 85px;
            height: 65px;
          `
        : css`
            width: 65px;
            height: 45px;
          `}
  }
`;

export const HoType = styled(TypeDiv)<SelectedType>`
  img {
    ${(props) =>
      props.checked
        ? css`
            width: 70px;
            height: 70px;
          `
        : css`
            width: 50px;
            height: 50px;
          `}
  }
`;

export const TaType = styled(TypeDiv)<SelectedType>`
  img {
    ${(props) =>
      props.id === 'ta'
        ? css`
            width: 65px;
            height: 65px;
          `
        : css`
            width: 45px;
            height: 45px;
          `}
  }
`;

// location관련 스타일
export const LocationInputBox = styled.div`
  margin: 2vh 0;
`;

export const LocationButtonBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: space-between;
`;

// time 관련 스타일
export const TimeLayoutBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const TimeEachBox = styled.div`
  width: 45%;
  border-bottom: 1px solid #635959;
  position: relative;
`;

export const TimeLabel = styled.label`
  width: 50px;
  position: absolute;
  font-size: 5px;
  color: #635959;
  left: 0px;
`;

export const TimeInputLabel = styled.label`
  width: 50px;
  position: absolute;
  font-size: 5px;
  color: #635959;
  left: 5px;
`;

export const TimeInput = styled(Input)`
  width: 48%;
  margin-top: 20px;
  border: none;
  text-align: center;
`;
export const TimeSpan = styled.span`
  font-size: 15px;
  font-weight: 300;
`;

// 맨 밑에있는 버튼을 담는 박스
export const ButtonBox = styled.div`
  width: 40%;
  margin-top: 3vh;
  display: flex;
  justify-content: space-around;
`;

export const MapButton = styled(Button)`
  background-color: ${PALETTE.BUTTON[1]};
  width: 45%;
  padding: 1vh 0;
  margin: 0;
  &:hover {
    background-color: ${darken(0.1, PALETTE.BUTTON[1])};
  }
`;

export const FormButton = styled(Button)`
  background-color: ${PALETTE.BUTTON[0]};
  padding: 4%;
  &:hover {
    background-color: ${darken(0.1, PALETTE.BUTTON[0])};
  }
`;
