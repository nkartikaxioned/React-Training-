import React from "react";
//props short form for properties
//props are similar to arguments that are passed to function
//props are immutable i.e they are ready only
export const Test = (props) => {
  return (
  <>
    <h2>today we will be learning {props.name}</h2>
  </>
  );
};

