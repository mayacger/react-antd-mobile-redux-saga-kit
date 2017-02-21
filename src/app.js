import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

import Counter from './components/Counter';



class App extends Component{
  render() {
    const action = type => this.props.dispatch({type})
    return (
      <div >
        <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
        <h1>AntDesign mobile Demo</h1>
        <Counter
        asdas={() => console.log("sad")}
        />
      </div>
    );
  }

}

export default App;
