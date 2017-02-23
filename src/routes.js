import React from 'react'
import {  Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './app'
import Counter from './components/Counter';


function Routers() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Counter}/>
        <Route path="/:login"
               component={Counter}  title="login"/>
        <Route path="/:login/:name"
               component={Counter} title="user" />
      </Route>
    </Router>
  );
}

export default Routers;
