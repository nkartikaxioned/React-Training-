export const TodoInput = ({todoValue, setTodoValue, todoArray, setTodoArray}) => {

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