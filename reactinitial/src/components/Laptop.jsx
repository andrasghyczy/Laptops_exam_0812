import React from "react";

function Laptop(props) {
  const { brand, name, weight } = props;

  //------ useState for "Show more" button ------

  return (
    <div className="laptop">
      <h2>Laptop name: {name}</h2>
      <button className="show-more">Show more</button>
      <div className="details">
        <h3>Laptop brand: {brand}</h3>
        <p>Laptop weight: {weight} kg</p>
      </div>
    </div>
  );
}

export default Laptop;
