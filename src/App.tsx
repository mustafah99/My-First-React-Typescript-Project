import React from 'react';
import { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

type AppProps = {
  message: React.ReactNode;
}

function App({message}: AppProps) {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='space-y-4 container mx-auto flex flex-col justify-center items-center h-screen'>
      <h1 className="font-sans text-3xl text-center font-bold">{message}</h1>
      <button aria-label="Increment value" onClick={() => dispatch(increment())} className='rounded-md bg-[#1da1f2] text-white w-40 h-8 hover:bg-sky-700'>Increment</button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())} className='rounded-md bg-[#1da1f2] text-white w-40 h-8 hover:bg-sky-700'>Decrement</button>
      <span className='font-sans text-2xl text-center font-bold'>{count}</span>
    </div>
  );
}

export default App;
