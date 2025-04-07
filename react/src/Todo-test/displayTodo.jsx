export const DisplayTodo = ({todoArray, setTodoArray, isEditId, setIsEditId, editValue, setEditValue, getFormatedDate}) => {

  const isChecked = "line-through font-bold! text-[18px]!",
  defaultText = "font-bold! text-[18px]!";

  const handleDeleteTodo = (id) => {
    const updatedTodoArray = todoArray.filter((todo) => todo.id !== id)
    setTodoArray(updatedTodoArray);
  }

  const handleToggleChecked = (id) => {
    const checkedTodo = todoArray.map((todo)=> todo.id === id ? {...todo, checked: !todo.checked } : todo)
    setTodoArray(checkedTodo)
  }

  const handleEdit = (id) => {
    setIsEditId(id);
  }

  const handleEditChange = (value) => {
    setEditValue(value);
  }

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
                <button className="btn" onClick={(e) => {handleUpdate(editValue)}}>Update Todo</button>
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
                    <button className="btn" onClick={(e)=> {handleDeleteTodo(todo.id)}}>Delete</button>
                  </div>
                  <div>
                    <button className="btn" onClick={(e)=>{handleEdit(todo.id)}} >Edit</button>
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