import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Alaa Seada",
    age: 35,
    profession: "Engineer",
    message: "Welcome to my website.",
  });

  function changeMessage() {
    setPerson({ ...person, message: "This is a new message" });
  }

  return (
    <>
      <h3>{person.name} </h3>
      <h3>{person.age}</h3>
      <h3>{person.profession}</h3>
      <h3>{person.message}</h3>
      <button type="button" onClick={changeMessage} className="btn">
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
