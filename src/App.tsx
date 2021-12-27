import React from "react";
import Counter from './components/counter'

type AppProps = {
  message: React.ReactNode;
};

function App({ message }: AppProps) {
  return (
    <div className="space-y-4 container mx-auto flex flex-col justify-center items-center h-screen">
      <h1 className="font-sans text-3xl text-center font-bold">{message}</h1>
      <Counter />
    </div>
  );
}

export default App;
