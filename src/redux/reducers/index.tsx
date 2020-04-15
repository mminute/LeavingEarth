import { IStoreState } from '../types/index';

const DUMMY_INCREMENT = 'HELLO_DUMMY';
export interface IDummyAction { type: typeof DUMMY_INCREMENT };

export function dummyReducer(state: IStoreState, action: IDummyAction) {
  switch (action.type) {
    // case DUMMY_INCREMENT:
    //   return { ...state, dummyState: state.dummyState + 1 };
    default:
      return state;
  }
}

export default dummyReducer;
