import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis,eatSushi,plates}) {

  const [startIndex,setStartIndex]=useState(0)
  
const renderedSushi = sushis.slice(startIndex, startIndex + 4).map((sushi) => (
  <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} plates={plates}/>
));

function handleMoreSushiClick(){
  setStartIndex(startIndex + 4)
}
  return (
    <div className="belt">
      {renderedSushi}

      <MoreButton onMore={handleMoreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
