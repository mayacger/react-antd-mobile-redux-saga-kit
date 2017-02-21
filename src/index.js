import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, Icon } from 'antd-mobile';

function App() {
  return (
    <div style={{ margin: 100 }}>
    <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
    rightContent={[
      <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
      <Icon key="1" type="ellipsis" />,
    ]}
  >NavBar</NavBar>
      <h1>AntDesign Demo</h1>
      <hr /><br />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
