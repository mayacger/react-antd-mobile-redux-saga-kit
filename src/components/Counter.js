import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Icon, SearchBar, WingBlank, WhiteSpace } from 'antd-mobile';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

class Counter extends Component {
  render () {
    const { value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd  } = this.props;
    return (
            <div>
              <SearchBar placeholder="搜索" />
              <WhiteSpace />
              <WingBlank>
                <WhiteSpace />
                Clicked: {value} times
                {' '}
                <Button onClick={onIncrement}>
                  +
                </Button>
                {' '}
                <Button onClick={onDecrement}>
                  -
                </Button>
                {' '}
                <Button onClick={onIncrementIfOdd}>
                  Increment if odd
                </Button>
                {' '}
                <Button onClick={onIncrementAsync}>
                  Increment async
                </Button>
              </WingBlank>
              <WingBlank>
                <Icon type={require('../svg/favorite.svg')} />
              </WingBlank>

              <WhiteSpace />
              <WingBlank>

                <h4>Basic</h4>
                <ButtonGroup>
                  <Button>Cancel</Button>
                  <Button type="primary">OK</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button disabled>L</Button>
                  <Button disabled>M</Button>
                  <Button disabled>R</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary">L</Button>
                  <Button>M</Button>
                  <Button>M</Button>
                  <Button type="dashed">R</Button>
                </ButtonGroup>
                <WhiteSpace />
                <h4>With Icon</h4>
                <ButtonGroup>
                  <Button type="primary">
                    <Icon type="left" />Go back
                  </Button>
                  <Button type="primary">
                    Go forward<Icon type="right" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary" icon="cloud" />
                  <Button type="primary" icon="cloud-download" />
                </ButtonGroup>
              </WingBlank>

            
       
          </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired
}

export default connect(
  state => ({
    value: state.counter,
  }),
  dispatch => {
    const action = type => dispatch({type})
    return ({
      onIncrement : () => action('INCREMENT'),
      onDecrement :() => action('DECREMENT'),
      onIncrementIfOdd : () => action('INCREMENT_IF_ODD'),
      onIncrementAsync :() => action('INCREMENT_ASYNC'),
    })
  }
)(Counter);
