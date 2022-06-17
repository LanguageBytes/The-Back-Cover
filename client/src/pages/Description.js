import React from "react";

const description = localStorage.getItem('Description');

const Description= () => {

  return (
    <div>
      <h1>{description}</h1>
    </div>
  );
};
export default Description;