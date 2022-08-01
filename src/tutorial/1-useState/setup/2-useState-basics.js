/* 
  - useState is a function (react hook) that has been exported by name
    const useState and not using the default export. So, it has to be
    imported by the exact same name.
*/
import React, { useState } from "react";

/*
  # Gneral rules for all Hooks
    - their names start with "use"
    - Components name where hooks are used has to start with UPPERCASE letter
    - Must be used in the function/component body
    - Cannot call conditionally Ex. if(useState()){} 
*/
const UseStateBasics = () => {
  /* 
    - Use array destructuring
    - useState is a function with a first argument = initial value
      and a second argument which is a function that changes the value
    - It is a convention to use variable name and setVarialName as a func
  */
  const [title, setTitle] = useState("Initial title");
  function handleClick() {
    if (title === "Initial title") {
      setTitle("Hello, people!");
    } else {
      setTitle("Initial title");
    }
  }
  return (
    <>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
