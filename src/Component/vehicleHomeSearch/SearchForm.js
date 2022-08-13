import React from "react";
import BackgroundImageSet from "../Accommodation/BackgroundImageSet/BackgroundImageSet.js";
import "./SearchForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Grid from "@mui/material/Grid";
import * as FaIcons from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LocationIcon from "../../Assets/AccommodationFilterFormIcons/location.png";
import StartDate from "../../Assets/AccommodationFilterFormIcons/start-date.png";
import EndDate from "../../Assets/AccommodationFilterFormIcons/end-date.png";
import People from "../../Assets/AccommodationFilterFormIcons/people.png";
import Room from "../../Assets/AccommodationFilterFormIcons/room.png";

function SearchForm() {
    const [checkInTime, setCheckInTime] = React.useState(Date.now());
    const handleCheckInTime = (newValue) => {
        setCheckInTime(newValue);
    };
    const [checkOutTime, setCheckOutTime] = React.useState(Date.now());
    const handleCheckOutTime = (newValue) => {
        setCheckOutTime(newValue);
    };

    const SearchButton = styled(Button)(({ theme }) => ({
        position: 'absolute',
        backgroundColor: '#00565b',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00565b',
        },
        width: '50%',
        marginLeft: '-25%',
        marginTop: '10px',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
        padding: '10px',
    }));

    const navigate = useNavigate();
    const navigateToVehicleFilter = () => {
        navigate('/vehicles-filter');
    };

    return (
        <div className="search-form-main">
            {/* <BackgroundImageSet /> */}
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="search-form-box-car"
            >
                <div>
                    <h4>CHOOSE YOUR VEHICLE</h4>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={LocationIcon} alt="Start Date" className="form-icon" />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="destination" label="Enter the pick-up location" type="text"
                                sx={{ m: 1, width: '99%' }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <RadioGroup id="radiogroupvehicle"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Return to same location" />
                                <FormControlLabel value="male" control={<Radio />} label="Return to different location" />

                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={LocationIcon} alt="Start Date" className="form-icon" />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="destination" label="Enter the drop-off location" type="text"
                                sx={{ m: 1, width: '99%' }} />
                        </Grid>
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Grid container spacing={0}>
                            <Grid item xs={1}>
                                <img src={StartDate} alt="Start Date" className="form-icon" />
                            </Grid>
                            <Grid item xs={5}>
                                <MobileDatePicker
                                    label="Start day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkInTime}
                                    onChange={handleCheckInTime}
                                    renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '99%' }} />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <img src={EndDate} alt="Start Date" className="form-icon" />
                            </Grid>
                            <Grid item xs={5}>
                                <MobileDatePicker
                                    label="End day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkOutTime}
                                    onChange={handleCheckOutTime}
                                    renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '99%' }} />}
                                />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                    {/* <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={People} alt="Start Date" className="form-icon" />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField id="numberOfPeople" label="Number of people" type="text"
                                sx={{ m: 1, width: '99%' }} />
                        </Grid>
                        <Grid item xs={1}>
                            <img src={Room} alt="Start Date" className="form-icon" />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField id="numberOfRooms" label="Number of rooms" type="text"
                                sx={{ m: 1, width: '99%' }} />
                        </Grid>
                    </Grid> */}
                </div>
                <SearchButton onClick={navigateToVehicleFilter}>Find the Best Results</SearchButton>
            </Box>
        </div>
    );
}

export default SearchForm;