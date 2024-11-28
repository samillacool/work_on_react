import React, { createContext, useState } from 'react';
import Use from './use';
import UseEfffect from './useEfffect';

export const MyName = createContext()


const Counter = () => {
  // Declare a state variable 'count' and its setter function 'setCount' using useState
  const [count, setCount] = useState(0); // The initial state is 0
  const [ibindanga,setName] =useState(["Samilla" ,"L5sod"])
  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);

  return (
    
    <div style={{backgroundColor:'chocolate'}}>
      <MyName.Provider value={ibindanga}>
         <Use />             
     </MyName.Provider>
       <h1 style={{color:'darkorange'}}><u>Use State Sample</u></h1>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
       <UseEfffect />
    </div>
    
  );
};

export default Counter;

