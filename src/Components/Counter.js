import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 return (
    <div style={{textAlign:'center'}}>
      <h2>Counter: {count}</h2>
      <button style={{backgroundColor:'green', color:'white',padding:'7px', borderRadius:'4px',marginRight: '10px' }} onClick={() => dispatch(increment())}>Increment</button> 
      <button  style={{backgroundColor:'red', color:'white', padding:'7px',borderRadius:'4px'}}onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
export default Counter;
