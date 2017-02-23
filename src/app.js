import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';
import Counter from './components/Counter';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {  Link } from 'react-router'


class App extends Component{
  render() {
    const { routes, location, children } = this.props;
    return (
      <div >
        <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >{routes[routes.length -1].title || '首页'}</NavBar>

        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}

export default App;
