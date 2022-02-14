import React from "react";
import Search from "./Search";
import Card from './Card';


const Gallery = (props) => {
    const {inputValue, setInputValue, handleSearch, images, newImages} = props;
    return (
    <section className="gallery">
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
      />
      <div className="container">
          <Card images={images} />
          {images.length === 0 ? (
              <h1>No images found</h1>
          ) : (
              <div className="btn-container">
                  <button onClick={() => newImages('previousPage')}>Previous</button>
                  <button onClick={() => newImages('nextPage')}>Next</button>
              </div>
          )}
      </div>
    </section>
  );
};

export default Gallery;
