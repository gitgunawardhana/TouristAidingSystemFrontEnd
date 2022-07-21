import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import FilteredVehicleSection from "../../Component/VehicleFilter/FilteredVehicleSection/FilteredVehicleSection";
import FilterSection from "../../Component/VehicleFilter/FilterSectionVehiclePage/FilterSection";
import SortingSection from "../../Component/VehicleFilter/SortingSectionVehiclePage/SortingSection";
import Navbar from "../../Component/Navbar/Navbar";
import "./Vehicle.css";

function Vehicle1() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <div className="accommodation-filter-main-section">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <FilterSection />
          </Grid>
          <Grid item xs={9}>
            <SortingSection />
            <FilteredVehicleSection />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Vehicle1;
