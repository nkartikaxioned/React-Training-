export const DisplayTodo = ({todoArray, setTodoArray}) => {

  const handleDeleteTodo = (id) => {
    const updatedTodoArray = todoArray.filter((todo) => todo.id !== id)
    setTodoArray(updatedTodoArray);
  }

  const handleToggleChecked = (id) => {
    const checkedTodo = todoArray.map((todo)=> todo.id === id ? {...todo, checked: !todo.checked } : todo)
    setTodoArray(checkedTodo)
  }

  return (
    <>
      {todoArray.map((todo) => {
        return (
          <li key={todo.id}>
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
              <button className="btn">Edit</button>
            </div>
          </li>
        );
      })}
    </>
  );
}