import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css";

import galle from "../../Assets/ThingsToDo/Galle.png";
import kandy from "../../Assets/ThingsToDo/Kandy.png";

const imageList = [
  {
    id: 1,
    image: galle,
  },
  ,
  {
    id: 2,
    image: kandy,
  },
];

function CarouselRecommended(props) {
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

  useEffect(() => {
    setMenuItems(props.dataList);
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // console.log(2, menuItems);
  return (
    <>
      <div className="container" data-aos="fade-up">
        {/* {console.log(menuItems)} */}
        <h2
          className="text-center"
          style={{
            color: "black",
            paddingTop: "0px",
            marginTop: "25px",
            fontSize: "28px",
          }}
        >
          {props.heading}
        </h2>
        <p
          className="text-center"
          style={{ color: "black", marginTop: "-25px" }}
        >
          {props.subHeading}
        </p>
        <Slider {...settings}>
          {menuItems.map((items, keyId) => {
            const { id, description, name } = items;
            return (
              <div key={keyId} className="col-md-3 mb-3 im-outer-div">
                <div className="card im" style={{ marginTop: "15px" }}>
                  <Link className="nav-to-place" to={`/location/${id}`}>
                    <img
                      className="card img-fluid w-100 hover-shadow"
                      alt={name}
                      src={`http://localhost:8080/file/images/location/location-id/${id}/0`}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                  <div className="card-body">
                    <Link className="nav-to-place" to={`/location/${id}`}>
                      <h4 className="card-title">{name}</h4>
                    </Link>
                    {/* <p className="card-text" style={{ height: "130px" }}>
                      {description}
                    </p> */}
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

export default CarouselRecommended;
