import React from "react";

const Car = (props) => {
  const model = props.model;
  const color = props.color;
  const company = props.company;
  const quantity = props.quantity;

  return (
    <div>
      <hr />
      <p>Model: {model}</p>
      <p style={{ color: "#fff" }}>Color: {color}</p>
      <p>Company: {company}</p>
      <p>Quantity: {quantity}</p>
      <hr />
    </div>
  );
};




export default Car;
