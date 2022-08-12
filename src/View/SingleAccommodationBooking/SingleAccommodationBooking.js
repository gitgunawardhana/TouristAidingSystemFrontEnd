import React from "react";
import Footer from "../../Component/Footer/Footer";
import NavbarWithOutLi from "../../Component/Navbar/NavbarWithOutLi";
import HeadingCompo from "../../Component/SingleAccommodationBooking/HedingCompo/HedingCompo";
import BookingDetailsComp from "../../Component/SingleAccommodationBooking/BookingDetailsComp/BookingDeatilsComp";
import HotelDetailsComp from "../../Component/SingleAccommodationBooking/HotelDetailsComp/HotelDetailsComp";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import UserDetailsComp from "../../Component/SingleAccommodationBooking/UserDetailsComp/UserDetailsComp";
import "./SingleAccommodationBooking.css"

function SingleAccommodationBooking() {
    return (
        <>
            <NavbarWithOutLi/>
            <HeadingCompo/>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Item className="item-margin">
                        <BookingDetailsComp />
                    </Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item className="item-margin">
                        <HotelDetailsComp/>
                        <UserDetailsComp/>

                    </Item>
                </Grid>
            </Grid>






            <Footer/>
        </>

    );
}

export default SingleAccommodationBooking;
