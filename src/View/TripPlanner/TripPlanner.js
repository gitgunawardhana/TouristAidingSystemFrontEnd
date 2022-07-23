import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../../Component/TripPlannerCompo/Header/Header";
import PopularTripPlan from "../../Component/TripPlannerCompo/PopularTripPlan/PopularTripPlan";
import "./TripPlanner.css";

function TripPlanner() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <PopularTripPlan></PopularTripPlan>
    </div>
  );
}

export default TripPlanner;
