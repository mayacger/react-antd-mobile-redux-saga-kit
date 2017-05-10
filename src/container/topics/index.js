import React from 'react';
import { Icon } from 'antd-mobile';
module.exports = {
  path: 'home',
  title: "首页",
  rightContent: [
    <Icon onClick={() => console.log(1)} key="0" type="search" style={{ marginRight: '0.32rem' }} />,
    <Icon key="1" type="ellipsis" />,
  ],
  isTab: true,
  tab: {
    icon: <div style={{
      width: '0.44rem',
      height: '0.44rem',
      background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
    />,
    selectedIcon: <div style={{
      width: '0.44rem',
      height: '0.44rem',
      background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
    />
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Topics').default);
    },"home");
  }
};
