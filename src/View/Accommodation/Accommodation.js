import React, {useEffect} from "react";
import Navbar from "../../Component/Navbar/Navbar";
import "./Accommodation.css";
import SearchForm from "../../Component/Accommodation/SearchForm/SearchForm";
import AccommodationTypeSlideShow
    from "../../Component/Accommodation/AccommodationTypeSlideShow/AccommodationTypeSlideShow";
import PopularLocations from "../../Component/Accommodation/PopularLocations/PopularLocations";
import RecommendedAccommodations
    from "../../Component/Accommodation/RecommendedAccommodations/RecommendedAccommodations";

function Accommodation() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <>
            <Navbar/>
            <SearchForm/>
            <AccommodationTypeSlideShow/>
            <PopularLocations/>
            <RecommendedAccommodations/>
        </>
    );
}

export default Accommodation;