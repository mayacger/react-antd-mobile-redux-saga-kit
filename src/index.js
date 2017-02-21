import React from 'react';
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

import App from './app';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
render(<Root />, document.getElementById('root'));
