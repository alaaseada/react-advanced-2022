import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() =>
                setPeople(() => {
                  let newPeople = prevPeople.filter(
                    (person) => person.id !== id
                  );
                  return newPeople;
                })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
      {people.length > 0 ? (
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Delete all
        </button>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UseStateArray;
