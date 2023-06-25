import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setSushis(data);
      });
  }, []);

  function handleEatSushi(sushi) {
    if (sushi.price <= budget) {
      const updatedPlates = [...plates];
      updatedPlates[sushi.id] = true;
      setPlates(updatedPlates);
      const updatedBudget = budget - sushi.price;
      setBudget(updatedBudget);
    } else {
      console.log("Not enough budget")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={handleEatSushi} plates={plates}/>
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export default App;
