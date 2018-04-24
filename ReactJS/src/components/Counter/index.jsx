import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number.isRequired,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
};
const defaultProps = {
  onDecrement() {},
  onIncrement() {},
};

function Counter(props) {
  const { value, onIncrement, onDecrement } = props;

  return (
    <div className="Counter">
      <p className="Counter__value">{value}</p>
      <button type="type" onClick={onIncrement}>Increment</button>
      <button type="type" onClick={onDecrement}>Decrement</button>
    </div>
  );
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
