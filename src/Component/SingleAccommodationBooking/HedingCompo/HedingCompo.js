import React from "react";
import check from "../../../Assets/AccomodationBook/check.png"
import "./HeadingCompo.css"

function HeadingCompo() {
    return (
        <>
            <div className="single-acc-heading-div">
                <p className="single-acc-heading">Your Details</p>
                <img src={check} alt="Check-img" className="single-acc-heading-img"/>
            </div>



        </>
    );
}

export default HeadingCompo;