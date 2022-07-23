import React from "react";
//import CarData from './carData.js'
import { Container, Row, Col } from "reactstrap";
import Carimage from "../../Assets/Cars/Large.jpg";
import Navbar from "../../Component/Navbar/Navbar.js";
import BookingForm from "../../Component/Vehicle_Payment_Booking_Form/BookingForm.js";
import PaymentMethod from "../../Component/Vehicle_Payment_Payment_Method/PaymentMethod.js";
import Footer from "../../Component/Footer/Footer.js";
import './CarDetails.css'
const CarDetails = () => {
    return (
        <>
            <div><Navbar /></div>

            <section className="Car_details_section">

                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={Carimage} alt="" className="w-100" />
                        </Col>
                        <Col lg="6">
                            <div className="car_info">
                                <h2 className="Car_Details_Header" style={{ color: "#000d6b" }}>This is selected Car</h2>
                                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent_price fw-bold fs-4">Rs.6000/Day</h6>
                                    <span className="d-flex align-items-center gap-2">
                                        <span style={{ color: "#f9a826" }}>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        112
                                    </span>
                                </div>
                                <p className="section_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi, exercitationem libero eligendi qui veritatis soluta ex alias repellat accusamus.</p>
                                <div className="d-flex align-items-center mt-3" style={{ columnGap: '4rem' }}>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-roadster-fill" style={{ color: '#f9a826' }}></i>Toyota
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-settings-2-line" style={{ color: '#f9a826' }}></i>Automatic
                                    </span>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-timer-line" style={{ color: '#f9a826' }}></i>{" "}Speed
                                    </span>

                                </div>
                                <div className="d-flex align-items-center mt-3" style={{ columnGap: '2.8rem' }}>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-map-pin-line" style={{ color: '#f9a826' }}></i>gps
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-wheelchair-line" style={{ color: '#f9a826' }}>{" "}</i>Seattype
                                    </span>
                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-building-3-line" style={{ color: '#f9a826' }}></i>{" "}Brand
                                    </span>

                                </div>
                            </div>
                        </Col>
                        <Col lg='7' className="mt-5">
                            <div className="booking-info mt-5">
                                <h4 className="mb-4 fw-bold">Booking Information</h4>
                                <BookingForm />

                            </div>
                        </Col>
                        <Col lg='5' className="mt-5">
                            <div className="payment-info mt-5">
                                <h4 className="mb-4 fw-bold">Payment Information</h4>
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
