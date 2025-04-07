import { useState } from "react"
import { TodoInput } from "./todoInput"
import { DisplayTodo } from "./displayTodo";
import { IoIosAddCircleOutline } from "react-icons/io";

const listKey = "TodoListKey";
export const TodoMain = () => {
const [todoValue, setTodoValue] = useState({ id: "", content: "", checked: false, date: "" });

const [todoArray, setTodoArray] = useState(() => {
  const localTodo = localStorage.getItem(listKey);
  return localTodo ? JSON.parse(localTodo) : [];
});

const [isVisible, setIsVisible] = useState(false);
const [isEditId, setIsEditId] = useState("");
const [editValue, setEditValue] = useState("");
const [filterStatus, setFilterStatus] = useState("all");


const getFormatedDate =() => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convert 24-hour to 12-hour format
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // Format date as dd/mm/yyyy
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const year = now.getFullYear();

  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm} ${day}/${month}/${year}`;

  return formattedTime; // e.g. "5:21 am 01/02/2025"
}

const filteredTodos = todoArray.filter((todo) => {
  if (filterStatus === "checked") return todo.checked;
  if (filterStatus === "unchecked") return !todo.checked;
  return true;
});


localStorage.setItem(listKey, JSON.stringify(todoArray));
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>TODO LIST</h1>
      <div className="flex flex-row justify-between w-4/12 max-w-4xl mb-5!">
        <div>
          <button className="btn" onClick={() => {setIsVisible(!isVisible)}}>Add Task <IoIosAddCircleOutline size={18}/></button>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">ALL</option>
          <option value="checked">Checked</option>
          <option value="unchecked">UnChecked</option>
        </select>
      </div>
      {isVisible && <TodoInput 
      todoValue={todoValue} 
      setTodoValue={setTodoValue} 
      todoArray={todoArray} 
      setTodoArray={setTodoArray}
      getFormatedDate={getFormatedDate}/>}
      <ul>
        <DisplayTodo 
        todoArray={filteredTodos} 
        setTodoArray={setTodoArray}
        isEditId={isEditId} 
        setIsEditId={setIsEditId} 
        editValue={editValue}
        setEditValue={setEditValue}
        getFormatedDate={getFormatedDate}/>
      </ul>
    </div>
  )
}