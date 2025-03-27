import React from "react";
import { TodoComponent } from "./Todo-Project/todo";
// import { Test } from "./components/propsLearning";
// import { StateFunction, UserName } from "./components/stateLearning";
// import { StudentsList } from "./components/studentsList";
// import { GetProfile } from "./components/profile";
// import "./components/profile.css";
// import "./components/profile.module.css"
// import { EventHandling } from "./components/eventHandling";
// import { EventsProp } from "./components/eventsProp";
// import { EventPropagation } from "./components/eventPropagation";
// import { DerivedState } from "./components/Hooks/hooksPractise";
// import { StudentsList } from "./components/Hooks/useStatePractise";
// import { StateLifting } from "./components/stateLifting";
// import { ToggleSwitch } from "./components/toggleSwitch/toggleSwitch";


export const App = () => {

  return (
    <section>
      <TodoComponent />
    </section>
  )
};

// const Repeatfunction = () => {
//   let name = "";
//   return (
//     <>
//       <div>
//         <h1>Welcome to React {name ? name : "Buddy"}</h1>
//         <p>components in react {10+9}</p>
//       </div>
//     </>
//   )
// }

// export default App;
//react fragment is used to eleminate extra div 
//fragment syntax <React.Fragment></React.Fragment> or <></>
