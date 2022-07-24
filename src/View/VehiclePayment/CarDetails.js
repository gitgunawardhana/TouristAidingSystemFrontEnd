import React, { useEffect } from "react";
//import CarData from './carData.js'
import { Container, Row, Col } from "reactstrap";
import FilteredCars from '../../Assets/Data/CarDataFilter.js'
import Carimage from "../../Assets/Cars/Large.jpg";
import Navbar from "../../Component/Navbar/Navbar.js";
import BookingForm from "../../Component/Vehicle_Payment_Booking_Form/BookingForm.js";
import PaymentMethod from "../../Component/Vehicle_Payment_Payment_Method/PaymentMethod.js";
import './CarDetails.css'
import { useParams } from "react-router-dom";
const CarDetails = () => {
    const { slug } = useParams()
    const singleCarItem = FilteredCars.find(item => item.name == slug);
    return (
        <>
            <div><Navbar /></div>

            <section className="Car_details_section">

                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={singleCarItem.image} alt="" className="w-100" />
                        </Col>
                        <Col lg="6">
                            <div className="car_info">
                                <h2 className="Car_Details_Header" style={{ color: "#00565B" }}>{singleCarItem.name}</h2>
                                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent_price fw-bold fs-4" id="car_price_display">Rs.{singleCarItem.price}/2Days</h6>
                                    <span className="d-flex align-items-center gap-2">
                                        <span style={{ color: "#f9a826" }}>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        ({singleCarItem.rating}){singleCarItem.ratingMessage}
                                    </span>
                                </div>
                                <p className="section_description">{singleCarItem.description}</p>
                                <div className="d-flex align-items-center mt-3" style={{ columnGap: '4rem' }}>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-user-fill" style={{ color: '#00565B' }}></i>{singleCarItem.seats}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-settings-2-line" style={{ color: '#00565B' }}></i>{singleCarItem.Transmission}
                                    </span>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-route-fill" style={{ color: '#00565B' }}></i>{" "}{singleCarItem.Distance}
                                    </span>

                                </div>
                                <div className="d-flex align-items-center mt-3" style={{ columnGap: '2.8rem' }}>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-emotion-2-fill" style={{ color: '#00565B' }}></i>{singleCarItem.Aircon}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-heart-fill" style={{ color: '#00565B' }}>{" "}</i>{singleCarItem.child_seat}
                                    </span>

                                </div>
                            </div>
                        </Col>
                        <Col lg='7' className="mt-5">
                            <div className="booking-info mt-5">
                                <h4 className="mb-4 fw-bold" id="booking_Heading">Booking Information</h4>
                                <BookingForm />

                            </div>
                        </Col>
                        <Col lg='5' className="mt-5">
                            <div className="payment-info mt-5">
                                <h4 className="mb-4 fw-bold" id="payment_info_part">Payment Information</h4>
                                <PaymentMethod />

                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>


        </>
    );
};

export default CarDetails;
