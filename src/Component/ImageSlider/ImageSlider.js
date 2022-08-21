import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

function ImageSlider(props) {
  const [covers, setCovers] = useState(props.covers);
  // console.log(covers);

  useEffect(() => {
    setCovers(props.covers);
  });

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner container-my">
          <div
            className="carousel-item active"
            style={{ border: "0px solid white" }}
          >
            <img
              className="d-block w-100 img-location-cover"
              src={`http://localhost:8080/file/images/location/location-id/${covers[0][0]}/${covers[0][1]}`}
              alt={covers[3]}
            />
          </div>
          <div className="carousel-item" style={{ border: "0px solid white" }}>
            <img
              className="d-block w-100 img-location-cover"
              src={`http://localhost:8080/file/images/location/location-id/${covers[1][0]}/${covers[1][1]}`}
              alt={covers[3]}
            />
          </div>
          <div className="carousel-item" style={{ border: "0px solid white" }}>
            <img
              className="d-block w-100 img-location-cover"
              src={`http://localhost:8080/file/images/location/location-id/${covers[2][0]}/${covers[2][1]}`}
              alt={covers[3]}
            />
          </div>
          <div class="content">
            <h1>{covers[3]}</h1>
          </div>
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
