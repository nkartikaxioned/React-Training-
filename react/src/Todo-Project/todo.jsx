import { useState } from "react";
import "./todo.css";

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


  return (
  <TodoInputStructure 
  inputValue={inputValue} 
  handleChangeInput={handleChangeInput} 
  handleFormSubmit={handleFormSubmit} 
  todoArray={todoArray}/>
  );
}

export const TodoInputStructure = ({inputValue, handleChangeInput, handleFormSubmit, todoArray}) => {
  return (
      <div className="form-container">
        <form onSubmit = {handleFormSubmit}>
          <div className="container">
            <input 
            type="text" 
            autoComplete="off" 
            value={inputValue} 
            onChange={(e) => {handleChangeInput(e.target.value)}}
            />
            <button className="btn" type="submit">Add Todo</button>
          </div>
          <ul className="display-container">
            {todoArray.map((currentToDo, index) => {
              return (
                <li key={index}>
                  <p>{currentToDo}</p>
                  <button className="btn">Check</button>
                  <button className="btn">Delete</button>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
  );
}