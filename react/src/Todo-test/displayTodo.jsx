import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GiCancel } from "react-icons/gi";


export const DisplayTodo = ({todoArray, setTodoArray, isEditId, setIsEditId, editValue, setEditValue, getFormatedDate}) => {

  const isChecked = "line-through font-bold! text-[18px]!",
  defaultText = "font-bold! text-[18px]!";

  //delete functionality
  const handleDeleteTodo = (id) => {
    const updatedTodoArray = todoArray.filter((todo) => todo.id !== id)
    setTodoArray(updatedTodoArray);
  }

  //check toggle functionality
  const handleToggleChecked = (id) => {
    const checkedTodo = todoArray.map((todo)=> todo.id === id ? {...todo, checked: !todo.checked } : todo)
    setTodoArray(checkedTodo)
  }

  //function to set isEditId value
  const handleEdit = (id) => {
    setIsEditId(id);
  }

  //function to display User Input
  const handleEditChange = (value) => {
    setEditValue(value);
  }

  //functionality to cancel update
  const handleCancelUpdate = (id) => {
    setIsEditId("");
  }

  //function to update value based on id in array object
  const handleUpdate = (editValue) => {
    if(editValue) {

      const updatedTodo = todoArray.map((currentTodo) => {
         if(currentTodo.id === isEditId) {
          return {...currentTodo, content:  editValue, date: getFormatedDate()}
         } 
         return currentTodo;
       })
   
       setTodoArray(updatedTodo);
       setIsEditId(null);
       setEditValue("");
    } else {
      setEditValue("");
    }
  }

  return (
    <>
      {todoArray.map((todo) => {
        return (
          <li key={todo.id}>
            {isEditId === todo.id ? (
              <div className="flex flex-row justify-between w-full">
                <input
                type="text"
                className="border rounded"
                value={editValue}
                onChange={(e)=> {handleEditChange(e.target.value)}}
                />
                <div>
                  <button className="btn" onClick={(e) => {handleUpdate(editValue)}}>Update Todo</button>
                  <button className="btn ml-2!" title="Cancel Update" onClick={(e) => {handleCancelUpdate(todo.id)}}><GiCancel size={20}/></button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-row">
                  <input type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleToggleChecked(todo.id)}/>
                  <div className="ml-2!">
                    <p className={todo.checked ? isChecked : defaultText}>{todo.content}</p>
                    <p>{todo.date}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-1.5">
                  <div>
                    <button className="btn" onClick={(e)=> {handleDeleteTodo(todo.id)}}><MdOutlineDeleteForever size={20}/></button>
                  </div>
                  <div>
                    <button className="btn" onClick={(e)=>{handleEdit(todo.id)}} ><MdOutlineModeEdit size={20}/></button>
                  </div>
                </div>
              </>
            )
          }
          </li>
        );
      })}
    </>
  );
}