import { useState } from "react";

export const DerivedState = () => {

  const [users, setUsers] = useState(
    [
      { id : 1, name : "Alice", age : 25 },
      { id : 2, name : "Pqa", age : 55 },
      { id : 3, name : "Abc", age : 35 },
      { id : 4, name : "Xyz", age : 75 },
      { id : 5, name : "Qrs", age : 10 }
    ]
  );

  return (
    <>
    <ul>
      {users.map((curElement) => {
        return (

          <li key={curElement.id}> curElement name is {curElement.name} and age is {curElement.age}.</li>
        );
      })}
    </ul>
    </>
  );
};