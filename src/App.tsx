import React from 'react';
import './App.css';

type AppProps = {
  message: React.ReactNode;
}

function App({message}: AppProps) {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center h-screen'>
      <h1 className="font-sans text-3xl text-center font-bold">{message}</h1>
      <button className='rounded-md bg-[#1da1f2] text-white w-40 h-8 hover:bg-sky-700'>Increment</button>
    </div>
  );
}

export default App;
