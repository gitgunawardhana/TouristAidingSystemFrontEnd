import React, {useEffect, useState} from "react";
import BackgroundImageSet from "../BackgroundImageSet/BackgroundImageSet";
import "./SearchForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import Grid from "@mui/material/Grid";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router";
import LocationIcon from "../../../Assets/AccommodationFilterFormIcons/location.png";
import StartDate from "../../../Assets/AccommodationFilterFormIcons/start-date.png";
import EndDate from "../../../Assets/AccommodationFilterFormIcons/end-date.png";
import People from "../../../Assets/AccommodationFilterFormIcons/people.png";
import Room from "../../../Assets/AccommodationFilterFormIcons/room.png";
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

function SearchForm() {

    const navigate = useNavigate();

    useEffect(() => {
        loadLocations();
    }, []);

    const [destination, setDestination] = useState();
    const [checkInTime, setCheckInTime] = useState(Date.now());
    const [checkOutTime, setCheckOutTime] = useState(Date.now());
    const [noOfPeople, setNoOfPeople] = useState();
    const [noOfRooms, setNoOfRooms] = useState();
    const [locations, setLocations] = useState([]);

    const handleDestination = (newValue) => {
        setDestination(newValue)
    }

    const handleCheckInTime = (newValue) => {
        setCheckInTime(newValue);
    };

    const handleCheckOutTime = (newValue) => {
        setCheckOutTime(newValue);
    };

    const handleNoOfPeople = (newValue) => {
        setNoOfPeople(newValue)
    }

    const handleNoOfRooms = (newValue) => {
        setNoOfRooms(newValue)
    }

    const navigateToAccommodationFilter = () => {
        const data = {
            destination: destination,
            checkInTime: checkInTime,
            checkOutTime: checkOutTime,
            noOfPeople: noOfPeople,
            noOfRooms: noOfRooms
        }
        navigate('/accommodations-filter',
            {
                state: data
            });

    };

    //backend calls
    const loadLocations = () => {
        axios.get("http://localhost:8080/public-user/location/names")
            .then(res => {
                if (res.data.success) {
                    setLocations(res.data.body)
                }
            })
    }

    //styled components
    const SearchButton = styled(Button)(({theme}) => ({
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

    return (
        <div className="search-form-main">
            <BackgroundImageSet/>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className="search-form-box"
            >
                <div>
                    <h4>CHOOSE YOUR STAY</h4>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={LocationIcon} alt="Start Date" className="form-icon"/>
                        </Grid>
                        <Grid item xs={11}>
                            <Autocomplete
                                disablePortal
                                id="destination"
                                options={locations}
                                sx={{m: 1, width: '99%'}}
                                onChange={handleDestination}
                                renderInput={(params) => <TextField {...params} label="Enter the destination"/>}
                            />
                        </Grid>
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Grid container spacing={0}>
                            <Grid item xs={1}>
                                <img src={StartDate} alt="Start Date" className="form-icon"/>
                            </Grid>
                            <Grid item xs={5}>
                                <MobileDatePicker
                                    label="Start day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkInTime}
                                    onChange={handleCheckInTime}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <img src={EndDate} alt="Start Date" className="form-icon"/>
                            </Grid>
                            <Grid item xs={5}>
                                <MobileDatePicker
                                    label="End day of your travel"
                                    inputFormat="DD/MM/yyyy"
                                    value={checkOutTime}
                                    onChange={handleCheckOutTime}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <img src={People} alt="Start Date" className="form-icon"/>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                id="numberOfPeople"
                                label="Number of people"
                                type="number"
                                onChange={handleNoOfPeople}
                                sx={{m: 1, width: '99%'}}/>
                        </Grid>
                        <Grid item xs={1}>
                            <img src={Room} alt="Start Date" className="form-icon"/>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                id="numberOfRooms"
                                label="Number of rooms"
                                type="number"
                                onChange={handleNoOfRooms}
                                sx={{m: 1, width: '99%'}}/>
                        </Grid>
                    </Grid>
                </div>
                <SearchButton
                    onClick={navigateToAccommodationFilter}>Find the Best Results</SearchButton>
            </Box>
        </div>
    );
}

export default SearchForm;