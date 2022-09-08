import React, {useEffect, useState} from "react";
import Footer from "../../Component/Footer/Footer";
import NavbarWithOutLi from "../../Component/Navbar/NavbarWithOutLi";
import HeadingCompo from "../../Component/SingleAccommodationBooking/HedingCompo/HedingCompo";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import UserDetailsComp from "../../Component/SingleAccommodationBooking/UserDetailsComp/UserDetailsComp";
import "./SingleAccommodationBooking.css"
import CompleteBookingBtnComp
    from "../../Component/SingleAccommodationBooking/CompleteBookingBtnComp/CompleteBookingBtnComp";
import {useLocation} from "react-router";
import axios from "axios";
import Address from "../../Assets/AccommodationFacilityIcons/address.png";

function SingleAccommodationBooking() {

    const {state} = useLocation();

    useEffect(() => {
        loadDetails();
    }, []);

    const [viewData, setViewData] = useState(null);
    const loadDetails = () => {
        const data = {
            accommodationId: state.accommodationId,
            selectedRoomPackages: state.selectedPackages
        }
        axios.post("http://localhost:8080/public-user/accommodation/package/reserve/view", data)
            .then(res => {
                if (res.data.success) {
                    setViewData(res.data.body);
                }
            })
    }

    return (
        <>
            <NavbarWithOutLi/>
            {viewData != null ?
                <div>
                    <HeadingCompo/>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Item className="item-margin">
                                <div className="booking-details-section">
                                    <div className="booking-details-div">
                                        <p className="booking-details-heading ">Your booking details</p>
                                        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 3, md: 4}}>
                                            <Grid item xs={5}>
                                                <Item>
                                                    <p className="check-in padding-bot">
                                                        Check-In
                                                    </p>
                                                    <p className="check-in-day padding-bot">
                                                        {state.checkInDate.toDateString()}
                                                    </p>
                                                    <p className="check-in-time padding-bot">
                                                    </p>
                                                </Item>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div className="vr vertical-rule"></div>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Item>
                                                    <p className="check-in padding-bot">
                                                        Check-out
                                                    </p>
                                                    <p className="check-in-day padding-bot">
                                                        {state.checkOutDate.toDateString()}
                                                    </p>
                                                    <p className="check-in-time padding-bot">

                                                    </p>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                        <div>
                                            <p className="total-day">
                                                Total days
                                                : {Math.round((state.checkOutDate - state.checkInDate) / (1000 * 60 * 60 * 24))} Days
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="price-com-div">
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <Item>
                                                <p className="price-para">
                                                    Price
                                                </p>
                                                <p>
                                                    (for {Math.round((state.checkOutDate - state.checkInDate) / (1000 * 60 * 60 * 24))} days)
                                                </p>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Item>
                                                <p className="price-para">
                                                    LKR {state.totalPrice}.00
                                                </p>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="payment-com-div">

                                    <p className="booking-details-heading ">Selected Room Details</p>
                                    {viewData.selectedRooms.map(sr => (
                                        <p className="payment-para">
                                            {sr.numberOfReservedRooms} X {sr.roomName}
                                            <br/>
                                            <span className="payment-price">Rs. {sr.price}.00</span>
                                            <br/>
                                            <span className="payment-discount">{sr.discount * 100}% Off</span>
                                            <br/>
                                            <span
                                                className="payment-discounted-price">Rs. {sr.price * (1 - sr.discount)}.00</span>
                                        </p>
                                    ))}
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <Item className="item-margin">
                                <div className="hotel-details-comp-div">
                                    <div className="grid-div">
                                        <Grid container spacing={0}>
                                            <Grid item xs={6} md={4}>
                                                <Item>
                                                    <img src={viewData.accommodationImage} alt="" className="hotel-pic"
                                                         width="100%"
                                                         height="250px"/>

                                                </Item>
                                            </Grid>
                                            <Grid className="filtered-location-details grid-div-mag" item xs={6}>
                                                <div className="filtered-location-name">
                                                    {viewData.accommodationName}
                                                </div>
                                                <div className="filtered-location-address">
                                                    <img src={Address} alt="Address"/>
                                                    {viewData.accommodationAddress}
                                                </div>
                                                <br/>
                                                <div className="filtered-location-description">
                                                    {viewData.description}
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <UserDetailsComp/>
                                <CompleteBookingBtnComp/>

                            </Item>
                        </Grid>
                    </Grid>
                </div>
                : null
            }
            <Footer/>
        </>

    );
}

export default SingleAccommodationBooking;
