import React from "react";

function Sushi({sushi,eatSushi,plates}) {
  const {name,img_url,price}=sushi;
  function handleEatSushi(){
    eatSushi(sushi)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {plates[sushi.id] ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
