import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";

import './App.css';

const App = () => {
  const API_KEY = "10836796-eb6525a7aca1f7f10f89cf7a0";
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setInputValue("");
  };

  const newImages = (pageDirection) => {
    if (pageDirection === "nextPage") {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (pageDirection === "previousPage") {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, [currentPage, search]);

  return (
    <div className="App">
      <Gallery
        images={images}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
        newImages={newImages}
      />
    </div>
  );
};

export default App;
