import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";

const App = () => {
  //------ useState for data ------
  const [laptopsData, setLaptopsData] = useState([]);

  //------ function for fetch ------
  const fetchLaptopsData = async () => {
    const response = await fetch("https://demoapi.com/api/laptop");
    const responseJson = await response.json();

    setLaptopsData(responseJson);
    //setIsLoaded(true);
  };

  //------ useEffect for fetch ------
  useEffect(() => {
    fetchLaptopsData();
  }, []);

  console.log(laptopsData);

  //------ useState for search value
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <h1>Laptops</h1>
      {laptopsData.length !== 0 ? (
        <>
          <Header />
          {laptopsData.map((laptop) => (
            <Laptop
              key={laptop.name}
              brand={laptop.brand}
              name={laptop.name}
              weight={laptop.weight}
            />
          ))}
        </>
      ) : (
        <LoadingMask />
      )}
    </>
  );
};

export default App;
