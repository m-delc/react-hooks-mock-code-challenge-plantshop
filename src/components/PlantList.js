import React from "react";
import PlantCard from "./PlantCard";
// import Plantlist from "./PlantList";

function PlantList({plants}) {
  // console.log(plants)

  // const plantList2 = plants.map((plant) => (
  //   <PlantCard  name={plant.name}
  //               image={plant.image}
  //               key={plant.id}
  //               price={plant.price} />
  // ))

  return (
    <ul className="cards">{plants.map((plant) => {
      return (
        <PlantCard name={plant.name} image={plant.image} price={plant.price} key={plant.id} />
      )
    })}</ul>
  );
}

export default PlantList;


