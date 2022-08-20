import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Accommodation from "../../Assets/Accommodation.png";
import Calculator from "../../Assets/Calculator.png";
import Date from "../../Assets/Date.png";
import Location from "../../Assets/Location.png";
import Placeholder from "../../Assets/Placeholder.png";
import Trip_Planner from "../../Assets/Trip_Planner.png";
import Vehicle from "../../Assets/Vehicle.png";
import "./ButtonBar.css";

function ButtonBar() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="buttonBar buttonBar1"
        style={{ marginTop: "150px" }}
      >
        <div className="button" id="button1">
          <div className="button-icon">
            <img src={Trip_Planner} alt="" />
            <h6>
              TRIP<br></br>PLANNER
            </h6>
          </div>
        </div>
        <div className="button" id="button2">
          <div className="button-icon">
            <img src={Vehicle} alt="" />
            <h6>
              VEHICLE<br></br>RESERVATION
            </h6>
          </div>
        </div>
        <div className="button" id="button3">
          <div className="button-icon">
            <img src={Accommodation} alt="" />
            <h6>
              ACCOMMODATION<br></br>RESERVATION
            </h6>
          </div>
        </div>
        <div className="button" id="button4">
          <div className="button-icon">
            <img src={Location} alt="" />
            <h6>
              LOCATION<br></br>BROWSING
            </h6>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="buttonBar buttonBar2">
        <div className="button" id="button1">
          <div className="button-icon">
            <img src={Placeholder} alt="" />
            <h6>
              Location Based<br></br>Planning
            </h6>
          </div>
        </div>
        <div className="button" id="button2">
          <div className="button-icon">
            <img src={Calculator} alt="" />
            <h6>
              Budget Based<br></br>Planning
            </h6>
          </div>
        </div>
        <div className="button" id="button3">
          <div className="button-icon">
            <img src={Date} alt="" />
            <h6>
              Date Based<br></br>Planning
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonBar;
