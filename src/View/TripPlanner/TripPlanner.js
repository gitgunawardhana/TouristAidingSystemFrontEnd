import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { inputLabelClasses } from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import EasyUseBrowse from "../../Component/TripPlannerCompo/EasyUseBrowse/EasyUseBrowse";
import Header from "../../Component/TripPlannerCompo/Header/Header";
import PopularTripPlan from "../../Component/TripPlannerCompo/PopularTripPlan/PopularTripPlan";
import TrendingDestinationsCard from "../../Component/TripPlannerCompo/TrendingDestinations/TrendingDestinations";
import "./TripPlanner.css";
import Footer from "../../Component/Footer/Footer";

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    classNm: undefined,
  });

  function rClassNm() {
    if (window.innerWidth >= 800) {
      return "auto";
    } else if (window.innerWidth >= 500) {
      return "500px";
    } else {
      return "400px";
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        classNm: rClassNm(),
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const textFieldStyle = {
  marginTop: "20px",
  marginBottom: "20px",
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
  marginBottom: "20px",
  width: "-webkit-fill-available",
};

function TripPlanner() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const size = useWindowSize();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: size.classNm,
    bgcolor: "background.paper",
    border: "2px solid white",
    color: "black",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  const [startDateValue, setStartDateValue] = React.useState(
    new Date("2022-07-25T21:11:54")
  );
  const [endDateValue, setEndDateValue] = React.useState(
    new Date("2022-07-31T21:11:54")
  );

  const handleStartDateChange = (newValue) => {
    setStartDateValue(newValue);
  };
  const handleEndDateChange = (newValue) => {
    setEndDateValue(newValue);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Header onClick={handleOpen}></Header>
      <PopularTripPlan onClick={handleOpen}></PopularTripPlan>
      <div data-aos="fade-up" className="container-fluid easy-use-div">
        <EasyUseBrowse></EasyUseBrowse>
      </div>
      <div className="container-fluid trending-destinationsCard-div">
        <TrendingDestinationsCard></TrendingDestinationsCard>
      </div>
      <div className="container text-center" style={{ marginBottom: "50px" }}>
        <Button
          onClick={handleOpen}
          fullWidth
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#1e3d3eed",
            color: "white",
            borderRadius: "50px",
            width: "150px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#1e3d3ee5",
              color: "white",
            },
          }}
        >
          Start Planing
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2
            style={{
              color: "black",
              padding: "0px",
              margin: "0px",
              fontSize: "23px",
              fontWeight: "500",
            }}
          >
            Planing Your Trip
          </h2>
          <div className="inputs-section">
            <TextField
              id="outlined-textarea"
              label="Destination"
              placeholder="Destination - City name"
              multiline
              InputLabelProps={{
                sx: {
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "#1e3d3eed",
                  },
                },
              }}
              sx={textFieldStyle}
            />
            <div className="date-field-popup">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="start-date">
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={startDateValue}
                    onChange={handleStartDateChange}
                    sx={style}
                    renderInput={(params) => (
                      <TextField
                        {...params}
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
                <div className="space-div">&nbsp;</div>
                <div className="end-date">
                  <DesktopDatePicker
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    value={endDateValue}
                    onChange={handleEndDateChange}
                    sx={dateStyles}
                    renderInput={(params) => (
                      <TextField
                        {...params}
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
            <div className="guests-inputs">
              <div className="display-results">
                <TextField
                  id="outlined-textarea"
                  label="Guests"
                  placeholder="2 Adults"
                  multiline
                  InputLabelProps={{
                    sx: {
                      [`&.${inputLabelClasses.shrink}`]: {
                        color: "#1e3d3eed",
                      },
                    },
                  }}
                  sx={textFieldStyle}
                />
              </div>
              <div className="space-div">&nbsp;</div>
              <div className="inputs-picker">
                <div className="section-pice">
                  <TextField
                    type="number"
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
                <div className="space-div">&nbsp;</div>
                <div className="section-pice">
                  <TextField
                    type="number"
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
                <div className="space-div">&nbsp;</div>
                <div className="section-pice">
                  <TextField
                    type="number"
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
              </div>
            </div>
          </div>
          <div className="popup-btn text-center">
            <Button
              fullWidth
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#03676E",
                color: "white",
                borderRadius: "50px",
                width: "-webkit-fill-available",
                padding: "10px",
                margin: "auto",
                "&:hover": {
                  backgroundColor: "#03676a",
                  color: "white",
                },
              }}
            >
              See Your Trip
            </Button>
          </div>
        </Box>
      </Modal>
        <Footer/>
    </div>
  );
}

export default TripPlanner;
