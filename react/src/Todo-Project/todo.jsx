import { useState } from "react";
import "./todo.css";
import { TodoInputStructure } from "./todoStructure";

export const TodoComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoArray, setToDoArray] = useState([]);
  const handleChangeInput = (value) => setInputValue(value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if((todoArray.includes(inputValue)) || (!inputValue)) {
      setInputValue("");
      return;
    }

    setToDoArray((prev) => [...prev, inputValue]);    
    setInputValue("");
  }

  const handleClear = () => {
    setToDoArray([]);
  }

  const handleDelete = (index) => {
    setToDoArray((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheck = (e) => {
    let parentElement = e.target.parentElement;
    if(!parentElement.classList.contains('checked')) {
      parentElement.classList.add('checked');
    } else {
      parentElement.classList.remove('checked')
    }
  }
  

  return (
  <TodoInputStructure 
  inputValue={inputValue} 
  handleChangeInput={handleChangeInput} 
  handleFormSubmit={handleFormSubmit} 
  todoArray={todoArray}
  handleClear = {handleClear} 
  handleDelete = {handleDelete}  
  handleCheck = {handleCheck}/>
  );
}

