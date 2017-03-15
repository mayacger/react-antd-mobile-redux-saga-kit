import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';
import 'antd/dist/antd.css';
import Counter from './components/Counter';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {  Link } from 'react-router'


class App extends Component{

  goBack = () => {
    console.log(this.context.router)
    console.log(this.props)
    const { location } = this.props;
    if (location.pathname !== '/') {
      this.context.router.goBack()
    }
  }

  render() {
    const { routes, location, children } = this.props;
    return (
      <div >
        <NavBar leftContent={location.pathname === '/' ? false : '返回'}
                iconName={location.pathname === '/' ? false : 'left' }
                mode="light"
                onLeftClick={() => this.goBack()}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}>
        {         routes[routes.length -1].title || '首页'}
      </NavBar>

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

App.contextTypes = {
  router: React.PropTypes.object
};

export default App;
