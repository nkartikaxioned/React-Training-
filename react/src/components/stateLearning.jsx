import React from "react";
import { useState } from "react";

const [text, setText] = useState("");
export const StateFunction = () => {
  const [count , setCount] = useState(0);

  return (
    <>
    <p>Click Counter: {count}</p>
    <button onClick={() => setCount(count + 1) }>Incremant</button>
    <button onClick={() => setCount(count - 1) }>Decrement</button>
    <button onClick={() => setCount(0) }>Reset</button>
    </>
  );
}

// function validateText(text) {
//   if(text)
// }

export const UserName = () => {

  return (
    <div>
      <label htmlFor="Name" id="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" value={text} onChange={(e) => {setText(e.target.value); validateText(text)}}/>  
    </div>
  );
}