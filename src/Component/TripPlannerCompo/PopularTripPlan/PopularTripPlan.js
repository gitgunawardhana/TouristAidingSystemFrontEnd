import React from "react";
import BtnCard from "./BtnCard/BtnCard";
import "./PopularTripPlan.css";

function PopularTripPlan(props) {
  return (
    <div>
      <div className="container-fluid ptp-content">
        <div className="container-md">
          <h2
            style={{
              color: "black",
              paddingTop: "50px",
              fontSize: "28px",
              fontWeight: "500",
            }}
          >
            Popular Trip Plan
          </h2>
        </div>
        <BtnCard onClick={props.onClick} endP={2}></BtnCard>
        <BtnCard onClick={props.onClick} startP={2}></BtnCard>
      </div>
    </div>
  );
}

export default PopularTripPlan;
