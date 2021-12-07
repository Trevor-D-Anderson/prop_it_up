import React, { useState } from "react";

const Personcard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [stateAge, setAge] = useState(age);
  const handleClick = () => {
    setAge(stateAge + 1);
  };
  return (
    <div className="text-center m-4">
      <h1 className="font-bold text-xl">
        {firstName} {lastName}
      </h1>
      <h2>Age: {stateAge}</h2>
      <h2>Hair Color: {hairColor}</h2>
      <button
        className="border-2 border-solid border-gray-900 bg-gray-900 text-white"
        onClick={handleClick}
      >
        I am Older
      </button>
    </div>
  );
};

export default Personcard;
