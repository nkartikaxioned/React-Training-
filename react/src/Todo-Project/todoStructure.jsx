export const TodoInputStructure = ({inputValue, handleChangeInput, handleFormSubmit, todoArray, handleClear, handleDelete, handleCheck}) => {
  return (
      <div className="form-container">
        <form onSubmit = {handleFormSubmit}>
          <div className="container">
            <input 
            type="text" 
            autoComplete="off" 
            value={inputValue} 
            onChange={(e) => {handleChangeInput(e.target.value)}}
            />
            <button className="btn" type="submit">Add Todo</button>
          </div>
          <ul className="display-container">
            {todoArray.map((currentToDo, index) => {
              return (
                <li key={index}>
                  <p>{currentToDo}</p>
                  <button className="btn" onClick={ (e) => handleCheck(e)}>Check</button>
                  <button className="btn" onClick={() => handleDelete(index)}>Delete</button>
                </li>
              );
            })}
          </ul>
          {todoArray.length > 0 && (
            <div className="clear-container">
              <button className="btn" onClick={handleClear}>Clear</button>
            </div>
          )}
        </form>
      </div>
  );
}