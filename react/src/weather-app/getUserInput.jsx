

export const GetUserInput = ({userInput, setUserInput}) => {
  return (
    <div className="input-container">
      <label htmlFor="userInput">Enter City Name:</label>
      <input type="text" id="userInput" maxLength={20}/>
      <span className="error-txt"></span>
    </div>
  )
}