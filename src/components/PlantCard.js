import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  // console.log({name});

  const [stock, setStock] = useState(true)
  function buttonToggle ( ) {
      setStock(stock => !stock)
      
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={buttonToggle} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
