import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { Modal } from '../types';

const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';
const SHOW_ALERT = 'modal/SHOW_ALERT';
const HIDE_ALERT = 'modal/HIDE_ALERT';

export const openModal = createAction(OPEN_MODAL)();
export const closeModal = createAction(CLOSE_MODAL)();
export const showAlert = createAction(SHOW_ALERT)();
export const hideAlert = createAction(HIDE_ALERT)();

const actions = {
  openModal,
  closeModal,
  showAlert,
  hideAlert,
};

type ModalAction = ActionType<typeof actions>;

//음...여긴 어떻게해야할지 몰라서 제 마음대로 했습니다^_^
type ModalState = Modal;

const initialState: ModalState = {
  isModalVisible: false,
  isAlertVisible: false,
};

export const modal = createReducer<ModalState, ModalAction>(initialState, {
  [OPEN_MODAL]: (state) => {
    return { ...state, isModalVisible: true };
  },
  [CLOSE_MODAL]: (state) => {
    return { ...state, isModalVisible: false };
  },
  [SHOW_ALERT]: (state) => {
    return { ...state, isAlertVisible: true };
  },
  [HIDE_ALERT]: (state) => {
    return { ...state, isAlertVisible: false };
  },
});
