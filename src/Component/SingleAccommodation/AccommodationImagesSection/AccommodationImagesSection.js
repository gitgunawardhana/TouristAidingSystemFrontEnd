import React, { useState } from "react";
import "./AccommodationImagesSection.css";
import ImageModel from "./ImageModel";

import Granbell1 from "../../../Assets/FilteredAccommodations/GranbellHotelColombo/1.jpg";
import Granbell2 from "../../../Assets/FilteredAccommodations/GranbellHotelColombo/2.jpg";
import Granbell3 from "../../../Assets/FilteredAccommodations/GranbellHotelColombo/3.jpg";
import Granbell5 from "../../../Assets/FilteredAccommodations/GranbellHotelColombo/4.jpg";
import Granbell4 from "../../../Assets/FilteredAccommodations/GranbellHotelColombo/5.jpg";

import TaloUrbonColombo1 from "../../../Assets/FilteredAccommodations/TaloUrbonColombo/1.jpg";
import TaloUrbonColombo2 from "../../../Assets/FilteredAccommodations/TaloUrbonColombo/2.jpg";
import TaloUrbonColombo3 from "../../../Assets/FilteredAccommodations/TaloUrbonColombo/3.jpg";
import TaloUrbonColombo5 from "../../../Assets/FilteredAccommodations/TaloUrbonColombo/4.jpg";
import TaloUrbonColombo4 from "../../../Assets/FilteredAccommodations/TaloUrbonColombo/5.jpg";

import ZylanLuxuryVilla1 from "../../../Assets/FilteredAccommodations/ZylanLuxuryVilla/1.jpg";
import ZylanLuxuryVilla2 from "../../../Assets/FilteredAccommodations/ZylanLuxuryVilla/2.jpg";
import ZylanLuxuryVilla3 from "../../../Assets/FilteredAccommodations/ZylanLuxuryVilla/3.jpg";
import ZylanLuxuryVilla5 from "../../../Assets/FilteredAccommodations/ZylanLuxuryVilla/4.jpg";
import ZylanLuxuryVilla4 from "../../../Assets/FilteredAccommodations/ZylanLuxuryVilla/5.jpg";

import CinnamonRedColombo1 from "../../../Assets/FilteredAccommodations/CinnamonRedColombo/1.jpg";
import CinnamonRedColombo2 from "../../../Assets/FilteredAccommodations/CinnamonRedColombo/2.jpg";
import CinnamonRedColombo3 from "../../../Assets/FilteredAccommodations/CinnamonRedColombo/3.jpg";
import CinnamonRedColombo5 from "../../../Assets/FilteredAccommodations/CinnamonRedColombo/4.jpg";
import CinnamonRedColombo4 from "../../../Assets/FilteredAccommodations/CinnamonRedColombo/5.jpg";

import TheBeehiveColombo1 from "../../../Assets/FilteredAccommodations/TheBeehiveColombo/1.jpg";
import TheBeehiveColombo2 from "../../../Assets/FilteredAccommodations/TheBeehiveColombo/2.jpg";
import TheBeehiveColombo3 from "../../../Assets/FilteredAccommodations/TheBeehiveColombo/3.jpg";
import TheBeehiveColombo5 from "../../../Assets/FilteredAccommodations/TheBeehiveColombo/4.jpg";
import TheBeehiveColombo4 from "../../../Assets/FilteredAccommodations/TheBeehiveColombo/5.jpg";

import MandarinaColombo1 from "../../../Assets/FilteredAccommodations/MandarinaColombo/1.jpg";
import MandarinaColombo2 from "../../../Assets/FilteredAccommodations/MandarinaColombo/2.jpg";
import MandarinaColombo3 from "../../../Assets/FilteredAccommodations/MandarinaColombo/3.jpg";
import MandarinaColombo5 from "../../../Assets/FilteredAccommodations/MandarinaColombo/4.jpg";
import MandarinaColombo4 from "../../../Assets/FilteredAccommodations/MandarinaColombo/5.jpg";

import imageCover4 from "../../../Assets/SingleAccommodation/252324192.png";
import imageCover1 from "../../../Assets/SingleAccommodation/252324202.png";
import imageCover3 from "../../../Assets/SingleAccommodation/252324209.png";
import imageCover6 from "../../../Assets/SingleAccommodation/252324213.png";
import imageCover7 from "../../../Assets/SingleAccommodation/252324215.png";
import imageCover5 from "../../../Assets/SingleAccommodation/252324226.png";
import imageCover2 from "../../../Assets/SingleAccommodation/2523242991.png";

