import React from "react";
import Smallcar from '../../Assets/Cars/small.png';
import Mediumcar from '../../Assets/Cars/Medium.png';
import Largecar from '../../Assets/Cars/Large.png';
import Estatecar from '../../Assets/Cars/Estate.png';
import Premiumcar from '../../Assets/Cars/Premium.png';
import Suv from '../../Assets/Cars/suv.png';
import Peoplecar from '../../Assets/Cars/peoplecarrier.png';
import { Container, Col, Row } from "react-bootstrap";
import Vehiclecards from "./Vehiclecards.js";
import './Vehiclecards.css';


const Vehicletypes = () => {
    const cars = [
        {
            title: "Small",
            imgUrl: Smallcar,
        },
        {
            title: "Medium",
            imgUrl: Mediumcar,
        },
        {
            title: "Large",
            imgUrl: Largecar,
        },
        {
            title: "Estate",
            imgUrl: Estatecar,
        },
        {
            title: "Premium",
            imgUrl: Premiumcar,
        },
        {
            title: "Suv",
            imgUrl: Suv,
        },
        {
            title: "People Carrier",
            imgUrl: Peoplecar,
        }
    ]
    return <section className="carsvariants" id="classvariants">
        <Container>
            <h2 id="vehicleheading97">We Provide Different Types of Vehicles</h2>
            <Row>
                <Col>
                    <Row>{
                        cars.map((car, index) => {
                            return (<Vehiclecards key={index} {...car} />)
                        })
                    }</Row></Col>
            </Row>
        </Container>
    </section>;
};

export default Vehicletypes;
