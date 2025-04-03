

export const GetUserInput = ({userInput, setUserInput}) => {
  const emptyError = "Input cannot be empty";
  const handleOnChange =(e)=> {
    let inputValue = e.target.value;
    setUserInput(inputValue);
  }

  const handleFormSubmit =(e) => {
    e.preventDefault();

    validateSubmitVlaue(userInput);
  }

  const validateSubmitVlaue =(userInput)=> {
    
    if(!userInput) return false;
    
    
    
    
  }

  return (
    <form onSubmit={handleFormSubmit} >
      <div className="input-container">
        <label htmlFor="userInput">Enter City Name:</label>
        <input type="text" id="userInput" maxLength={20} value={userInput} onChange={(e)=> handleOnChange(e)} autoComplete="off"/>
        <span className="error-txt"></span>
      </div>
      <div className="submit-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}