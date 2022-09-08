import React, {useEffect} from "react";
import Address from "../../../Assets/SingleAccommodation/address2.png";
import "./SingleAccommodationDesc.css";
import axios from "axios";

function SingleAccommodationDesc(params) {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        loadAccommodation();
    }, []);


    const loadAccommodation = () => {
        console.log(params.id)
        axios.get("http://localhost:8080/public-user/accommodation/" + params.id)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.body)
                    // setAccommodationDetails(res.data.body);
                }
            })
    }


    // const [accommodationDetails, setAccommodationDetails] = useState();

    const accommodationDetails = {
        name: "Granbell Hotel Colombo",
        address: "Kollupitiya, Colombo",
        facilities: ["FREE PARKING", "PETS ALLOWED", "BREAKFAST", "FREE WIFI"],
        size: 24,
        bed: "One extra-large double bed",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        freeCancellation: true,
        payAtProperty: true,
        view: "SEA",
        rating: 9.2,
        ratingMessage: "EXCEPTIONAL",
        ratingCount: 345,
        discount: 0.2,
        price: 36630.0,
    };

    return (
        <div>
            <div className="filtered-location-name cst-head-name-acco">
                {accommodationDetails.name}
            </div>
            <div className="filtered-location-address cst-filtered-location-address">
                <img src={Address} alt="Address"/>
                {accommodationDetails.address}
                <p
                    className="pl-4"
                    style={{color: "#0068B2", marginTop: "-5px", fontSize: "12px"}}
                >
                    <b>Great location - show map</b>
                </p>
            </div>
            {/*<div className="dsc-abt-accommodation">*/}
            {/*    <p*/}
            {/*        style={{*/}
            {/*            textAlign: "justify",*/}
            {/*            color: "#787878",*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {accommodationDetails[0].description}*/}
            {/*        {accommodationDetails[0].description}*/}
            {/*        {accommodationDetails[0].description}*/}
            {/*        {accommodationDetails[0].description}*/}
            {/*        {accommodationDetails[0].description}*/}
            {/*        {accommodationDetails[0].description}*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
}

export default SingleAccommodationDesc;
