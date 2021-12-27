import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import { RootState } from "./../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* Increments the value of state counter */}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className="w-40"
      >
        Increment
      </Button>
      {/* Decrements the value of state counter */}
      <Button
        variant="outlined"
        startIcon={<RemoveIcon />}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        className="w-40"
      >
        Decrement
      </Button>
      {/* Displays the current value of state counter */}
      <span className="font-sans text-2xl text-center font-bold">{count}</span>
    </>
  );
}

export default Counter;
