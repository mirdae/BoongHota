import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { Modal } from '../types';

const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

export const toggleModal = createAction(TOGGLE_MODAL)();

const actions = {
  toggleModal,
};

type ModalAction = ActionType<typeof actions>;

//음...여긴 어떻게해야할지 몰라서 제 마음대로 했습니다^_^
type ModalState = Modal;

const initialState: ModalState = {
  isModalVisible: false,
};

export const modal = createReducer<ModalState, ModalAction>(initialState, {
  [TOGGLE_MODAL]: (state) => {
    return { ...state, isModalVisible: !state.isModalVisible };
  },
});
