import Button from "@mui/material/Button";
import {inputLabelClasses} from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDateFns} from "@mui/x-date-pickers-pro/AdapterDateFns";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import React, {useEffect, useState} from "react";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import axios from "axios";
import "./AvailabilityViewSection.css";
import {useNavigate} from "react-router";

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

function AvailabilityViewSection(props) {

    const navigate = useNavigate();

    useEffect(() => {
        loadPackages();
    }, []);

    const [packages, setPackages] = useState([]);

    const [startDateValue, setStartDateValue] = useState(props.checkInDate);
    const [endDateValue, setEndDateValue] = useState(props.checkOutDate);
    const [noOfPeople, setNoOfPeople] = useState(props.noOfPeople);
    const [noOfRooms, setNoOfRooms] = useState(props.noOfRooms);
    const [accommodationId, setAccommodationId] = useState(props.accommodationId);

    const handleStartDateChange = (newValue) => {
        setStartDateValue(newValue);
    };
    const handleEndDateChange = (newValue) => {
        setEndDateValue(newValue);
    };

    const handleNoOfPeople = (newValue) => {
        setNoOfPeople(newValue);
    };

    const handleNoOfRooms = (newValue) => {
        setNoOfRooms(newValue);
    };

    const loadPackages = () => {
        const data = {
            checkInDate: startDateValue,
            checkOutDate: endDateValue,
            accommodationId: accommodationId
        }
        axios.post("http://localhost:8080/public-user/accommodation/package/search", data)
            .then(res => {
                if (res.data.success) {
                    setPackages(res.data.body);
                }
            })
    }

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalRoomCount, setTotalRoomCount] = useState(0);
    const [selectedPackages, setSelectedPackages] = useState([]);

    const updateSelectedPackages = (packageId, price) => event => {
        let roomCount = event.target.value;
        let items = [];
        let existing = false;
        let newTotal = 0;
        let newRoomCount = 0;
        for (let i = 0; i < selectedPackages.length; i++) {
            let sp = selectedPackages[i];
            if (sp.id === packageId) {
                sp.price = parseFloat(price);
                sp.count = parseInt(roomCount);
                existing = true;
            }
            newTotal += sp.price * sp.count;
            newRoomCount += sp.count;
            items.push(sp);
        }
        if (!existing) {
            let data = {
                id: packageId,
                price: parseFloat(price),
                count: parseInt(roomCount)
            }
            newTotal += parseFloat(price) * parseInt(roomCount);
            newRoomCount += parseInt(roomCount);
            items.push(data);
        }
        setTotalPrice(newTotal);
        setTotalRoomCount(newRoomCount);
        setSelectedPackages(items);
    }

    const navigateToReservation = () => {
        const data = {
            selectedPackages: selectedPackages,
            checkInDate: startDateValue,
            checkOutDate: endDateValue,
            noOfPeople: noOfPeople,
            noOfRooms: noOfRooms,
            accommodationId: accommodationId,
            totalPrice: totalPrice,
            totalRoomCount: totalRoomCount
        }
        navigate('/reservation',
            {
                state: data
            });
    };

    return (
        <div>
            <h2 className="text-left" style={{color: "black", paddingTop: "5px"}}>
                <b>Availability</b>
            </h2>
            <div className="availability-div">
                <h4 style={{fontSize: "20px", marginTop: "-5px"}}>
                    Find the best options for you
                </h4>
                <div className="row" style={{marginTop: "30px"}}>
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
                            <div className="col-lg-4 col-md-4">
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
                                    label="Number of People"
                                    value={noOfPeople}
                                    onChange={handleNoOfPeople}
                                />
                            </div>
                            <div className="col-lg-4 col-md-4">
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
                                    label="No of Rooms"
                                    value={noOfRooms}
                                    onChange={handleNoOfRooms}
                                />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <Button
                                    onClick={() => {
                                        loadPackages();
                                    }}
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
            <div className="availability-div-result">
                <div className="result-tbl col-md-10">
                    <table id="availability-tbl-section">
                        <tr>
                            <th width="400px">Room</th>
                            <th width="50px">Sleeps</th>
                            <th>Today's price</th>
                            <th>Facilities</th>
                            <th width="50px">Select rooms</th>
                        </tr>
                        {packages.map((pack) => (
                            <tr>
                                <td>
                                    <span className="package-accommodation-name">{pack.accommodationName}</span>
                                    <br/>
                                    <span className="package-accommodation-bed-detail">{pack.bedDetail}</span>
                                    <br/>
                                    <span className="package-accommodation-left-count">Only {pack.availableCount} rooms left</span>
                                    <ul>
                                        {pack.housingFacilities.map((item) => (

                                            <li>
                                                <CheckRoundedIcon color="secondary" fontSize="small"/>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <span className="package-accommodation-people">{pack.noOfPeople}</span>
                                </td>
                                <td>
                                    <span className="package-accommodation-price">Rs. {pack.price}.00</span>
                                    <br/>
                                    <span className="package-accommodation-discount">{pack.discount * 100}% Off</span>
                                    <br/>
                                    <span
                                        className="package-accommodation-discounted-price">Rs. {pack.discountedPrice}.00</span>
                                </td>
                                <td>
                                    <span
                                        className="package-accommodation-facility">
                                         <CheckRoundedIcon color="success"/>
                                        {pack.freeCancellation ? "Free cancellation" : "Free cancellation cot available"}</span>
                                    <br/>
                                    <span
                                        className="package-accommodation-facility">
                                         <CheckRoundedIcon color="success"/>
                                        {pack.breakfastIncluded ? "Very good breakfast included" : "Breakfast is not available"}</span>
                                    <br/>
                                    <span
                                        className="package-accommodation-facility">
                                         <CheckRoundedIcon color="success"/>
                                        {pack.payAtProperty ? "Pay at the property" : "Pay in advance"}</span>
                                </td>
                                <td>
                                    <select
                                        className="selectRoom"
                                        name="selectRoom1"
                                        id="selectRoom1"
                                        onChange={updateSelectedPackages(pack.packageId, pack.discountedPrice)}
                                    >
                                        <option value="0"
                                        >0
                                        </option>
                                        {pack.availableCountList.map((item) => (
                                            <option value={item}>
                                                {item} - Rs.{item * pack.discountedPrice}.00
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="reserve-btn col-md-2">
                    <div className="reserve-btn-content">
                        <p>
                            <b>{totalRoomCount}</b> rooms for
                        </p>
                        <h4>LKR {totalPrice}.00</h4>
                        <p className="tax-para">All taxes included</p>
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                backgroundColor: "#03676E",
                                color: "white",
                                borderRadius: "5px",
                                padding: "8px",
                                margin: "20px auto auto auto",
                                "&:hover": {
                                    backgroundColor: "#1e3d3eed",
                                    color: "white",
                                },
                            }}
                            onClick={navigateToReservation}
                        >
                            I'll reserve
                        </Button>
                        <ul
                            style={{
                                listStyleType: "disc",
                                fontSize: "12px",
                                marginTop: "10px",
                                marginLeft: "20px",
                                padding: "0px",
                            }}
                        >
                            <li>Confirmation is immediate</li>
                            <li>No booking or credit card fees!</li>
                        </ul>

                        <p
                            style={{
                                fontSize: "13px",
                                border: "1px solid #008009",
                                borderRadius: "5px",
                                color: "#008009",
                                marginTop: "10px",
                                padding: "5px 5px 6px 5px",
                            }}
                        >
                            No credit card needed!
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <hr className="my-4"/>
        </div>
    );
}

export default AvailabilityViewSection;
