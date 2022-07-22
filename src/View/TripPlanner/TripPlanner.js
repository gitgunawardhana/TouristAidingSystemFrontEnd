import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import TripPlannerHeading from "../../Component/TripPlannerComponent/Heding/TripPlannerHeading/TripPlannerHeading";

function TripPlanner() {
    return (
        <>
            <Navbar/>
            <TripPlannerHeading/>
            <Footer/>
        </>

    );
}

export default TripPlanner;