function FilteredLocationSection() {
  const filteredLocations = [
    {
      name: "Granbell Hotel Colombo",
      address: "Kollupitiya, Colombo",
      images: [Granbell1, Granbell2, Granbell3, Granbell4, Granbell5],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 9.2,
      ratingMessage: "EXCEPTIONAL",
      ratingCount: 345,
      discount: 0.2,
      price: 36630.0,
    },
    {
      name: "Talo Urbon Colombo",
      address: "Colombo",
      images: [
        TaloUrbonColombo1,
        TaloUrbonColombo2,
        TaloUrbonColombo3,
        TaloUrbonColombo4,
        TaloUrbonColombo5,
      ],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 7.5,
      ratingMessage: "VERY GOOD",
      ratingCount: 113,
      discount: 0,
      price: 8806.0,
    },
    {
      name: "Zylan Luxury Villa",
      address: "Cinnamon Gardens, Colombo",
      images: [
        ZylanLuxuryVilla1,
        ZylanLuxuryVilla2,
        ZylanLuxuryVilla3,
        ZylanLuxuryVilla4,
        ZylanLuxuryVilla5,
      ],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 8.4,
      ratingMessage: "EXCELLENT",
      ratingCount: 51,
      discount: 0.4,
      price: 74000.0,
    },
    {
      name: "Cinnamon Red Colombo",
      address: "Kollupitiya, Colombo",
      images: [
        CinnamonRedColombo1,
        CinnamonRedColombo2,
        CinnamonRedColombo3,
        CinnamonRedColombo4,
        CinnamonRedColombo5,
      ],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 8.7,
      ratingMessage: "EXCELLENT",
      ratingCount: 1503,
      discount: 0,
      price: 24050.0,
    },
    {
      name: "The Beehive Colombo",
      address: "Colombo",
      images: [
        TheBeehiveColombo1,
        TheBeehiveColombo2,
        TheBeehiveColombo3,
        TheBeehiveColombo4,
        TheBeehiveColombo5,
      ],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 6.3,
      ratingMessage: "GOOD",
      ratingCount: 26,
      discount: 0,
      price: 3001.0,
    },
    {
      name: "Mandarina Colombo",
      address: "Colombo",
      images: [
        MandarinaColombo1,
        MandarinaColombo2,
        MandarinaColombo3,
        MandarinaColombo4,
        MandarinaColombo5,
      ],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 8.2,
      ratingMessage: "EXCELLENT",
      ratingCount: 704,
      discount: 0.41,
      price: 40867.0,
    },
    {
      name: "Zylan Luxury Villa",
      address: "Cinnamon Gardens, Colombo",
      images: [
        ZylanLuxuryVilla1,
        ZylanLuxuryVilla2,
        ZylanLuxuryVilla3,
        ZylanLuxuryVilla4,
        ZylanLuxuryVilla5,
      ],
      facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bed: "One extra-large double bed",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      freeCancellation: true,
      payAtProperty: true,
      view: "SEA",
      rating: 8.4,
      ratingMessage: "EXCELLENT",
      ratingCount: 51,
      discount: 0.4,
      price: 74000.0,
    },
  ];

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (imageItem, index) => {
    setClickedImg(imageItem);
    setCurrentIndex(index);
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="div-img-cover">
      <div class="row div-img-cover-sub">
        <div class="col-lg-8 col-md-12 mb-0 ml-0 mr-0 mb-lg-0 pl-0 pr-0 pb-0 pt-0">
          <img
            onClick={() => handelClick(imageCover1, 0)}
            src={imageCover1}
            class="w-100 h-50 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
            alt="Boat on Calm Water"
          />

          <img
            onClick={() => handelClick(imageCover2, 1)}
            src={imageCover2}
            class="w-100 h-50 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div
          class="col-lg-4 mb-0 ml-0 mr-0 mb-lg-0 pl-0 pr-0 pb-0 pt-0"
          style={{ backgroundColor: "black" }}
        >
          <div className="row h-25 div-img-cover-sub">
            <div class="col-lg-8 mb-0 ml-0 mr-0 mb-lg-0 pl-0 pr-0 pb-0 pt-0">
              <img
                onClick={() => handelClick(imageCover4, 3)}
                src={imageCover4}
                class="w-100 h-100 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
                alt="Waves at Sea"
              />
            </div>
            <div class="col-lg-4 mb-0 ml-0 mr-0 mb-lg-0 pl-0 pr-0 pb-0 pt-0">
              <img
                onClick={() => handelClick(imageCover5, 4)}
                src={imageCover5}
                class="w-100 h-50 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
                alt="Waves at Sea"
              />
              <img
                onClick={() => handelClick(imageCover6, 5)}
                src={imageCover6}
                class="w-100 h-50 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
                alt="Waves at Sea"
              />
            </div>
          </div>
          <img
            onClick={() => handelClick(imageCover3, 2)}
            src={imageCover3}
            class="w-100 h-25 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
            alt="Waves at Sea"
          />
          <img
            onClick={() => handelClick(imageCover7, 6)}
            src={imageCover7}
            class="w-100 h-50 shadow-1-strong mb-0 ml-0 mr-0 cst-cvr-img-cls"
            alt="Waves at Sea"
            style={{ opacity: ".3" }}
          />
          <div class="centered">
            <span
              style={{ color: "white", fontSize: "30px", fontWeight: "700" }}
            >
              +25 Photos
            </span>
          </div>
        </div>
      </div>

      {clickedImg && (
        <ImageModel
          handleClose={handleClose}
          open={open}
          clickedImg={clickedImg}
          currentIndex={currentIndex}
          setClickedImg={setClickedImg}
        ></ImageModel>
      )}
    </div>
  );
}

export default FilteredLocationSection;
