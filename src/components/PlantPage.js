import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  // state for plants
  const [plants, setPlants] = useState([])
  // state for search
  const [search, setSearch] = useState([])

  // api fetch
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  // new item form submit from NewPlantForm.js
  function formSubmit (e) {
    e.preventDefault()
    // debugger
    const newPlant = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value,
    }
    setPlants([...plants, newPlant])
  }

    //  search callback
    function searchFilter (e) {
      // console.log(e.target.value)
      setSearch(e.target.value)
    }
    // filter logic
    const plantfilter = plants.filter((x) => {
      if (search.length > 0) return x.name.toLowerCase().includes(search.toLowerCase())
      else {return true}
    })

    // try out
    // const plantfilter = plants.filter((x) => x.name.toLowerCase().includes(search.toLowerCase())
    // )


  return (
    <main>
      <NewPlantForm formSubmit={formSubmit} />
      <Search searchFilter={searchFilter} />
      <PlantList plants={plantfilter}/>
    </main>
  );
}

export default PlantPage;
