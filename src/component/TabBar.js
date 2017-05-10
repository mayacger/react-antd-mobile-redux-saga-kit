import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { navigate } from '../actions';

import { connect } from 'react-redux';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      hidden: false,
      items: this.getTabItem(props.items),
    };
  }

  getTabItem = (items) => {
    items = items.childRoutes.filter((item) => item.isTab)
    return items;
  }

  getActive = (path, index) => {

    let patt1 = new RegExp(path);
		if (patt1.test(location.pathname)) {
      return true;
		}
    if (location.pathname === "/" && index === 0) {
      return true;
    }
  }

  render() {

    return (
      <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
        {this.state.items && this.state.items.map((item, index) => {
          return (<TabBar.Item
            title={item.title || "首页"}
            key={index}
            icon={item.tab.icon}
            selectedIcon={item.tab.selectedIcon}
            selected={this.getActive(item.path, index)}
            badge={item.tab.badge}
            onPress={() => {

              if(item.path) this.props.navigate(item.path);
              if(item.tab.onPress) item.tab.onPress();
            }}
            data-seed={item.tab.dataSeed}
          >
          </TabBar.Item>)
        })}
      </TabBar>
    )

  }
};
function mapStateToProps(state) {
  return {
    state,
  }
}

export default connect(mapStateToProps, {
  navigate
})(Tab);
