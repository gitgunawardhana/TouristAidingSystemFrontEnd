import Button from "@mui/material/Button";
import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import EasyUseBrowse from "../../Component/TripPlannerCompo/EasyUseBrowse/EasyUseBrowse";
import Header from "../../Component/TripPlannerCompo/Header/Header";
import PopularTripPlan from "../../Component/TripPlannerCompo/PopularTripPlan/PopularTripPlan";
import TrendingDestinationsCard from "../../Component/TripPlannerCompo/TrendingDestinations/TrendingDestinations";
import "./TripPlanner.css";

function TripPlanner() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <PopularTripPlan></PopularTripPlan>
      <div className="container-fluid easy-use-div">
        <EasyUseBrowse></EasyUseBrowse>
      </div>
      <div className="container-fluid trending-destinationsCard-div">
        <TrendingDestinationsCard></TrendingDestinationsCard>
      </div>
      <div className="container text-center" style={{ marginBottom: "50px" }}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#1e3d3eed",
            color: "white",
            borderRadius: "50px",
            width: "150px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "#1e3d3ee5",
              color: "white",
            },
          }}
        >
          Start Planing
        </Button>
      </div>
    </div>
  );
}

export default TripPlanner;
