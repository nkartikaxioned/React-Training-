export const DisplayTodo = ({todoArray, setTodoArray, isEditId, setIsEditId, editValue, setEditValue, getFormatedDate}) => {

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
   const updatedTodo = todoArray.map((currentTodo) => {
      if(currentTodo.id === isEditId) {
       return {...currentTodo, content:  editValue, date: getFormatedDate()}
      } 
      return currentTodo;
    })

    setTodoArray(updatedTodo);
    setIsEditId(null);
    setEditValue("");
  }

  return (
    <>
      {todoArray.map((todo) => {
        return (
          <li key={todo.id}>
            {isEditId === todo.id ? (
              <>
              <input
              type="text"
              value={editValue}
              onChange={(e)=> {handleEditChange(e.target.value)}}
              />
              <button onClick={(e) => {handleUpdate(editValue)}}>Update Todo</button>
            </>
            ) : (
              <>
                <input type="checkbox" 
                checked={todo.checked}
                onChange={() => handleToggleChecked(todo.id)}/>
                <div>
                <p className={todo.checked ? "line-through" : ""}>{todo.content}</p>
                <p>{todo.date}</p>
                </div>
                <div>
                  <button className="btn" onClick={(e)=> {handleDeleteTodo(todo.id)}}>Delete</button>
                </div>
                <div>
                  <button className="btn" onClick={(e)=>{handleEdit(todo.id)}} >Edit</button>
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