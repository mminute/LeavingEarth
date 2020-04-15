import gameBoard from 'src/GameLogic/GameBoard/generateGameBoard';
import { dummyReducer, IDummyAction } from './reducers/index'
import { IStoreState } from './types/index';
import { createStore } from 'redux';

const initialState = { gameBoard };

function configureStore() {
  return createStore<IStoreState, IDummyAction, any, any>(dummyReducer, initialState);
};

export default configureStore;
