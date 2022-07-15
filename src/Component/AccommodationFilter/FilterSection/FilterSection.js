import React from "react";
import "./FilterSection.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DatePicker, LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import LocationIcon from "../../../Assets/AccommodationFilterFormIcons/location.png";
import StartDate from "../../../Assets/AccommodationFilterFormIcons/start-date.png";
import EndDate from "../../../Assets/AccommodationFilterFormIcons/end-date.png";
import People from "../../../Assets/AccommodationFilterFormIcons/people.png";
import Room from "../../../Assets/AccommodationFilterFormIcons/room.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Divider} from "@mui/material";

function FilterSection() {

    const [checkInTime, setCheckInTime] = React.useState(Date.now());
    const handleCheckInTime = (newValue) => {
        setCheckInTime(newValue);
    };
    const [checkOutTime, setCheckOutTime] = React.useState(Date.now());
    const handleCheckOutTime = (newValue) => {
        setCheckOutTime(newValue);
    };

    const SearchButton = styled(Button)(({theme}) => ({
        backgroundColor: '#00565b',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00565b',
        },
        width: '50%',
        marginLeft: '25%',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
        padding: '5px',
    }));

    const CustomCheckBox = styled(Checkbox)(({theme}) => ({
        backgroundColor: '#00565b',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00565b',
        },
        width: '50%',
        marginLeft: '25%',
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
        padding: '5px',
    }));

    const accommodationTypes = ["Hotels", "Apartments", "Resorts", "Villas", "Cabins", "Cottages", "Campings", "Homestays", "Guest Houses"];
    const ratings = ["5 stars", "4 stars", "3 stars", "2 stars", "1 star", "Unrated"];
    const distances = ["Less than 1 km", "Between 1 km and 3 km", "Between 3 km and 5 km", "Between 5 km and 10 km", "More than 10 km"];
    const reviewScore = ["Exceptional 9+", "Excellent 8+", "Very Good 7+", "Good 6+", "Passable 5+"];
    const housingFacilities = ["Parking", "Restaurant", "Pets Allowed", "Room Service", "24-Hour Fron Desk", "Free WiFi", "Non-Smoking Rooms", "Fitness Center"];

    return (
        <div className="filter-section">
            <h5><b>Find Accommodations</b></h5>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="find-accommodation-form"
            >
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <img src={LocationIcon} alt="Location" className="find-accommodation-form-icon"/>
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="destination"
                                       label="Enter the destination"
                                       type="text"
                                       sx={{m: 1, width: '99%'}}/>
                        </Grid>
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <img src={StartDate} alt="Start Date" className="find-accommodation-form-icon"/>
                            </Grid>
                            <Grid item xs={11}>
                                <DatePicker
                                    label="Start day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkInTime}
                                    onChange={handleCheckInTime}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <img src={EndDate} alt="End Date" className="find-accommodation-form-icon"/>
                            </Grid>
                            <Grid item xs={11}>
                                <DatePicker
                                    label="End day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkOutTime}
                                    onChange={handleCheckOutTime}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>

                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <img src={People} alt="Number of People" className="find-accommodation-form-icon"/>
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="numberOfPeople" label="Number of people" type="text"
                                       sx={{m: 1, width: '99%'}}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <img src={Room} alt="Number of Rooms" className="find-accommodation-form-icon"/>
                        </Grid>
                        <Grid item xs={11}>
                            <TextField id="numberOfRooms" label="Number of rooms" type="text"
                                       sx={{m: 1, width: '99%'}}/>
                        </Grid>
                    </Grid>
                </div>
                <SearchButton>Search</SearchButton>
            </Box>
            <br/>
            <h5><b>Filter Your Accommodations</b></h5>
            <br/>
            <h5>Accommodation Type</h5>
            <FormGroup>
                {accommodationTypes.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
            <h5>Start Rating</h5>
            <FormGroup>
                {ratings.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
            <h5>Distance from the City</h5>
            <FormGroup>
                {distances.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
            <h5>Review Score</h5>
            <FormGroup>
                {reviewScore.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
            <Divider/>
            <br/>
            <h5>House Facilities</h5>
            <FormGroup>
                {housingFacilities.map((item) => (
                    <FormControlLabel
                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}/>} label={item}/>
                ))}
            </FormGroup>
        </div>
    );
}

export default FilterSection;