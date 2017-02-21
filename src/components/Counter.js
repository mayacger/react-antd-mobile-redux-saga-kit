import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';


class Counter extends Component {
  render () {
    const { value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd  } = this.props;
    return (
            <p>
              Clicked: {value} times
              {' '}
              <button onClick={onIncrement}>
                +
              </button>
              {' '}
              <button onClick={onDecrement}>
                -
              </button>
              {' '}
              <button onClick={onIncrementIfOdd}>
                Increment if odd
              </button>
              {' '}
              <button onClick={onIncrementAsync}>
                Increment async
              </button>
            </p>
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
