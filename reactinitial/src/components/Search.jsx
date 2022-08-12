import React from "react";

function Search(props) {
  const { searchValue, setSearchValue } = props;

  return (
    <>
      <input
        type="text"
        placeholder="Search laptops by name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}

export default Search;
