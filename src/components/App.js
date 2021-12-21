import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
// ReactDOM.render

function App() {

  const [plants, setPlants] = useState("plants")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
      
  }, [])


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} />
    </div>
  );
}

export default App;



// -App
// --Header
// --Plant Page
// ---New Plant form
// ---Search
// ---Plant List
// ----Plant Card
