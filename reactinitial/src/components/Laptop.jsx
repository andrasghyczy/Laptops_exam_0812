import React, { useState } from "react";

function Laptop(props) {
  const { brand, name, weight } = props;

  //------ useState for "Show more" button ------
  const [isClicked, setIsClicked] = useState(false);

  //------ useStae for "Show more" button text
  const [isShowMore, setIsShowMore] = useState("Show more");

  //------ click handler function for show more -----
  const clickShowMore = () => {
    if (!isClicked) {
      setIsClicked(true);
      setIsShowMore("Show less");
    } else {
      setIsClicked(false);
      setIsShowMore("Show more");
    }
  };

  return (
    <div className="laptop">
      <h2>Laptop name: {name}</h2>
      <button className="show-more" onClick={clickShowMore}>
        {isShowMore}
      </button>
      {isClicked ? (
        <div className="details">
          <h3>Laptop brand: {brand}</h3>
          <p>Laptop weight: {weight} kg</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Laptop;
