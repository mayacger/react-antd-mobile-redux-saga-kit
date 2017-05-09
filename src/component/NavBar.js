import React from 'react';
import { NavBar } from 'antd-mobile';

import { connect } from 'react-redux';
import { navigate } from '../actions';


const Nav = ({ routes, location, navigate }) => {

  const currentRoute = routes[routes.length -1];

  let title = currentRoute.title || "首页";
  if ( typeof title === 'string') {
    document.title = title;
  }
  let pathname = location.pathname;

  let leftContent = "left";
  if (pathname ==="/") {
    leftContent = null;
  }

  function _onLeftClick() {
    if (pathname ==="/") {
      return;
    }
    navigate("","goBack")
  }

  let rightContent = currentRoute.rightContent || null;

  return (
    <NavBar leftContent="" iconName={leftContent} mode="light" onLeftClick={() => _onLeftClick()}
      rightContent={rightContent}
    >{title}</NavBar>
  )
};

export default connect(null, {
  navigate
})(Nav);
