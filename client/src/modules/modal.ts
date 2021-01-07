import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { Modal } from '../types';

const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
const TOGGLE_ALERT = 'modal/TOGGLE_ALERT';

export const toggleModal = createAction(TOGGLE_MODAL)();
export const toggleAlert = createAction(TOGGLE_ALERT)();
const actions = {
  toggleModal,
  toggleAlert,
};

type ModalAction = ActionType<typeof actions>;

//음...여긴 어떻게해야할지 몰라서 제 마음대로 했습니다^_^
type ModalState = Modal;

const initialState: ModalState = {
  isModalVisible: false,
  isAlertVisible: false,
};

export const modal = createReducer<ModalState, ModalAction>(initialState, {
  [TOGGLE_MODAL]: (state) => {
    return { ...state, isModalVisible: !state.isModalVisible };
  },
  [TOGGLE_ALERT]: (state) => {
    return { ...state, isAlertVisible: !state.isAlertVisible };
  },
});
