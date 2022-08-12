import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header(props) {
  const { laptopsData, searchValue, setSearchValue, isSorted, setIsSorted } =
    props;

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Sort
        laptopsData={laptopsData}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
      />
    </>
  );
}

export default Header;
