import React, { Component } from 'react';
import { Router } from 'react-router';

import history from '../services/history';

import Nav from './nav';


const rootData = {
  path: '/',
  title:"首页",
  icon:"rob",
  indexRoute: require('../container/home'),
  component: Nav,
  // getComponent(nextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, require('./nav').default);
  //   }, 'App');
  // },
  childRoutes: [
    require('../container/topics'),
    require('../container/about'),
  ]
};

class Routes extends Component {
  render () {
    return (
      <Router history={history}
        routes={rootData}
         />
     );
  }
}

export default Routes;
