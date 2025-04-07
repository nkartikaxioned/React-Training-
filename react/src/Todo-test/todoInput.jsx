export const TodoInput = ({todoValue, setTodoValue, todoArray, setTodoArray, getFormatedDate}) => {

  const handleTodoValue = (value) => {
    setTodoValue({
      id: Date.now(),
      content: value,
      checked: false,
      date: getFormatedDate(),
    });
  }

  const handleTodoSubmit = (todoValue) => {
    const {id,content,checked,date} = todoValue;

    if(!content) return; 

    const ifTodoValueMatched = todoArray.find(
      (currentTask) => currentTask.content === content 
    );
    setTodoValue({ id: "", content: "", checked: false });
    if(ifTodoValueMatched) return;

    setTodoArray((prev) => [...prev,{id: id , content: content, checked: checked, date: date}]);
    setTodoValue({ id: "", content: "", checked: false, date: "" });
  }

  return (
    <form className="input-component" onSubmit={(e) => {e.preventDefault(); handleTodoSubmit(todoValue);}}>
      <div>
        <input type="text" 
        value={todoValue.content} 
        onChange={(e) => handleTodoValue(e.target.value)} 
        autoComplete="off"/>
      </div>
      <div>
        <button className="btn" type="submit">Set Task</button>
      </div>
    </form>
  )
}