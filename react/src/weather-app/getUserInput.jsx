

export const GetUserInput = ({userInput, setUserInput}) => {

  const handleOnChange =(e)=> {
    let inputValue = e.target.value;
    setUserInput(inputValue);
  }

  return (
    <form action="">
      <div className="input-container">
        <label htmlFor="userInput">Enter City Name:</label>
        <input type="text" id="userInput" maxLength={20} value={userInput} onChange={(e)=> handleOnChange(e)}/>
        <span className="error-txt"></span>
      </div>
      <div className="submit-container">

      </div>
    </form>
  )
}