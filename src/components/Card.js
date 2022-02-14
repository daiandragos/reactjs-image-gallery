import React from "react";

const Card = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="card">
          <a
            href={image.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.webformatURL}
              alt="photograph"
              className="card-image"
            />
            <div className="card-info">
              <p className="user">
                <i className="fas fa-eye" />
                <span>Views: </span>
                {image.views}
              </p>
              <p>
                <i className="fas fa-download" />
                <span>Downloads: </span>
                {image.downloads}
              </p>
              <p>
                <i className="fas fa-heart" />
                <span>Likes: </span>
                {image.likes}
              </p>
              <p>
                  <i className="fas fa-comment" />
                  <span>Comments: </span>
                  {image.comments}
              </p>
              <div className="tags">
                  {/* display the tags that are not too long */}
                  {image.tags.split(",").map((tag, index) => tag.length > 10 ? "" : <span key={index}>#{tag}</span>)}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
