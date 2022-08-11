import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import AccommodationImagesSection from "../../Component/SingleAccommodation/AccommodationImagesSection/AccommodationImagesSection";
import AvailabilityViewSection from "../../Component/SingleAccommodation/AvailabilityViewSection/AvailabilityViewSection";
import BottomDescriptionSection from "../../Component/SingleAccommodation/BottomDescriptionSection/BottomDescriptionSection";
import MapViewSection from "../../Component/SingleAccommodation/MapViewSection/MapViewSection";
import NavigateButtons from "../../Component/SingleAccommodation/NavigateButtons/NavigateButtons";
import SingleAccommodationDesc from "../../Component/SingleAccommodation/SingleAccommodationDesc/SingleAccommodationDesc";
import "./SingleAccommodation.css";

function SingleAccommodation() {
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <div className="accommodation-filter-main-section">
        <Grid container spacing={1}>
          <div className="row">
            <div className="col-lg-3 col-md-12 shadow pt-2 pb-4 pl-4 pr-4">
              <SingleAccommodationDesc name={name}></SingleAccommodationDesc>
            </div>
            <div className="col-lg-9 col-md-12">
              <NavigateButtons />
              <AccommodationImagesSection />
            </div>
          </div>
        </Grid>
        <Grid container spacing={0}>
          <BottomDescriptionSection></BottomDescriptionSection>
        </Grid>
        <Grid container spacing={0}>
          <div className="single-accommo-section3 location-section">
            <MapViewSection></MapViewSection>
          </div>
        </Grid>
        <Grid container spacing={0}>
          <div className="single-accommo-section4 availability-section">
            <AvailabilityViewSection></AvailabilityViewSection>
          </div>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default SingleAccommodation;
