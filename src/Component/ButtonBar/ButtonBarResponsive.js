import Accommodation from "../../Assets/Accommodation.png";
import Calculator from "../../Assets/Calculator.png";
import Date from "../../Assets/Date.png";
import Location from "../../Assets/Location.png";
import Placeholder from "../../Assets/Placeholder.png";
import Trip_Planner from "../../Assets/Trip_Planner.png";
import Vehicle from "../../Assets/Vehicle.png";
import "./ButtonBarResponsive.css";

function ButtonBar() {
  return (
    <>
      <div className="buttonBar buttonBar1">
        <div className="button" id="button1">
          <div className="button-icon">
            <img src={Trip_Planner} alt="" />
            <h5>
              TRIP<br></br>PLANNER
            </h5>
          </div>
        </div>
        <div className="button" id="button2">
          <div className="button-icon">
            <img src={Vehicle} alt="" />
            <h5>
              VEHICLE<br></br>RESERVATION
            </h5>
          </div>
        </div>
        <div className="button" id="button3">
          <div className="button-icon">
            <img src={Accommodation} alt="" />
            <h5>
              ACCOMMODATION<br></br>RESERVATION
            </h5>
          </div>
        </div>
        <div className="button" id="button4">
          <div className="button-icon">
            <img src={Location} alt="" />
            <h5>
              LOCATION<br></br>BROWSING
            </h5>
          </div>
        </div>
        <div className="button" id="button1">
          <div className="button-icon">
            <img src={Placeholder} alt="" />
            <h5>
              Location Based<br></br>Planning
            </h5>
          </div>
        </div>
        <div className="button" id="button2">
          <div className="button-icon">
            <img src={Calculator} alt="" />
            <h5>
              Budget Based<br></br>Planning
            </h5>
          </div>
        </div>
        <div className="button" id="button3">
          <div className="button-icon">
            <img src={Date} alt="" />
            <h5>
              Date Based<br></br>Planning
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonBar;
