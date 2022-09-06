import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import "./AccommodationFilter.css";
import "./SortingSection.css";
import "./FilterSection.css";
import Grid from "@mui/material/Grid";
import FilteredLocationSection
    from "../../Component/AccommodationFilter/FilteredLocationSection/FilteredLocationSection";
import Footer from "../../Component/Footer/Footer";
import Box from "@mui/material/Box";
import LocationIcon from "../../Assets/AccommodationFilterFormIcons/location.png";
import TextField from "@mui/material/TextField";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import StartDate from "../../Assets/AccommodationFilterFormIcons/start-date.png";
import EndDate from "../../Assets/AccommodationFilterFormIcons/end-date.png";
import People from "../../Assets/AccommodationFilterFormIcons/people.png";
import Room from "../../Assets/AccommodationFilterFormIcons/room.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Divider} from "@mui/material";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import Swal from "sweetalert";
import moment from "moment";

function AccommodationFilter() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const {state} = useLocation();

    useEffect(() => {
        loadLocations();
        loadAccommodationTypes();
        loadFacilities();
        searchAccommodations();
    }, []);

    // sorting section
    const [best, setBest] = useState(true);
    const [review, setReview] = useState(false);
    const [distance, setDistance] = useState(false);
    const [lowPrice, setLowPrice] = useState(false);
    const [highPrice, setHighPrice] = useState(false);

    //filter section
    const [locations, setLocations] = useState([]);

    // const [accommodationTypes, setAccommodationTypes] = useState(["Hotels", "Apartments", "Resorts", "Villas", "Cabins", "Cottages", "Camping", "Homestays", "Guest Houses"]);
    const [accommodationTypes, setAccommodationTypes] = useState([]);
    const [distances, setDistances] = useState(["Less than 1 km", "Between 1 km and 3 km", "Between 3 km and 5 km", "Between 5 km and 10 km", "More than 10 km"]);
    const [reviewScore, setReviewScore] = useState(["Exceptional 9+", "Excellent 8+", "Very Good 7+", "Good 6+", "Passable 5+"]);
    // const [housingFacilities, setHousingFacilities] = useState(["Parking", "Restaurant", "Pets Allowed", "Room Service", "24-Hour Fron Desk", "Free WiFi", "Non-Smoking Rooms", "Fitness Center"]);
    const [housingFacilities, setHousingFacilities] = useState([]);

    const [selectedAccommodationTypes, setSelectedAccommodationTypes] = useState([]);
    const [selectedDistances, setSelectedDistances] = useState([]);
    const [selectedReviewScore, setSelectedReviewScore] = useState([]);
    const [selectedHousingFacilities, setSelectedHousingFacilities] = useState([]);

    const [destination, setDestination] = useState(state.destination);
    const [checkInDate, setCheckInDate] = useState(state.checkInDate);
    const [checkOutDate, setCheckOutDate] = useState(state.checkOutDate);
    const [noOfPeople, setNoOfPeople] = useState(state.noOfPeople);
    const [noOfRooms, setNoOfRooms] = useState(state.noOfRooms);

    const handleDestination = (newValue) => {
        setDestination(newValue)
    }

    const handleCheckInTime = (newValue) => {
        setCheckInDate(newValue);
    };

    const handleCheckOutTime = (newValue) => {
        setCheckOutDate(newValue);
    };

    const handleNoOfPeople = (newValue) => {
        setNoOfPeople(newValue)
    }

    const handleNoOfRooms = (newValue) => {
        setNoOfRooms(newValue)
    }

    // const [parking, setParking] = useState(false);
    // const [privateCheckInOut, setPrivateCheckInOut] = useState(false);
    // const [twentyFourHourCheckInOut, setTwentyFourHourCheckInOut] = useState(false);
    // const [frontDesk, setFrontDesk] = useState(false);
    // const [petsAllowed, setPetsAllowed] = useState(false);
    // const [freeWiFi, setFreeWiFi] = useState(false);
    // const [roomService, setRoomService] = useState(false);
    // const [bar, setBar] = useState(false);
    // const [smokingRoom, setSmokingRoom] = useState(false);
    // const [restaurant, setRestaurant] = useState(false);
    // const [gym, setGym] = useState(false);
    // const [swimmingPool, setSwimmingPool] = useState(false);
    //
    // const handleParking = (newValue) => {
    //     setParking(newValue);
    // }
    // const handlePrivateCheckInOut = (newValue) => {
    //     setPrivateCheckInOut(newValue);
    // }
    // const handleTwentyFourHourCheckInOut = (newValue) => {
    //     setTwentyFourHourCheckInOut(newValue);
    // }
    // const handleFrontDesk = (newValue) => {
    //     setFrontDesk(newValue);
    // }
    // const handlePetsAllowed = (newValue) => {
    //     setPetsAllowed(newValue);
    // }
    // const handleFreeWiFi = (newValue) => {
    //     setFreeWiFi(newValue);
    // }
    // const handleRoomService = (newValue) => {
    //     setRoomService(newValue);
    // }
    // const handleBar = (newValue) => {
    //     setBar(newValue);
    // }
    // const handleSmokingRoom = (newValue) => {
    //     setSmokingRoom(newValue);
    // }
    // const handleRestaurant = (newValue) => {
    //     setRestaurant(newValue);
    // }
    // const handleGym = (newValue) => {
    //     setGym(newValue);
    // }
    // const handleSwimmingPool = (newValue) => {
    //     setSwimmingPool(newValue);
    // }

    const handleAccommodationTypesChange = (value) => event => {
        let items = [];
        const isFound = selectedAccommodationTypes.some(element => {
            const result = element === value;
            items.push(element);
            return result;
        });
        if (isFound) {
            setSelectedAccommodationTypes(current =>
                current.filter(element => {
                    return element !== value;
                }),
            );
        } else {
            items.push(value);
            setSelectedAccommodationTypes(items);
        }
    }

    const handleDistances = (value) => event => {
        let items = [];
        const isFound = selectedDistances.some(element => {
            const result = element === value;
            items.push(element);
            return result;
        });
        if (isFound) {
            setSelectedDistances(current =>
                current.filter(element => {
                    return element !== value;
                }),
            );
        } else {
            items.push(value);
            setSelectedDistances(items);
        }
    }

    const handleReviewScore = (value) => event => {
        let items = [];
        const isFound = selectedReviewScore.some(element => {
            const result = element === value;
            items.push(element);
            return result;
        });
        if (isFound) {
            setSelectedReviewScore(current =>
                current.filter(element => {
                    return element !== value;
                }),
            );
        } else {
            items.push(value);
            setSelectedReviewScore(items);
        }
    }

    const handleHousingFacilitiesChange = (value) => event => {
        let items = [];
        const isFound = selectedHousingFacilities.some(element => {
            const result = element === value;
            items.push(element);
            return result;
        });
        if (isFound) {
            setSelectedHousingFacilities(current =>
                current.filter(element => {
                    return element !== value;
                }),
            );
        } else {
            items.push(value);
            setSelectedHousingFacilities(items);
        }
    }


    //backend calls
    const loadAccommodationTypes = () => {
        axios.get("http://localhost:8080/public-user/accommodation/types")
            .then(res => {
                if (res.data.success) {
                    setAccommodationTypes(res.data.body)
                }
            })
    }

    const loadFacilities = () => {
        axios.get("http://localhost:8080/public-user/accommodation/facilities")
            .then(res => {
                if (res.data.success) {
                    setHousingFacilities(res.data.body)
                }
            })
    }

    const loadLocations = () => {
        axios.get("http://localhost:8080/public-user/location/names")
            .then(res => {
                if (res.data.success) {
                    setLocations(res.data.body)
                }
            })
    }

    const searchAccommodations = () => {
        let sortingOption = "BEST";

        if (best) {
            sortingOption = "BEST";
        } else if (review) {
            sortingOption = "REVIEW";
        } else if (distance) {
            sortingOption = "DISTANCE";
        } else if (lowPrice) {
            sortingOption = "LOW_PRICE";
        } else if (highPrice) {
            sortingOption = "HIGH_PRICE";
        }

        const data = {
            destination: destination,
            checkInDate: moment(checkInDate).format('YYYY-MM-DD'),
            checkOutDate: moment(checkOutDate).format('YYYY-MM-DD'),
            noOfPeople: noOfPeople,
            noOfRooms: noOfRooms,
            accommodationTypes: selectedAccommodationTypes,
            distances: selectedDistances,
            reviewScore: selectedReviewScore,
            housingFacilities: selectedHousingFacilities,
            sortingOption: sortingOption
        }
        console.log(data)
        axios.post("http://localhost:8080/public-user/accommodation/search", data)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.body)
                } else {
                    Swal.fire(
                        'Failed',
                        res.data.message,
                        'error'
                    ).then(r => {
                    })
                }

            })
            .catch(err => {
                Swal.fire(
                    'Failed',
                    'Something went wrong',
                    'error'
                ).then(r => {
                })
            })
    }

    //styled components
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

    return (
        <>
            <Navbar/>
            <div className="accommodation-filter-main-section">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
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
                                            <img src={LocationIcon} alt="Location"
                                                 className="find-accommodation-form-icon"/>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Autocomplete
                                                disablePortal
                                                id="destination"
                                                value={destination}
                                                options={locations}
                                                sx={{m: 1, width: '99%'}}
                                                onChange={(event, newValue) => {
                                                    setDestination(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params}
                                                                                    label="Enter the destination"/>}
                                            />
                                        </Grid>
                                    </Grid>

                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={1}>
                                                <img src={StartDate} alt="Start Date"
                                                     className="find-accommodation-form-icon"/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <DatePicker
                                                    label="Start day of your travel"
                                                    inputFormat="yyyy-MM-DD"
                                                    value={checkInDate}
                                                    onChange={handleCheckInTime}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        sx={{m: 1, width: '99%'}}/>}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={3}>
                                            <Grid item xs={1}>
                                                <img src={EndDate} alt="End Date"
                                                     className="find-accommodation-form-icon"/>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <DatePicker
                                                    label="End day of your travel"
                                                    inputFormat="yyyy-MM-DD"
                                                    value={checkOutDate}
                                                    onChange={handleCheckOutTime}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        sx={{m: 1, width: '99%'}}/>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </LocalizationProvider>

                                    <Grid container spacing={3}>
                                        <Grid item xs={1}>
                                            <img src={People} alt="Number of People"
                                                 className="find-accommodation-form-icon"/>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <TextField
                                                id="numberOfPeople"
                                                label="Number of people"
                                                type="text"
                                                value={noOfPeople}
                                                onChange={handleNoOfPeople}
                                                sx={{m: 1, width: '99%'}}/>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={3}>
                                        <Grid item xs={1}>
                                            <img src={Room} alt="Number of Rooms"
                                                 className="find-accommodation-form-icon"/>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <TextField
                                                id="numberOfRooms"
                                                label="Number of rooms"
                                                type="text"
                                                value={noOfRooms}
                                                onChange={handleNoOfRooms}
                                                sx={{m: 1, width: '99%'}}/>
                                        </Grid>
                                    </Grid>
                                </div>
                                <SearchButton onClick={searchAccommodations}>Search</SearchButton>
                            </Box>
                            <br/>
                            <h5><b>Filter Your Accommodations</b></h5>
                            <br/>
                            <h5>Accommodation Type</h5>
                            <FormGroup>
                                {accommodationTypes.map((item) => (
                                    <FormControlLabel
                                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}
                                                           onChange={handleAccommodationTypesChange(item.id)}/>}
                                        label={item.name}/>
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
                                        control={<Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 18}}}
                                                           onChange={handleHousingFacilitiesChange(item.id)}/>}
                                        label={item.name}/>
                                ))}
                            </FormGroup>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="sorting-section">
                            <div className={best ? "sorting-section-single-selected" : "sorting-section-single"}
                                 onClick={() => {
                                     setBest(true);
                                     setReview(false);
                                     setDistance(false);
                                     setLowPrice(false);
                                     setHighPrice(false);
                                 }}>
                                BEST OPTIONS
                            </div>
                            <div className={review ? "sorting-section-single-selected" : "sorting-section-single"}
                                 onClick={() => {
                                     setBest(false);
                                     setReview(true);
                                     setDistance(false);
                                     setLowPrice(false);
                                     setHighPrice(false);
                                 }}>
                                TOP REVIEWED
                            </div>
                            <div className={distance ? "sorting-section-single-selected" : "sorting-section-single"}
                                 onClick={() => {
                                     setBest(false);
                                     setReview(false);
                                     setDistance(true);
                                     setLowPrice(false);
                                     setHighPrice(false);
                                 }}>
                                DISTANCE FROM CITY
                            </div>
                            <div className={lowPrice ? "sorting-section-single-selected" : "sorting-section-single"}
                                 onClick={() => {
                                     setBest(false);
                                     setReview(false);
                                     setDistance(false);
                                     setLowPrice(true);
                                     setHighPrice(false);
                                 }}>
                                LOWEST PRICE
                            </div>
                            <div className={highPrice ? "sorting-section-single-selected" : "sorting-section-single"}
                                 onClick={() => {
                                     setBest(false);
                                     setReview(false);
                                     setDistance(false);
                                     setLowPrice(false);
                                     setHighPrice(true);
                                 }}>
                                HIGHEST PRICE
                            </div>
                        </div>
                        <FilteredLocationSection/>
                    </Grid>
                </Grid>

            </div>
            <Footer/>
        </>
    );
}

export default AccommodationFilter;