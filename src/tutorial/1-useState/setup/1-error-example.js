import React from "react";

const ErrorExample = () => {
  let title = "Random title";
  function handleClick() {
    title = "Hello people";
    console.log(title);
  }
  return (
    <>
      <h1> {title}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
