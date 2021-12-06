import React from "react";

const Personcard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div className="text-center m-4">
      <h1 className="font-bold text-xl">
        {firstName} {lastName}
      </h1>
      <h2>{age}</h2>
      <h2>{hairColor}</h2>
    </div>
  );
};

export default Personcard;
