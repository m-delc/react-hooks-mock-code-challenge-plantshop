import React from "react";

function PlantCard({name, image, price}) {
  // console.log({name});
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{"plant name"}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
