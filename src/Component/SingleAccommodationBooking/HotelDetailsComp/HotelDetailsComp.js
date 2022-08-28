import React from "react";
import "./HotelDetailsComp.css"
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import marinoBeach from "../../../Assets/FilteredAccommodations/MandarinaColombo/1.jpg"

import Address from "../../../Assets/AccommodationFacilityIcons/address.png";
import FreeCancellation from "../../../Assets/AccommodationFacilityIcons/free-cancellation.png";
import PayAtProperty from "../../../Assets/AccommodationFacilityIcons/pay-at-property.png";


function HotelDetailsComp() {
    const hotelDetails = [
        {
            name: "Granbell Hotel Colombo",
            img: marinoBeach,
            locations: "Kollupitiya, Colombo",
            size: "24",
            bed: "One extra-large double bed",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium \n" +
                "doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore \n" +
                "veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
            freeCancellation: true,
            payAtProperty: true
        },
    ]
    return (
        <div className="hotel-details-comp-div">
            {hotelDetails.map((item) =>
                <div className="grid-div">
                    <Grid container spacing={0}>
                        <Grid item xs={6} md={4}>
                            <Item>
                                <img src={item.img} alt="" className="hotel-pic" width="100%" height="250px"/>

                            </Item>
                        </Grid>
                        <Grid className="filtered-location-details grid-div-mag" item xs={6}>
                            <div className="filtered-location-name">
                                {item.name}
                            </div>
                            <div className="filtered-location-address">
                                <img src={Address} alt="Address"/>
                                {item.locations}
                            </div>

                            <div className="filtered-location-size">
                                Size - {item.size} sq feet
                            </div>
                            <div className="filtered-location-bed">
                                {item.bed}
                            </div>
                            <div className="filtered-location-description">
                                {item.description}
                            </div>
                            <div className="filtered-location-package-facilities">
                                <div
                                    className={item.freeCancellation ?
                                        "filtered-location-package-facility free-cancellation"
                                        : "filtered-location-package-facility free-cancellation hidden"}>
                                    <img src={FreeCancellation} alt="Free Cancellation"/>
                                    FREE CANCELLATION
                                </div>
                                <div className={item.payAtProperty ?
                                    "filtered-location-package-facility pay-at-property"
                                    : "filtered-location-package-facility pay-at-property hidden"}>
                                    <img src={PayAtProperty} alt="Pay at Property"/>
                                    PAY AT THE PROPERTY
                                </div>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            )}


        </div>
    );
}

export default HotelDetailsComp;