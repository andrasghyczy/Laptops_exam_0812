import React from "react";
import { TextField } from "@mui/material";

function Search(props) {
  const { searchValue, setSearchValue } = props;

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        placeholder="Search laptops by name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}

export default Search;
