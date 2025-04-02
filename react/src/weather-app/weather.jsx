import { useState } from "react"
import { GetUserInput } from "./getUserInput";

export const Weather = () => {

 const [userInput, setUserInput] = useState("");

  

  return (
    <section>
      <GetUserInput userInput={userInput} setUserInput={setUserInput}/>

    </section>
  )
}