import { useState } from "react"

export const StateLifting = () => {
  const [inputValue, setInputValue] = useState(""); //state lifting
  return (
    <>
      <InputChild inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayInput inputValue={inputValue}/>
    </>
  );
}


export const InputChild = (prop) => {
  const { inputValue, setInputValue } = prop;
  return(
    <input type="text" value={inputValue} placeholder="enter text" onChange={(e) => setInputValue(e.target.value)}/>
  );
};

export const DisplayInput = ({inputValue}) => {
  return (
      <p>The entered text is: {inputValue} </p>
  )
}