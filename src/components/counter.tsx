import React from "react";
import { RootState } from "./../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* Increments the value of state counter */}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className="rounded-md bg-[#1da1f2] text-white w-40 h-8 hover:bg-sky-700"
      >
        Increment
      </button>
      {/* Decrements the value of state counter */}
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        className="rounded-md bg-[#1da1f2] text-white w-40 h-8 hover:bg-sky-700"
      >
        Decrement
      </button>
      {/* Displays the current value of state counter */}
      <span className="font-sans text-2xl text-center font-bold">{count}</span>
    </>
  );
}

export default Counter;
