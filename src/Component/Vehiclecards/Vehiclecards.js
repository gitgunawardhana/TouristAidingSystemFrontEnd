import React from "react";
import { Col } from "react-bootstrap";
import './Vehiclecards.css';

const Vehiclecards = ({ title, imgUrl }) => {
    return <><Col sm={6} md={3}>
        <div className="car-imgbx">
            <img src={imgUrl} />
            <div className="car-txt">
                <h4 style={{ textAlign: "center" }}>{title}</h4>
            </div>
        </div></Col></>
};

export default Vehiclecards;
