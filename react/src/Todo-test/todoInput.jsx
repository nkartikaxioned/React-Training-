
export const TodoInput = ({todoValue, setTodoValue, todoArray, setTodoArray}) => {

  const handleTodoValue = (value) => {
    setTodoValue(value);
  }

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if((!todoValue) || todoArray.includes(todoValue)) {
      setTodoValue("");
      return
    };

    setTodoArray((prev) => [...prev,todoValue]);
    setTodoValue("");
  }

  return (
    <form className="input-component" onSubmit={handleTodoSubmit}>
      <div>
        <input type="text" 
        value={todoValue} 
        onChange={(e) => handleTodoValue(e.target.value)} 
        autoComplete="off"/>
      </div>
      <div>
        <button className="btn" type="submit">Set Task</button>
      </div>
    </form>
  )
}