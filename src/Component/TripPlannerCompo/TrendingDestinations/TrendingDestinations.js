import React from "react";
import "./TrendingDestinations.css";
import TrendingDestinationsCard from "./TrendingDestinationsCard/TrendingDestinationsCard";

function PopularTripPlan() {
  return (
    <div>
      <div className="container-fluid ptp-content">
        <div className="container-xl">
          <h2
            style={{
              color: "black",
              paddingTop: "50px",
              fontSize: "28px",
              fontWeight: "500",
            }}
          >
            Easy to use, Easy to browse
          </h2>
        </div>
        <div className="trip-planner-easyuse-section">
          <div className="trip-planner-easyuse-section-1">
            <TrendingDestinationsCard
              startP={0}
              endP={2}
            ></TrendingDestinationsCard>
          </div>
          <div className="trip-planner-easyuse-section-2">
            <TrendingDestinationsCard
              startP={2}
              endP={4}
            ></TrendingDestinationsCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularTripPlan;
