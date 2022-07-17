import React, {useEffect} from "react";
import "./PopularLocations.css";
import Aos from "aos";

function PopularLocations() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="location-grid" data-aos="fade-up">
            <table width='100%'>
                <tr>
                    <td rowSpan={2} colSpan={2} className="colombo">
                        <div className="location-name">Colombo</div>
                    </td>
                    <td rowSpan={2} className="location-text">
                        Popular
                        <br/>
                        vacation
                        <br/>
                        spots
                        <br/>
                        with
                        <br/>
                        excellent
                        <br/>
                        accommodations
                    </td>
                    <td colSpan={3} className="nuwara-eliya">
                        <div className="location-name">Nuwara Eliya</div>
                    </td>
                    <td colSpan={3} className="kandy">
                        <div className="location-name">Kandy</div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className="negambo">
                        <div className="location-name">Negambo</div>
                    </td>
                    <td colSpan={3} className="galle">
                        <div className="location-name">Galle</div>
                    </td>
                    <td colSpan={3} className="ella">
                        <div className="location-name">Ella</div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default PopularLocations;