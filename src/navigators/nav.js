import React, { Component } from 'react';

import NavBar from '../component/NavBar';
import TabBar from '../component/TabBar';
const styles = {
  modal: {
    position: "absolute",
    width: "100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,.2)",
    zIndex: 100
  }
};

class Nav extends Component {

  render () {
    let { routes } = this.props;
    const currentRoute = routes[routes.length -1];
    return (
      <div style={{display:'flex',flexFlow: 'column', height:'100vh'}}>
          <NavBar {...this.props}/>
          {!currentRoute.isModal && <div style={{flex:1, backgroundColor:"#eee"}}>
            {this.props.children}
          </div>}

          <div style={{height:'1rem'}}>
            <TabBar items={this.props.route} />
          </div>
          {currentRoute.isModal && <div style={styles.modal}>
            {this.props.children}
          </div>}
      </div>
    );
  }
}

export default Nav;
