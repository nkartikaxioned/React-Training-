import { useState } from "react";


// props values cannot be modified they are immutable
export const State = () => {
  // count is variable and useCount is the function through we can update count variable
  const [count, setCount] = useState(0); //0 indicates that we have set initial value of count to 0.
  
  const handleIncrementClick = () => {
    setCount(() => count + 1);
  }

  const handleDecrementClick = () => {
    setCount(() => count - 1);
  }

  return (
    <>
      <span>{count}</span>
      <button className="increment" onClick={handleIncrementClick}>Increment</button>
      <button className="decrement" onClick={handleDecrementClick}>Decrement</button>
    </>
  );
}