import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { dummyReducer, IDummyAction } from './redux/reducers/index'
import { IStoreState } from './redux/types/index';

const initialState = { dummyState: 0 };
const store = createStore<IStoreState, IDummyAction, any, any>(dummyReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
