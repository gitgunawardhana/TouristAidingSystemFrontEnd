import Button from "@mui/material/Button";
import { inputLabelClasses } from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useState } from "react";

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
      <br />
      <hr className="my-4" />
    </div>
  );
}

export default AvailabilityViewSection;
