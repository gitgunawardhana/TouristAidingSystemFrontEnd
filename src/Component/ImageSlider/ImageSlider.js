import React, { useState } from "react";
import "./ImageSlider.css";
function ImageSlider(props) {
  const [covers, setCovers] = useState(props.covers);
  // console.log(covers);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner container-my">
          <div className="carousel-item active">
            <img className="d-block w-100" src={covers[0]} alt={covers[3]} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={covers[1]} alt={covers[3]} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={covers[2]} alt={covers[3]} />
          </div>
          <div class="content">
            <h1>{covers[3]}</h1>
          </div>
          {/* <div class="top-left">
            <h1 className="place-heading-title">{covers[3]}</h1>
          </div> 
          <div class="bottom-left">
            <h1>{covers[3]}</h1>
          </div>
          <div class="top-right">
            <h1>{covers[3]}</h1>
          </div>
          <div class="bottom-right">
            <h1>{covers[3]}</h1>
          </div>
          <div class="centered">
            <h1>{covers[3]}</h1>
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default ImageSlider;
