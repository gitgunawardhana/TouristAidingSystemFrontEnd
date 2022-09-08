import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import React from "react";
import { Link } from "react-router-dom";
import "./FilteredLocationSection.css";

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

import Pagination from "@mui/material/Pagination";
import Address from "../../../Assets/AccommodationFacilityIcons/address.png";
import FreeCancellation from "../../../Assets/AccommodationFacilityIcons/free-cancellation.png";
import PayAtProperty from "../../../Assets/AccommodationFacilityIcons/pay-at-property.png";
import View from "../../../Assets/AccommodationFacilityIcons/view.png";

function FilteredLocationSection(props) {
  const filteredLocations = [
    {
      accommodationName: "Granbell Hotel Colombo",
      address: "Kollupitiya, Colombo",
      pictures: [Granbell1, Granbell2, Granbell3, Granbell4, Granbell5],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
      size: 24,
      bedDetail: "One extra-large double bed",
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
      accommodationName: "Talo Urbon Colombo",
      address: "Colombo",
      pictures: [
        TaloUrbonColombo1,
        TaloUrbonColombo2,
        TaloUrbonColombo3,
        TaloUrbonColombo4,
        TaloUrbonColombo5,
      ],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
      accommodationName: "Zylan Luxury Villa",
      address: "Cinnamon Gardens, Colombo",
      pictures: [
        ZylanLuxuryVilla1,
        ZylanLuxuryVilla2,
        ZylanLuxuryVilla3,
        ZylanLuxuryVilla4,
        ZylanLuxuryVilla5,
      ],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
      accommodationName: "Cinnamon Red Colombo",
      address: "Kollupitiya, Colombo",
      pictures: [
        CinnamonRedColombo1,
        CinnamonRedColombo2,
        CinnamonRedColombo3,
        CinnamonRedColombo4,
        CinnamonRedColombo5,
      ],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
      accommodationName: "The Beehive Colombo",
      address: "Colombo",
      pictures: [
        TheBeehiveColombo1,
        TheBeehiveColombo2,
        TheBeehiveColombo3,
        TheBeehiveColombo4,
        TheBeehiveColombo5,
      ],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
      accommodationName: "Mandarina Colombo",
      address: "Colombo",
      pictures: [
        MandarinaColombo1,
        MandarinaColombo2,
        MandarinaColombo3,
        MandarinaColombo4,
        MandarinaColombo5,
      ],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
      accommodationName: "Zylan Luxury Villa",
      address: "Cinnamon Gardens, Colombo",
      pictures: [
        ZylanLuxuryVilla1,
        ZylanLuxuryVilla2,
        ZylanLuxuryVilla3,
        ZylanLuxuryVilla4,
        ZylanLuxuryVilla5,
      ],
      housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
  return (
    <div className="filtered-location-section">
      {filteredLocations.map((item) => (
        <div className="filtered-single-location">
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <img
                    width="100%"
                    height="200px"
                    src={item.pictures[0]}
                    alt="Hotel Image"
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    width="100%"
                    height="70px"
                    src={item.pictures[1]}
                    alt="Hotel Image"
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    width="100%"
                    height="70px"
                    src={item.pictures[2]}
                    alt="Hotel Image"
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    width="100%"
                    height="70px"
                    src={item.pictures[3]}
                    alt="Hotel Image"
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    width="100%"
                    height="70px"
                    src={item.pictures[4]}
                    alt="Hotel Image"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid className="filtered-location-details" item xs={6}>
              <div className="filtered-location-name">
                <Link to={`/single-accommodation/${item.accommodationId}`}>
                  {item.accommodationName}
                </Link>
              </div>
              <div className="filtered-location-address">
                <img src={Address} alt="Address" />
                {item.address}
              </div>
              <div className="filtered-location-facilities">
                {item.housingFacilities.map((facility) => (
                  <p className="filtered-location-single-facility">
                    {facility}
                  </p>
                ))}
              </div>
              <div className="filtered-location-size">
                Size - {item.size} sq feet
              </div>
              <div className="filtered-location-bed">{item.bed}</div>
              <div className="filtered-location-description">
                {item.description}
              </div>
              <div className="filtered-location-package-facilities">
                <div
                  className={
                    item.freeCancellation
                      ? "filtered-location-package-facility free-cancellation"
                      : "filtered-location-package-facility free-cancellation hidden"
                  }
                >
                  <img src={FreeCancellation} alt="Free Cancellation" />
                  FREE CANCELLATION
                </div>
                <div
                  className={
                    item.payAtProperty
                      ? "filtered-location-package-facility pay-at-property"
                      : "filtered-location-package-facility pay-at-property hidden"
                  }
                >
                  <img src={PayAtProperty} alt="Pay at Property" />
                  PAY AT THE PROPERTY
                </div>
                <div className="filtered-location-package-facility view">
                  <img src={View} alt="View" />
                  {item.view}
                </div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="filtered-location-review-price">
                <Rating
                  name="filtered-location-rating-stars"
                  className="filtered-location-rating-stars"
                  defaultValue={Math.round(item.rating / 2)}
                  precision={0.5}
                  readOnly
                />
                <Grid container spacing={0}>
                  <Grid item xs={8}>
                    <p className="filtered-location-rating-message">
                      {item.ratingMessage}
                    </p>
                    <p className="filtered-location-rating-count">
                      {item.ratingCount} Reviews
                    </p>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="filtered-location-rating-flag">
                      <p className="filtered-location-rating">{item.rating}</p>
                    </div>
                  </Grid>
                </Grid>
                <div
                  className={
                    item.discount === 0
                      ? "filtered-location-discount hidden"
                      : "filtered-location-discount"
                  }
                >
                  {Math.round(item.discount * 100)}% DISCOUNT
                </div>
                <div
                  className={
                    item.discount === 0
                      ? "filtered-location-price hidden"
                      : "filtered-location-price"
                  }
                >
                  Rs. {item.price}.00
                </div>
                <div className="filtered-location-discounted-price">
                  Rs. {Math.round(item.price * (1 - item.discount))}.00
                  <p>Taxes included</p>
                </div>
                <div className="filtered-location-people">2 Adults 1 Night</div>
                <Button fullWidth variant="contained" size="small">
                  See Availability
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
      <div className="filtered-location-pagination">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}

export default FilteredLocationSection;
