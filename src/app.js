import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

const App = () => {
  return (
    <div >
      <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
      <h1>AntDesign mobile Demo</h1>
    </div>
  );
}

export default App;
