import { connect } from 'react-redux';
import Counter from 'components/Counter';
import { valueSelector } from 'store/counter/selectors';
import { counterIncrement, counterDecrement } from 'store/counter/actions';

const mapStateToProps = state => ({
  value: valueSelector(state),
});
const mapDispatchToProps = dispatch => ({
  onDecrement: () => dispatch(counterDecrement()),
  onIncrement: () => dispatch(counterIncrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
