import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePageNavbar.css";

function NavbarHome() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars" style={{ color: "#fff" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="navi-item">
                <Link className="navi-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="navi-item">
                <Link className="navi-link" to="/tripplanners">
                  Trip Planner
                </Link>
              </li>
              <li className="navi-item">
                <Link className="navi-link" to="/locations">
                  Location
                </Link>
              </li>
              <li className="navi-item">
                <Link className="navi-link" to="/accommodations">
                  Accommodation
                </Link>
              </li>
              <li className="navi-item">
                <Link className="navi-link" to="/vehicles">
                  Vehicle
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarHome;
