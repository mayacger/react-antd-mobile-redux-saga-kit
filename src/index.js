import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, Icon } from 'antd-mobile';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import saga from 'redux-saga';

import * as reducers from './reducers';
const reducer = combineReducers(reducers);
const middlewares = [];
// 创建中间件saga
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);

//applymiddleware配置中间件
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(reducer);


import App from './app';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
