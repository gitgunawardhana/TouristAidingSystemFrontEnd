import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import React from "react";

import "./FilteredVehicleSection.css";

import Car1 from "../../../Assets/Cars/car1.jpg";
import Car2 from "../../../Assets/Cars/car2.jpg";
import Car3 from "../../../Assets/Cars/car3.png";
import Car4 from "../../../Assets/Cars/car4.jpeg";
import Car5 from "../../../Assets/Cars/car5.jpeg";

import Pagination from "@mui/material/Pagination";

function FilteredLocationSection() {
  const filteredLocations = [
    {
      name: "Suzuki Alto1",
      address: "Kollupitiya, Colombo",
      image: Car1,
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
      name: "Suzuki Alto2",
      address: "Cinnamon Gardens, Colombo",
      image: Car2,
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
      name: "Suzuki Alto",
      address: "Kollupitiya, Colombo",
      image: Car3,
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
      name: "Suzuki Alto",
      address: "Colombo",
      image: Car4,
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
      name: "Suzuki Alto",
      address: "Colombo",
      image: Car5,
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
      name: "Suzuki Alto",
      address: "Cinnamon Gardens, Colombo",
      image: Car1,
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

  const carAttributes = [
    "4 Seats",
    "Automatic",
    "300 km per rental",
    "Air Conditioning",
    "Child Seats Available",
  ];

  return (
    <div className="filtered-location-section">
      {filteredLocations.map((item) => (
        <div className="filtered-single-location">
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <img
                  width="100%"
                  src={item.image}
                  alt="Granbell Hotel Colombo"
                />
              </Grid>
            </Grid>
            <Grid className="filtered-location-details" item xs={6}>
              <div
                className="filtered-location-name"
                style={{ marginTop: "20px", marginLeft: "30px" }}
              >
                {item.name}
              </div>
              <FormGroup>
                <div
                  className="checkbox-section"
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginLeft: "30px",
                  }}
                >
                  <div
                    className="checkbox-section1"
                    style={{ display: "Grid" }}
                  >
                    {carAttributes.slice(0, 3).map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </div>
                  <div
                    className="checkbox-section2"
                    style={{
                      display: "Grid",
                      height: "fit-content",
                      marginLeft: "30px",
                    }}
                  >
                    {carAttributes.slice(3, 5).map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </div>
                </div>
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <div className="filtered-location-review-price">
                <div className="filtered-location-discounted-price">
                  Rs. {Math.round(item.price * (1 - item.discount))}.00
                  <p>Price for 2 days</p>
                </div>
                <Grid>
                  <div
                    className={
                      item.freeCancellation
                        ? "filtered-location-package-facility free-cancellation"
                        : "filtered-location-package-facility free-cancellation hidden"
                    }
                    style={{
                      marginLeft: "8px",
                      marginTop: "5px",
                      marginBottom: "10px",
                      float: "right",
                      width: "auto",
                      backgroundColor: "rgba(95, 158, 160, 0)",
                    }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#769F00",
                      }}
                    >
                      FREE CANCELLATION
                    </Button>
                  </div>
                </Grid>
                <Button fullWidth variant="contained" size="small">
                  VIEW DEAL
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
