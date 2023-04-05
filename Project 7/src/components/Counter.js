import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { storeactions } from '../store';

const Counter = () => {

  const dispatch=useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const togglecounter = useSelector(state => state.counter.showCounter)
  
  const toggleCounterHandler = () => {
    dispatch(storeactions.togglecounter())
   };
  
  const incrementHandler = () => {
    dispatch(storeactions.increment(1))
    
  }
  const decrementHandler = () => {
    dispatch(storeactions.decrement(1))
 
  }
  
  console.log('WTF')
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!togglecounter&&<div className={classes.value}>{counter }</div>}
      
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
