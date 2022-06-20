import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import favoriteDataList from "../../Components/HomePage/favoriteDataList";
import Favorite from "../../Components/ImageGallery";
import Navbar from "../../Components/NavigationBar/Navbar/Navbar";
import RecommendedDataList from "../../Components/LocationPage/RecommendedDataList";
import SearchBar from "../../Components/LocationPage/SearchBar/SearchBar";
import ThingsToDoDataList from "../../Components/LocationPage/ThingsToDoDataList";
import "./Location.css";

function Accommodation() {
  return (
    <>
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
      <div className="container-md fv-location">
        <div className="custom-head">
          <h1
            className="text-center"
            style={{ color: "black", paddingTop: "50px", fontSize: "28px" }}
          >
            Favorite Places
          </h1>
        </div>
        <Favorite dataList={favoriteDataList}></Favorite>
        <div className="text-center">
          <button type="button" class="btn btn-dark text-center btn-see-all">
            See all
          </button>
        </div>
      </div>
    </>
  );
}

export default Accommodation;
