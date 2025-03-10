export const EventHandling = () => {
  return (
    <>
    {/* function components with named functions */}
      {/* <button onClick={handleButtonClick}>Click me</button> we cannot pass arguments */}
      {/* <button onClick={() => handleButtonClick()}>Click me</button> if we dont pass event to object the we wont get synthetic events */}
      <button onClick={(event) => handleButtonClick(event)}>Click 2 with event</button>
      <button onClick={() => handleGreeting("abc")}>button 2</button>
    </>
  );
}

// traditional fuunction
// function handleButtonClick() {
//   alert("This is an onClick event");
// }

//fat arrow function
const handleButtonClick = (e) => {
  console.log(e); 
  console.log(e.target);
  console.log(e.target.type); 
  alert("This is an onClick event");
}

const handleGreeting = (user) => {
  alert(`welcome ${user}`);
}