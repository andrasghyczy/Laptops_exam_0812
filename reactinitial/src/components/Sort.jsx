import React from "react";

function Sort(props) {
  const { laptopsData, isSorted, setIsSorted } = props;

  //------ sort button click handler function ------
  const sortClickHandler = () => {
    if (!isSorted) {
      laptopsData.sort((a, b) => a.weight - b.weight);
      setIsSorted(true);
    } else {
      laptopsData.sort((a, b) => b.weight - a.weight);
      setIsSorted(false);
    }
  };

  return <button onClick={sortClickHandler}>Sort</button>;
}

export default Sort;
