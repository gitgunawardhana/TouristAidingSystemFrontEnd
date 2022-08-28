import Button from "@mui/material/Button";
import { inputLabelClasses } from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

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

import FreeCancellation from "../../../Assets/AccommodationFacilityIcons/free-cancellation.png";
import PayAtProperty from "../../../Assets/AccommodationFacilityIcons/pay-at-property.png";
import View from "../../../Assets/AccommodationFacilityIcons/view.png";

const textFieldStyle = {
  marginTop: "20px",
  width: "-webkit-fill-available",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1e3d3eed",
    },
    "&:hover fieldset": {
      borderColor: "#03676E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#03676E",
    },
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "red",
    },
  },
};

const dateStyles = {
  marginTop: "20px",
  width: "-webkit-fill-available",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  padding: "10px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid white",
  color: "black",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function AvailabilityViewSection() {
  const [startDateValue, setStartDateValue] = useState(
    new Date("2022-07-25T21:11:54")
  );
  const [endDateValue, setEndDateValue] = useState(
    new Date("2022-07-31T21:11:54")
  );
  const handleStartDateChange = (newValue) => {
    setStartDateValue(newValue);
  };
  const handleEndDateChange = (newValue) => {
    setEndDateValue(newValue);
  };

  const [availabilityClassName, setAvailabilityClassName] = useState(
    "availability-div-result hidden-div"
  );

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

  const availableRooms = 5;
  var roomArray = [];
  for (var i = 1; i < availableRooms; i++) {
    roomArray.push(i);
  }
  return (
    <div>
      <h2 className="text-left" style={{ color: "black", paddingTop: "5px" }}>
        <b>Availability</b>
      </h2>
      <div className="availability-div">
        <h6>Check-in Check-out Date</h6>
        <p style={{ fontSize: "15px", marginTop: "-5px" }}>
          There may be Genius rates available. See them by entering your dates.
        </p>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-lg-6">
            <div className="row">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="col-lg-6 col-md-6">
                  <DesktopDatePicker
                    label="Check-in date"
                    inputFormat="MM/dd/yyyy"
                    size="small"
                    value={startDateValue}
                    onChange={handleStartDateChange}
                    sx={dateStyles}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        InputLabelProps={{
                          sx: {
                            [`&.${inputLabelClasses.shrink}`]: {
                              color: "#1e3d3eed",
                            },
                          },
                        }}
                        sx={dateStyles}
                      />
                    )}
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <DesktopDatePicker
                    label="Check-out date"
                    inputFormat="MM/dd/yyyy"
                    size="small"
                    value={endDateValue}
                    onChange={handleEndDateChange}
                    sx={dateStyles}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        InputLabelProps={{
                          sx: {
                            [`&.${inputLabelClasses.shrink}`]: {
                              color: "#1e3d3eed",
                            },
                          },
                        }}
                        sx={dateStyles}
                      />
                    )}
                  />
                </div>
              </LocalizationProvider>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <TextField
                  type="number"
                  size="small"
                  InputLabelProps={{
                    sx: {
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "#1e3d3eed",
                      },
                    },
                  }}
                  sx={textFieldStyle}
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 0,
                    },
                  }}
                  label="Adults"
                />
              </div>
              <div className="col-lg-3 col-md-3">
                <TextField
                  type="number"
                  size="small"
                  InputLabelProps={{
                    sx: {
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "#1e3d3eed",
                      },
                    },
                  }}
                  sx={textFieldStyle}
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 0,
                    },
                  }}
                  label="Teens"
                />
              </div>
              <div className="col-lg-3 col-md-3">
                <TextField
                  type="number"
                  size="small"
                  InputLabelProps={{
                    sx: {
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "#1e3d3eed",
                      },
                    },
                  }}
                  sx={textFieldStyle}
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 0,
                    },
                  }}
                  label="Kids"
                />
              </div>
              <div className="col-lg-3 col-md-3">
                <Button
                  onClick={() => {
                    setAvailabilityClassName("availability-div-result");
                  }}
                  fullWidth
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#03676E",
                    color: "white",
                    borderRadius: "5px",
                    width: "80px",
                    padding: "8px",
                    margin: "20px auto auto auto",
                    "&:hover": {
                      backgroundColor: "#1e3d3eed",
                      color: "white",
                    },
                  }}
                >
                  Check
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={availabilityClassName}>
        <div className="result-tbl col-md-10">
          <table id="availability-tbl-section">
            <tr>
              <th width="400px">Room Type</th>
              <th width="50px">Sleeps</th>
              <th>Today's price</th>
              <th>Your choices</th>
              <th width="50px">Select rooms</th>
            </tr>
            <tr>
              <td rowSpan={3}>
                <h6 className="room-type-ttl">Deluxe Triple Room</h6>
                <span className="left-rooms-text">
                  <b>Only 2 rooms left on our site</b>
                </span>
                <div className="choose-bed-div">
                  <span className="choose-bed-text">
                    <b>Choose your bed (if available)</b>
                  </span>
                  <br />
                  <input type="radio" name="bedType" id="bedType" />
                  <label htmlFor="bedType" id="bedTypeLbl">
                    3 Beds
                  </label>
                  <br />
                  <input type="radio" name="bedType" id="bedType" />
                  <label htmlFor="bedType" id="bedTypeLbl">
                    1 single bed and 1 extra-large double bed
                  </label>
                  <br />
                </div>
                <div className="filtered-location-package-facilities">
                  <div
                    className={
                      filteredLocations[0].freeCancellation
                        ? "filtered-location-package-facility free-cancellation"
                        : "filtered-location-package-facility free-cancellation hidden"
                    }
                  >
                    <img src={FreeCancellation} alt="Free Cancellation" />
                    FREE CANCELLATION
                  </div>
                  <div
                    className={
                      filteredLocations[0].payAtProperty
                        ? "filtered-location-package-facility pay-at-property"
                        : "filtered-location-package-facility pay-at-property hidden"
                    }
                  >
                    <img src={PayAtProperty} alt="Pay at Property" />
                    PAY AT THE PROPERTY
                  </div>
                  <div className="filtered-location-package-facility view">
                    <img src={View} alt="View" />
                    {filteredLocations[0].view} VIEW
                  </div>
                </div>
                <hr className="my-4" />
                <div className="facilities-sec">
                  <ul className="facilities-ul">
                    {filteredLocations[0].facilities.map((item) => (
                      <li>
                        <TiTick
                          size={15}
                          style={{
                            marginBottom: "5px",
                            color: "#008009",
                          }}
                        ></TiTick>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td>1</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom1"
                  id="selectRoom1"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom2"
                  id="selectRoom2"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom3"
                  id="selectRoom3"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>
                <h6 className="room-type-ttl">Deluxe Triple Room</h6>
                <span className="left-rooms-text">
                  <b>Only 2 rooms left on our site</b>
                </span>
                <div className="choose-bed-div">
                  <span className="choose-bed-text">
                    <b>Choose your bed (if available)</b>
                  </span>
                  <br />
                  <input type="radio" name="bedType" id="bedType" />
                  <label htmlFor="bedType" id="bedTypeLbl">
                    3 Beds
                  </label>
                  <br />
                  <input type="radio" name="bedType" id="bedType" />
                  <label htmlFor="bedType" id="bedTypeLbl">
                    1 single bed and 1 extra-large double bed
                  </label>
                  <br />
                </div>
                <div className="filtered-location-package-facilities">
                  <div
                    className={
                      filteredLocations[0].freeCancellation
                        ? "filtered-location-package-facility free-cancellation"
                        : "filtered-location-package-facility free-cancellation hidden"
                    }
                  >
                    <img src={FreeCancellation} alt="Free Cancellation" />
                    FREE CANCELLATION
                  </div>
                  <div
                    className={
                      filteredLocations[0].payAtProperty
                        ? "filtered-location-package-facility pay-at-property"
                        : "filtered-location-package-facility pay-at-property hidden"
                    }
                  >
                    <img src={PayAtProperty} alt="Pay at Property" />
                    PAY AT THE PROPERTY
                  </div>
                  <div className="filtered-location-package-facility view">
                    <img src={View} alt="View" />
                    {filteredLocations[0].view} VIEW
                  </div>
                </div>
                <hr className="my-4" />
                <div className="facilities-sec">
                  <ul className="facilities-ul">
                    {filteredLocations[0].facilities.map((item) => (
                      <li>
                        <TiTick
                          size={15}
                          style={{
                            marginBottom: "5px",
                            color: "#008009",
                          }}
                        ></TiTick>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td>1</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom1"
                  id="selectRoom1"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom2"
                  id="selectRoom2"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom3"
                  id="selectRoom3"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>
                <h6 className="room-type-ttl">Deluxe Triple Room</h6>
                <span className="left-rooms-text">
                  <b>Only 2 rooms left on our site</b>
                </span>
                <div className="choose-bed-div">
                  <span className="choose-bed-text">
                    <b>Choose your bed (if available)</b>
                  </span>
                  <br />
                  <input type="radio" name="bedType" id="bedType" />
                  <label htmlFor="bedType" id="bedTypeLbl">
                    3 Beds
                  </label>
                  <br />
                  <input type="radio" name="bedType" id="bedType" />
                  <label htmlFor="bedType" id="bedTypeLbl">
                    1 single bed and 1 extra-large double bed
                  </label>
                  <br />
                </div>
                <div className="filtered-location-package-facilities">
                  <div
                    className={
                      filteredLocations[0].freeCancellation
                        ? "filtered-location-package-facility free-cancellation"
                        : "filtered-location-package-facility free-cancellation hidden"
                    }
                  >
                    <img src={FreeCancellation} alt="Free Cancellation" />
                    FREE CANCELLATION
                  </div>
                  <div
                    className={
                      filteredLocations[0].payAtProperty
                        ? "filtered-location-package-facility pay-at-property"
                        : "filtered-location-package-facility pay-at-property hidden"
                    }
                  >
                    <img src={PayAtProperty} alt="Pay at Property" />
                    PAY AT THE PROPERTY
                  </div>
                  <div className="filtered-location-package-facility view">
                    <img src={View} alt="View" />
                    {filteredLocations[0].view} VIEW
                  </div>
                </div>
                <hr className="my-4" />
                <div className="facilities-sec">
                  <ul className="facilities-ul">
                    {filteredLocations[0].facilities.map((item) => (
                      <li>
                        <TiTick
                          size={15}
                          style={{
                            marginBottom: "5px",
                            color: "#008009",
                          }}
                        ></TiTick>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td>1</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom1"
                  id="selectRoom1"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom2"
                  id="selectRoom2"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span className="price-span">
                  LKR {filteredLocations[0].price}.00
                </span>
                <p className="tax-para">+LKR 25,483 taxes and charges</p>
              </td>
              <td>
                <div className="your-choices-div">
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Very good breakfast</b> included
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>Free cancellation</b> until 23:59 on 19 August 2022
                  </p>
                  <p>
                    <TiTick
                      size={15}
                      style={{
                        marginBottom: "5px",
                        color: "#008009",
                      }}
                    ></TiTick>
                    <b>NO PREPAYMENT NEEDED</b> – pay at the property
                  </p>
                </div>
              </td>
              <td>
                <select
                  className="selectRoom"
                  name="selectRoom3"
                  id="selectRoom3"
                >
                  <option value="0">0</option>
                  {roomArray.map((item) => (
                    <option value={item}>
                      {item} {item * filteredLocations[0].price}.00
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div className="reserve-btn col-md-2">
          <div className="reserve-btn-content">
            <p>
              <b>3</b> rooms for
            </p>
            <h4>LKR 770,797</h4>
            <p className="tax-para">+LKR 25,483 taxes and charges</p>
            <Button
              fullWidth
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#03676E",
                color: "white",
                borderRadius: "5px",
                padding: "8px",
                margin: "20px auto auto auto",
                "&:hover": {
                  backgroundColor: "#1e3d3eed",
                  color: "white",
                },
              }}
            >
              I'll reserve
            </Button>
            <ul
              style={{
                listStyleType: "disc",
                fontSize: "12px",
                marginTop: "10px",
                marginLeft: "20px",
                padding: "0px",
              }}
            >
              <li>Confirmation is immediate</li>
              <li>No booking or credit card fees!</li>
            </ul>

            <p
              style={{
                fontSize: "13px",
                border: "1px solid #008009",
                borderRadius: "5px",
                color: "#008009",
                marginTop: "10px",
                padding: "5px 5px 6px 5px",
              }}
            >
              No credit card needed!
            </p>
          </div>
        </div>
      </div>
      <br />
      <hr className="my-4" />
    </div>
  );
}

export default AvailabilityViewSection;
