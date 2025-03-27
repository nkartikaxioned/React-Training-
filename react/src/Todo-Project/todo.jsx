import { useState } from "react";
import "./todo.css";

export const TodoComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
  <>
    <div className="form-container">
      <form>
        <div className="container">
          <input type="text" autoComplete="off" value={inputValue}/>
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  </>
  );
}