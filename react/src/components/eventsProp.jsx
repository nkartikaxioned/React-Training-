import { ChildProp } from "./childProp";

export const EventsProp = () => {

  const handleMouseEnter = () => {
    console.log("MouseEnter Event occured");
  }

  const handleAlert = (event) => {
    alert(`an "${ event.type }" event occured`);
  } 

  return (
    <>
      <ChildProp onClick = {(event) => {handleAlert(event)}} 
        onMouseEnter={handleMouseEnter}/>
    </>
  );
}