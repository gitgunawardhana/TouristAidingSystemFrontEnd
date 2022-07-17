import React, {useEffect} from "react";
import "./RecommendedAccommodations.css";
import {Grid} from "@mui/material";
import Rating from "@mui/material/Rating";
import Aos from "aos";
import TheGoldenCrownHotel from "../../../Assets/RecommendedAccommodations/TheGoldenCrownHotel.png";
import LeGrandGalleByAsiaLeisure from "../../../Assets/RecommendedAccommodations/LeGrandGalleByAsiaLeisure.png";
import GranbellHotelColombo from "../../../Assets/RecommendedAccommodations/GranbellHotelColombo.png";
import EkhoElla from "../../../Assets/RecommendedAccommodations/EkhoElla.png";

function RecommendedAccommodations() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    const locations = [
        {
            name: "The Golden Crown Hotel",
            img: TheGoldenCrownHotel,
            address: "Kandy",
            rating: 9.2,
            ratingMessage: "Excellent",
            ratingCount: 689,
            discount: 0.5,
            price: 31800.00
        },
        {
            name: "Le Grand Galle By Asia Leisure",
            img: LeGrandGalleByAsiaLeisure,
            address: "Galle",
            rating: 9.1,
            ratingMessage: "Excellent",
            ratingCount: 575,
            discount: 0.55,
            price: 196114.00
        },
        {
            name: "Granbell Hotel Colombo",
            img: GranbellHotelColombo,
            address: "Colombo",
            rating: 9.2,
            ratingMessage: "Excellent",
            ratingCount: 345,
            discount: 0.2,
            price: 36135.00
        },
        {
            name: "EKHO Ella",
            img: EkhoElla,
            address: "Ella",
            rating: 8.9,
            ratingMessage: "Faboulous",
            ratingCount: 266,
            discount: 0.3,
            price: 64000.00
        }
    ];
    return (
        <div className="recommended-accommodation-section" data-aos="fade-up">
            <h4>Recommended for Your Next Vacation</h4>
            <Grid container spacing={3}>
                {locations.map((item) => (
                    <Grid item xs={12} sm={6} lg={3}>
                        <div className="recommended-accommodation-single-card">
                            <img className="recommended-image" src={item.img} alt={item.name}/>
                            <div className="recommended-name-address-section">
                                <div className="recommended-name">
                                    {item.name}
                                </div>
                                <div className="recommended-address">
                                    {/*<FaIcons.FaMapPin className="form-icon"/>*/}
                                    {item.address}
                                </div>
                            </div>
                            <div className="recommended-price-rating-section">
                                <Grid container spacing={0}>
                                    <Grid item xs={6}>
                                        <div className="recommended-discount">
                                            {Math.round(item.discount * 100)}% DISCOUNT
                                        </div>
                                        <div className="recommended-price">
                                            Rs.{item.price}.00
                                        </div>
                                        <div className="recommended-discounted-price">
                                            Rs.{Math.round(item.price * (1 - item.discount))}.00
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5}
                                                readOnly/>
                                        <div className="recommended-review-section">
                                            <Grid container spacing={0}>
                                                <Grid item xs={8}>
                                                    <p className="recommended-rating-message">
                                                        {item.ratingMessage}
                                                    </p>
                                                    <p className="recommended-rating-count">
                                                        {item.ratingCount} Reviews
                                                    </p>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <div className="recommended-rating-flag">
                                                        <p className="recommended-rating">
                                                            {/*<FaIcons.FaRegCalendarAlt className="form-icon"/>*/}
                                                            {item.rating}
                                                        </p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <p className="recommended-explore-more">Explore More</p>
        </div>
    );
}

export default RecommendedAccommodations;