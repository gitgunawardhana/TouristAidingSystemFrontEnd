import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";

function Carousel(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: props.slidesToShowScroll,
    slidesToScroll: props.slidesToShowScroll,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [menuItems, setMenuItems] = useState(props.dataList);

  return (
    <>
      <div className="container">
        <h2 className="text-center" style={{ color: "black" }}>
          {" "}
          {props.heading}{" "}
        </h2>
        <p
          className="text-center"
          style={{ color: "black", marginTop: "-25px" }}
        >
          {" "}
          {props.subHeading}{" "}
        </p>
        <Slider {...settings}>
          {menuItems.map((items) => {
            const { id, src, title, description } = items;
            return (
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img className="card img-fluid" alt="100%x280" src={src} />
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
