// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from 'store/actions';

type Props = {
  ctr: number,
  onIncrementCounter: Function,
  onDecrementCounter: Function,
  onAddCounter: Function,
  onSubstractCounter: Function,
  storedResults: Array,
  onStoreResult: Function,
  onRemoveResult: Function,
};

/* eslint-disable react/prefer-stateless-function */
class Counter extends Component<Props> {
  render() {
    const {
      ctr,
      onIncrementCounter,
      onDecrementCounter,
      onAddCounter,
      onSubstractCounter,
      storedResults,
      onRemoveResult,
      onStoreResult,
    } = this.props;
    return (
      <>
        <p>Count: {ctr}</p>
        <div>
          <button type="button" onClick={onIncrementCounter}>
            Increment
          </button>
          <button type="button" onClick={onDecrementCounter}>
            Decrement
          </button>
          <button type="button" onClick={onAddCounter}>
            Add 5
          </button>
          <button type="button" onClick={onSubstractCounter}>
            Subtract 5
          </button>
        </div>
        <br />
        <hr />
        <button type="button" onClick={() => onStoreResult(ctr)}>
          Store Result
        </button>
        <ul>
          {storedResults.map(el => (
            /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
            <li key={el.id} onClick={() => onRemoveResult(el.id)}>
              {el.value}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// Counter.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = dispach => {
  return {
    onIncrementCounter: () => dispach(actionCreators.inc()),
    onDecrementCounter: () => dispach(actionCreators.dec()),
    onAddCounter: () => dispach(actionCreators.add(5)),
    onSubstractCounter: () => dispach(actionCreators.sub(5)),
    onStoreResult: res => dispach(actionCreators.storeResult(res)),
    onRemoveResult: id => dispach(actionCreators.removeResult(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
