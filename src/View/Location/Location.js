import { useState } from "react";
import Carousel from "../../Component/Carousel/Carousel";
import favoriteDataList from "../../Component/favoriteDataList";
import FavoritePlaces from "../../Component/ImageGalleryWithDescription/ImageGalleryWithDescription";
import Navbar from "../../Component/Navbar/Navbar";
import RecommendedDataList from "../../Component/RecommendedDataList";
import SearchBar from "../../Component/SearchBar/SearchBar";
import ThingsToDoDataList from "../../Component/ThingsToDoDataList";
import "./Location.css";
function Location() {
  const [visible, setVisible] = useState(4);

  const seeAll = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <div className="loaction-page">
      <Navbar></Navbar>
      <h1 className="heading main-heading" style={{ "margin-top": "60px" }}>
        Places to Visit in <span className="sp-sri-lanka">Sri Lanka</span>
      </h1>
      <SearchBar></SearchBar>
      <Carousel
        slidesToShowScroll={4}
        heading="Things To Do"
        subHeading=""
        dataList={ThingsToDoDataList}
      ></Carousel>
      <Carousel
        slidesToShowScroll={3}
        heading="Recommended Locations"
        subHeading="Lorem ipsum dolor, sit amet consectetur adipisic."
        dataList={RecommendedDataList}
      ></Carousel>
      <div className="container-fluid" style={{ backgroundColor: "#EEEEEE" }}>
        <div className="container-md fv-location">
          <div className="custom-head">
            <h1
              className="text-center"
              style={{ color: "black", paddingTop: "50px", fontSize: "28px" }}
            >
              Top Attractions in Sri Lanka
            </h1>
            <FavoritePlaces
              visibleValue={visible}
              dataList={favoriteDataList}
            ></FavoritePlaces>
            <div className="text-center">
              <button
                type="button"
                class="btn btn-dark text-center btn-see-all"
                onClick={seeAll}
              >
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <FavoritePlaces
        visibleValue={visible}
        dataList={favoriteDataList}
      ></FavoritePlaces>
      <button
        type="button"
        class="btn btn-dark text-center btn-see-all"
        onClick={seeAll}
      >
        See all
      </button> */}
    </div>
  );
}

export default Location;
