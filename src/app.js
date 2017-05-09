import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './navigators/routes';

import configureStore from './store/configureStore';
const store = configureStore();
class App extends Component {
  render () {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    )
  }
}

export default App;
