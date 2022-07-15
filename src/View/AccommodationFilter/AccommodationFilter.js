import React, {useEffect} from "react";
import FilterSection from "../../Component/AccommodationFilter/FilterSection/FilterSection";
import Navbar from "../../Component/Navbar/Navbar";
import "./AccommodationFilter.css";
import Grid from "@mui/material/Grid";
import SortingSection from "../../Component/AccommodationFilter/SortingSection/SortingSection";
import FilteredLocationSection
    from "../../Component/AccommodationFilter/FilteredLocationSection/FilteredLocationSection";

function AccommodationFilter() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <>
            <Navbar/>
            <div className="accommodation-filter-main-section">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <FilterSection/>
                    </Grid>
                    <Grid item xs={9}>
                        <SortingSection/>
                        <FilteredLocationSection/>
                    </Grid>
                </Grid>

            </div>
        </>
    );
}

export default AccommodationFilter;