import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  // will dispatch the action
   const dispatch = useDispatch()

   const counter=useSelector(state => state.counter)

   const incrementHandler =()=>{
      dispatch({type:'increment'});
   }

   const incremenBy5tHandler = ()=>{
    dispatch({type:'increase',amount:5});
   }

   
   const decrementHandler =()=>{
    dispatch({type:'decrement'});
   }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={incremenBy5tHandler}>incrementBy5</button>
      <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
