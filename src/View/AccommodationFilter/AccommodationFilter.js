import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import "./AccommodationFilter.css";
import "./SortingSection.css";
import "./FilterSection.css";
import "./FilteredLocationSection.css";
import Grid from "@mui/material/Grid";
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
import {Link} from "react-router-dom";
import Address from "../../Assets/AccommodationFacilityIcons/address.png";
import FreeCancellation from "../../Assets/AccommodationFacilityIcons/free-cancellation.png";
import PayAtProperty from "../../Assets/AccommodationFacilityIcons/pay-at-property.png";
import View from "../../Assets/AccommodationFacilityIcons/view.png";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import Granbell1 from "../../Assets/FilteredAccommodations/GranbellHotelColombo/1.jpg";
import Granbell2 from "../../Assets/FilteredAccommodations/GranbellHotelColombo/2.jpg";
import Granbell3 from "../../Assets/FilteredAccommodations/GranbellHotelColombo/3.jpg";
import Granbell4 from "../../Assets/FilteredAccommodations/GranbellHotelColombo/5.jpg";
import Granbell5 from "../../Assets/FilteredAccommodations/GranbellHotelColombo/4.jpg";
import TaloUrbonColombo1 from "../../Assets/FilteredAccommodations/TaloUrbonColombo/1.jpg";
import TaloUrbonColombo2 from "../../Assets/FilteredAccommodations/TaloUrbonColombo/2.jpg";
import TaloUrbonColombo3 from "../../Assets/FilteredAccommodations/TaloUrbonColombo/3.jpg";
import TaloUrbonColombo4 from "../../Assets/FilteredAccommodations/TaloUrbonColombo/5.jpg";
import TaloUrbonColombo5 from "../../Assets/FilteredAccommodations/TaloUrbonColombo/4.jpg";
import ZylanLuxuryVilla1 from "../../Assets/FilteredAccommodations/ZylanLuxuryVilla/1.jpg";
import ZylanLuxuryVilla2 from "../../Assets/FilteredAccommodations/ZylanLuxuryVilla/2.jpg";
import ZylanLuxuryVilla3 from "../../Assets/FilteredAccommodations/ZylanLuxuryVilla/3.jpg";
import ZylanLuxuryVilla4 from "../../Assets/FilteredAccommodations/ZylanLuxuryVilla/5.jpg";
import ZylanLuxuryVilla5 from "../../Assets/FilteredAccommodations/ZylanLuxuryVilla/4.jpg";
import CinnamonRedColombo1 from "../../Assets/FilteredAccommodations/CinnamonRedColombo/1.jpg";
import CinnamonRedColombo2 from "../../Assets/FilteredAccommodations/CinnamonRedColombo/2.jpg";
import CinnamonRedColombo3 from "../../Assets/FilteredAccommodations/CinnamonRedColombo/3.jpg";
import CinnamonRedColombo4 from "../../Assets/FilteredAccommodations/CinnamonRedColombo/5.jpg";
import CinnamonRedColombo5 from "../../Assets/FilteredAccommodations/CinnamonRedColombo/4.jpg";
import TheBeehiveColombo1 from "../../Assets/FilteredAccommodations/TheBeehiveColombo/1.jpg";
import TheBeehiveColombo2 from "../../Assets/FilteredAccommodations/TheBeehiveColombo/2.jpg";
import TheBeehiveColombo3 from "../../Assets/FilteredAccommodations/TheBeehiveColombo/3.jpg";
import TheBeehiveColombo4 from "../../Assets/FilteredAccommodations/TheBeehiveColombo/5.jpg";
import TheBeehiveColombo5 from "../../Assets/FilteredAccommodations/TheBeehiveColombo/4.jpg";
import MandarinaColombo1 from "../../Assets/FilteredAccommodations/MandarinaColombo/1.jpg";
import MandarinaColombo2 from "../../Assets/FilteredAccommodations/MandarinaColombo/2.jpg";
import MandarinaColombo3 from "../../Assets/FilteredAccommodations/MandarinaColombo/3.jpg";
import MandarinaColombo4 from "../../Assets/FilteredAccommodations/MandarinaColombo/5.jpg";
import MandarinaColombo5 from "../../Assets/FilteredAccommodations/MandarinaColombo/4.jpg";

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
    // const [housingFacilities, setHousingFacilities] = useState(["Parking", "Restaurant", "Pets Allowed", "Room Service", "24-Hour Fron Desk", "Free WiFi", "Non-Smoking Rooms", "Fitness Center"]);
    const [accommodationTypes, setAccommodationTypes] = useState([]);
    const [distances, setDistances] = useState(["Less than 1 km", "Between 1 km and 3 km", "Between 3 km and 5 km", "Between 5 km and 10 km", "More than 10 km"]);
    const [reviewScore, setReviewScore] = useState(["Exceptional 9+", "Excellent 8+", "Very Good 7+", "Good 6+", "Passable 5+"]);
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

    const filterData = {
        destination: state.destination,
        checkInDate: state.checkInDate,
        checkOutDate: state.checkOutDate,
        noOfPeople: state.noOfPeople,
        noOfRooms: state.noOfRooms
    }

    const [filteredLocations, setFilteredLocations] = useState([
        {
            accommodationName: "Granbell Hotel Colombo",
            address: "Kollupitiya, Colombo",
            pictures: [Granbell1, Granbell2, Granbell3, Granbell4, Granbell5],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
            size: 24,
            bedDetail: "One extra-large double bed",
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
            accommodationName: "Talo Urbon Colombo",
            address: "Colombo",
            pictures: [
                TaloUrbonColombo1,
                TaloUrbonColombo2,
                TaloUrbonColombo3,
                TaloUrbonColombo4,
                TaloUrbonColombo5,
            ],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
            accommodationName: "Zylan Luxury Villa",
            address: "Cinnamon Gardens, Colombo",
            pictures: [
                ZylanLuxuryVilla1,
                ZylanLuxuryVilla2,
                ZylanLuxuryVilla3,
                ZylanLuxuryVilla4,
                ZylanLuxuryVilla5,
            ],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
            accommodationName: "Cinnamon Red Colombo",
            address: "Kollupitiya, Colombo",
            pictures: [
                CinnamonRedColombo1,
                CinnamonRedColombo2,
                CinnamonRedColombo3,
                CinnamonRedColombo4,
                CinnamonRedColombo5,
            ],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
            accommodationName: "The Beehive Colombo",
            address: "Colombo",
            pictures: [
                TheBeehiveColombo1,
                TheBeehiveColombo2,
                TheBeehiveColombo3,
                TheBeehiveColombo4,
                TheBeehiveColombo5,
            ],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
            accommodationName: "Mandarina Colombo",
            address: "Colombo",
            pictures: [
                MandarinaColombo1,
                MandarinaColombo2,
                MandarinaColombo3,
                MandarinaColombo4,
                MandarinaColombo5,
            ],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
            accommodationName: "Zylan Luxury Villa",
            address: "Cinnamon Gardens, Colombo",
            pictures: [
                ZylanLuxuryVilla1,
                ZylanLuxuryVilla2,
                ZylanLuxuryVilla3,
                ZylanLuxuryVilla4,
                ZylanLuxuryVilla5,
            ],
            housingFacilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
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
    ]);

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
        searchAccommodations();
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
            locationId: destination.id,
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
        axios.post("http://localhost:8080/public-user/accommodation/search", data)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.body)
                    setFilteredLocations(res.data.body);
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
                        <div className="filtered-location-section">
                            {filteredLocations.map((item) => (
                                <div className="filtered-single-location">
                                    <Grid container spacing={0}>
                                        <Grid item xs={4}>
                                            <Grid container spacing={0}>
                                                <Grid item xs={12}>
                                                    <img
                                                        width="100%"
                                                        height="200px"
                                                        src={item.pictures[0]}
                                                        alt="Hotel Image"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <img
                                                        width="100%"
                                                        height="70px"
                                                        src={item.pictures[1]}
                                                        alt="Hotel Image"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <img
                                                        width="100%"
                                                        height="70px"
                                                        src={item.pictures[2]}
                                                        alt="Hotel Image"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <img
                                                        width="100%"
                                                        height="70px"
                                                        src={item.pictures[3]}
                                                        alt="Hotel Image"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <img
                                                        width="100%"
                                                        height="70px"
                                                        src={item.pictures[4]}
                                                        alt="Hotel Image"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid className="filtered-location-details" item xs={6}>
                                            <div className="filtered-location-name">

                                                <Link to={'/single-accommodation/' + item.accommodationId}
                                                      state={{filterData}}>
                                                    {item.accommodationName}
                                                </Link>
                                            </div>
                                            <div className="filtered-location-address">
                                                <img src={Address} alt="Address"/>
                                                {item.address}
                                            </div>
                                            <div className="filtered-location-facilities">
                                                {item.housingFacilities.map((facility) => (
                                                    <p className="filtered-location-single-facility">
                                                        {facility}
                                                    </p>
                                                ))}
                                            </div>
                                            <div className="filtered-location-room-name">
                                                {item.roomName}
                                            </div>
                                            <div className="filtered-location-size">
                                                Size - {item.size} sq feet
                                            </div>
                                            <div className="filtered-location-bed">{item.bed}</div>
                                            <div className="filtered-location-description">
                                                {item.description}
                                            </div>
                                            <div className="filtered-location-package-facilities">
                                                <div
                                                    className={
                                                        item.freeCancellation
                                                            ? "filtered-location-package-facility free-cancellation"
                                                            : "filtered-location-package-facility free-cancellation hidden"
                                                    }
                                                >
                                                    <img src={FreeCancellation} alt="Free Cancellation"/>
                                                    FREE CANCELLATION
                                                </div>
                                                <div
                                                    className={
                                                        item.payAtProperty
                                                            ? "filtered-location-package-facility pay-at-property"
                                                            : "filtered-location-package-facility pay-at-property hidden"
                                                    }
                                                >
                                                    <img src={PayAtProperty} alt="Pay at Property"/>
                                                    PAY AT THE PROPERTY
                                                </div>
                                                <div className="filtered-location-package-facility view">
                                                    <img src={View} alt="View"/>
                                                    {item.view}
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className="filtered-location-review-price">
                                                <Rating
                                                    name="filtered-location-rating-stars"
                                                    className="filtered-location-rating-stars"
                                                    defaultValue={Math.round(item.rating / 2)}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                                <Grid container spacing={0}>
                                                    <Grid item xs={8}>
                                                        <p className="filtered-location-rating-message">
                                                            {item.ratingMessage}
                                                        </p>
                                                        <p className="filtered-location-rating-count">
                                                            {item.ratingCount} Reviews
                                                        </p>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <div className="filtered-location-rating-flag">
                                                            <p className="filtered-location-rating">{item.rating}</p>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <div
                                                    className={
                                                        item.discount === 0
                                                            ? "filtered-location-discount hidden"
                                                            : "filtered-location-discount"
                                                    }
                                                >
                                                    {Math.round(item.discount * 100)}% DISCOUNT
                                                </div>
                                                <div
                                                    className={
                                                        item.discount === 0
                                                            ? "filtered-location-price hidden"
                                                            : "filtered-location-price"
                                                    }
                                                >
                                                    Rs. {item.price}.00
                                                </div>
                                                <div className="filtered-location-discounted-price">
                                                    Rs. {Math.round(item.price * (1 - item.discount))}.00
                                                    <p>Taxes included</p>
                                                </div>
                                                <div className="filtered-location-people">2 Adults 1 Night</div>
                                                <Button fullWidth variant="contained" size="small">
                                                    See Availability
                                                </Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                            <div className="filtered-location-pagination">
                                <Pagination count={10} variant="outlined" shape="rounded"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
            <Footer/>
        </>
    );
}

export default AccommodationFilter;