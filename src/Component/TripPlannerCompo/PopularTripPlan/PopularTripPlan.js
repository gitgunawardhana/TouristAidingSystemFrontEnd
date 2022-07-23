import React from "react";
import BtnCard from "./BtnCard/BtnCard";
import "./PopularTripPlan.css";

function PopularTripPlan() {
  return (
    <div>
      <div className="container-fluid ptp-content">
        <div className="container-md">
          <h2 style={{ color: "black", paddingTop: "50px", fontSize: "28px" }}>
            Popular Trip Plan
          </h2>
        </div>
        <BtnCard></BtnCard>
      </div>
    </div>
  );
}

export default PopularTripPlan;
