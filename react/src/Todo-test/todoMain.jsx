import { useState } from "react"
import { TodoInput } from "./todoInput"
import { DisplayTodo } from "./displayTodo";



const listKey = "TodoListKey";
export const TodoMain = () => {
const [todoValue, setTodoValue] = useState("");

const [todoArray, setTodoArray] = useState(() => {
  const localTodo = localStorage.getItem(listKey);
  return localTodo ? JSON.parse(localTodo) : [];
});

const [isVisible, setIsVisible] = useState(false);

localStorage.setItem(listKey, JSON.stringify(todoArray));
  return (
    <div>
      <div>
        <div>
          <button onClick={() => {setIsVisible(!isVisible)}}>Add Task</button>
        </div>
        <select name="" id="">
          <option value="all" defaultChecked>ALL</option>
          <option value="checked">Checked</option>
          <option value="unchecked">UnChecked</option>
        </select>
      </div>
      {isVisible && <TodoInput 
      todoValue={todoValue} 
      setTodoValue={setTodoValue} 
      todoArray={todoArray} 
      setTodoArray={setTodoArray}/>}
      <ul>
        <DisplayTodo todoArray={todoArray}/>
      </ul>
    </div>
  )
}