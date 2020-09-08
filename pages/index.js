import { connect } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
} from '../redux/actions/counterActions';

const App = ({ counter, incrementCounter, decrementCounter }) => {
  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <button onClick={() => incrementCounter()}>Increment</button>
        <button onClick={() => decrementCounter()}>Decrement</button>
        <h1>{counter}</h1>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch(incrementCounter());
    },
    decrementCounter: () => {
      dispatch(decrementCounter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
