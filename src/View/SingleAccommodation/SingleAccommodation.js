import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import AccommodationImagesSection
    from "../../Component/SingleAccommodation/AccommodationImagesSection/AccommodationImagesSection";
import AvailabilityViewSection
    from "../../Component/SingleAccommodation/AvailabilityViewSection/AvailabilityViewSection";
import MapViewSection from "../../Component/SingleAccommodation/MapViewSection/MapViewSection";
import NavigateButtons from "../../Component/SingleAccommodation/NavigateButtons/NavigateButtons";
import "./SingleAccommodation.css";
import axios from "axios";
import Address from "../../Assets/SingleAccommodation/address2.png";
import {useLocation} from "react-router";

function SingleAccommodation() {

    const location = useLocation()
    const {filterData} = location.state;

    let id = useParams().id;

    const [checkInDate, setCheckInDate] = useState(filterData.checkInDate);
    const [checkOutDate, setCheckOutDate] = useState(filterData.checkOutDate);
    const [noOfPeople, setNoOfPeople] = useState(filterData.noOfPeople);
    const [noOfRooms, setNoOfRooms] = useState(filterData.noOfRooms);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        loadAccommodation();
    }, []);

    const [accommodationDetails, setAccommodationDetails] = useState(null);

    const loadAccommodation = () => {
        axios.get("http://localhost:8080/public-user/accommodation/" + id)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.body)
                    setAccommodationDetails(res.data.body);
                }
            })
    }

    return (
        <>
            <Navbar/>
            {accommodationDetails != null ?
                <div className="accommodation-filter-main-section">
                    <Grid container spacing={1}>
                        <div className="row">
                            <div className="col-lg-3 col-md-12 shadow pt-2 pb-4 pl-4 pr-4">
                                <div>
                                    <div className="filtered-location-name cst-head-name-acco">
                                        {accommodationDetails.name}
                                    </div>
                                    <div className="filtered-location-address cst-filtered-location-address">
                                        <img src={Address} alt="Address"/>
                                        {accommodationDetails.addressLine1 + " " + accommodationDetails.addressLine2 + " " + accommodationDetails.city}
                                    </div>
                                    <div className="dsc-abt-accommodation">
                                        <br/>
                                        <p
                                            style={{
                                                textAlign: "justify",
                                                color: "#787878",
                                            }}
                                        >
                                            {accommodationDetails.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                                <NavigateButtons/>
                                <AccommodationImagesSection pictures={accommodationDetails.pictures}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid container spacing={0}>
                        <div>
                            <div className="single-accommo-section2 mt-5" id="section2">
                                <hr className="my-4"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid container spacing={0}>
                        <div className="single-accommo-section3 location-section">
                            <MapViewSection></MapViewSection>
                        </div>
                    </Grid>
                    <Grid container spacing={0}>
                        <div className="single-accommo-section4 availability-section">
                            <AvailabilityViewSection
                                checkInDate={checkInDate}
                                checkOutDate={checkOutDate}
                                noOfPeople={noOfPeople}
                                noOfRooms={noOfRooms}
                                accommodationId={id}
                            />
                        </div>
                    </Grid>
                </div>
                : null
            }

            <Footer/>
        </>
    );
}

export default SingleAccommodation;
