import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import EndDate from "../../../Assets/AccommodationFilterFormIcons/end-date.png";
import LocationIcon from "../../../Assets/AccommodationFilterFormIcons/location.png";
import StartDate from "../../../Assets/AccommodationFilterFormIcons/start-date.png";
import "./FilterSection.css";

function FilterSection() {
  const [checkInTime, setCheckInTime] = React.useState(Date.now());
  const handleCheckInTime = (newValue) => {
    setCheckInTime(newValue);
  };
  const [checkOutTime, setCheckOutTime] = React.useState(Date.now());
  const handleCheckOutTime = (newValue) => {
    setCheckOutTime(newValue);
  };

  const SearchButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#00565b",
    color: "white",
    "&:hover": {
      backgroundColor: "#00565b",
    },
    width: "50%",
    marginLeft: "25%",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
    padding: "5px",
  }));

  const CustomCheckBox = styled(Checkbox)(({ theme }) => ({
    backgroundColor: "#00565b",
    color: "white",
    "&:hover": {
      backgroundColor: "#00565b",
    },
    width: "50%",
    marginLeft: "25%",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
    padding: "5px",
  }));

  const carSpecs = ["Air Conditioning", "4+ doors"];
  const gearType = ["Automatic", "Manual"];
  const carType = [
    "Small",
    "Medium",
    "Large",
    "Estate",
    "Premium",
    "People Carrier",
    "SUV",
  ];

  return (
    <div className="filter-section">
      <h5>
        <b>Find Vehicles</b>
      </h5>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="find-accommodation-form"
      >
        <div>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <img
                src={LocationIcon}
                alt="Location"
                className="find-accommodation-form-icon"
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="destination"
                label="Enter the picking destination"
                type="text"
                sx={{ m: 1, width: "99%" }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={1}>
              <img
                src={LocationIcon}
                alt="Location"
                className="find-accommodation-form-icon"
              />
            </Grid>
            <Grid item xs={11}>
              <TextField
                id="destination"
                label="Enter the dropping destination"
                type="text"
                sx={{ m: 1, width: "99%" }}
              />
            </Grid>
          </Grid>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
                <img
                  src={StartDate}
                  alt="Start Date"
                  className="find-accommodation-form-icon"
                />
              </Grid>
              <Grid item xs={11}>
                <DatePicker
                  label="Start day of your travel"
                  inputFormat="DD/MM/yyyy"
                  value={checkInTime}
                  onChange={handleCheckInTime}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ m: 1, width: "99%" }} />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={1}>
                <img
                  src={EndDate}
                  alt="End Date"
                  className="find-accommodation-form-icon"
                />
              </Grid>
              <Grid item xs={11}>
                <DatePicker
                  label="End day of your travel"
                  inputFormat="DD/MM/yyyy"
                  value={checkOutTime}
                  onChange={handleCheckOutTime}
                  renderInput={(params) => (
                    <TextField {...params} sx={{ m: 1, width: "99%" }} />
                  )}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
        </div>
        <SearchButton>Search</SearchButton>
      </Box>
      <br />
      <h5>
        <b>Filter Your Vehicles</b>
      </h5>
      <br />
      <h5>Price Range</h5>
      <FormGroup>
        <FormControlLabel
          control={
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          }
        />
        <p style={{ marginBottom: "10px" }}>LKR 1000.00 - LKR 50000.00</p>
      </FormGroup>
      <Divider />
      <br />
      <h5>Car Specs</h5>
      <FormGroup>
        {carSpecs.map((item) => (
          <FormControlLabel
            control={
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
            }
            label={item}
          />
        ))}
      </FormGroup>
      <Divider />
      <br />
      <h5>Transmission</h5>
      <FormGroup>
        {gearType.map((item) => (
          <FormControlLabel
            control={
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
            }
            label={item}
          />
        ))}
      </FormGroup>
      <Divider />
      <br />
      <h5>Transmission</h5>
      <FormGroup>
        {carType.map((item) => (
          <FormControlLabel
            control={
              <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }} />
            }
            label={item}
          />
        ))}
      </FormGroup>
    </div>
  );
}

export default FilterSection;
