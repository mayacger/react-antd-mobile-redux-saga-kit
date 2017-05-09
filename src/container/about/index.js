module.exports = {
  path: 'about',
  title: '关于',
  isTab:true,
  isModal:true,
  tab: {
    icon: { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' },
    selectedIcon: { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' },
    badge: 1,
    dataSeed: 'logId',
    onPress: () => {
      console.log('tab');
    }
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./view').default);
    },"about");
  },
  childRoutes: [
    {
      path: 'a',
      title: '关于2',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./view').default);
        });
      },
    }
  ]
};
