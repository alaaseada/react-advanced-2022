import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const complexCounter = () => {
    setTimeout(() => {
      setCounter((prevState) => {
        /* This function has to return some values 
           if not, the return value will be undefined 
           and the whole functionality will break
        */
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h1>Regular counter</h1>
        <h2>Current number: {counter}</h2>
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            } else {
              setCounter(0);
            }
          }}
        >
          Previous
        </button>
        <button type="button" className="btn" onClick={() => setCounter(0)}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setCounter(counter + 1)}
        >
          Next
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h1>Complex counter</h1>
        <h2>Current number: {counter}</h2>
        <button type="button" className="btn" onClick={complexCounter}>
          Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
