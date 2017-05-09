import React from 'react';
import { Icon } from 'antd-mobile';
module.exports = {
  // path: 'home',
  rightContent: [
    <Icon onClick={() => console.log(1)} key="0" type="search" style={{ marginRight: '0.32rem' }} />,
    <Icon key="1" type="ellipsis" />,
  ],
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./homeView').default);
    });
  }
};
