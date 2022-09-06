import React, {useEffect, useState} from "react";
import BackgroundImageSet from "../BackgroundImageSet/BackgroundImageSet";
import "./SearchForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
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
import moment from "moment";

function SearchForm() {

    const navigate = useNavigate();

    useEffect(() => {
        loadLocations();
    }, []);


    const [locations, setLocations] = useState([]);

    const currentDate = moment(Date.now());
    const endDate = moment(Date.now()).add(3, "days");
    const [destination, setDestination] = useState(locations[0]);
    const [checkInDate, setCheckInDate] = useState(currentDate);
    const [checkOutDate, setCheckOutDate] = useState(endDate);
    const [noOfPeople, setNoOfPeople] = useState(2);
    const [noOfRooms, setNoOfRooms] = useState(1);

    const handleDestination = (event) => (newValue) => {
        setDestination(newValue)
    }

    const handleCheckInDate = (newValue) => {
        setCheckInDate(newValue);
    };

    const handleCheckOutDate = (newValue) => {
        setCheckOutDate(newValue);
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
            checkInDate: checkInDate.toDate(),
            checkOutDate: checkOutDate.toDate(),
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
                                defaultValue={destination}
                                options={locations}
                                getOptionLabel={option => option.label}
                                sx={{m: 1, width: '99%'}}
                                onChange={(event, newValue) => {
                                    setDestination(newValue);
                                }}
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
                                <DatePicker
                                    label="Start day of your travel"
                                    inputFormat="yyyy-MM-DD"
                                    value={checkInDate}
                                    onChange={handleCheckInDate}
                                    renderInput={(params) => <TextField {...params} sx={{m: 1, width: '99%'}}/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <img src={EndDate} alt="Start Date" className="form-icon"/>
                            </Grid>
                            <Grid item xs={5}>
                                <DatePicker
                                    label="End day of your travel"
                                    inputFormat="yyyy-MM-DD"
                                    value={checkOutDate}
                                    onChange={handleCheckOutDate}
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
                                value={noOfPeople}
                                onChange={(event, newValue) => {
                                    setNoOfPeople(newValue);
                                }}
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
                                value={noOfRooms}
                                onChange={(event, newValue) => {
                                    setNoOfRooms(newValue);
                                }}
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