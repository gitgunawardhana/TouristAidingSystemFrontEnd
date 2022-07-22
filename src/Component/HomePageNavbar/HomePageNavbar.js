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
      <nav
        className="navbar navbar-expand-lg navbar-fixed-top navbar-light"
        style={{ marginTop: "-10px" }}
      >
        <div
          className="container-fluid"
          style={{ width: "max-content", marginLeft: "0px" }}
        >
          <button
            className="navbar-toggler navbar-toggler-home"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars fas-fas-bar" style={{ color: "#fff" }}></i>
          </button>
          <div
            className="collapse navbar-collapse navbar-collapse-home"
            id="navbarSupportedContent"
            style={{ marginBottom: "70px", float: "left", left: "0" }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="navi-link nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi-link nav-link" to="/tripplanners">
                  Trip Planner
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi-link nav-link" to="/location">
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi-link nav-link" to="/accommodations">
                  Accommodation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navi-link nav-link" to="/vehicles">
                  Vehicle
                </Link>
              </li>
            </ul>

          </div>

        </div>

          <div className="btn-2-div">
            <Link to="/createAccount">
              <button className="text-center btn-sign-out btn-reg">Register</button>
            </Link>
            <Link to="/signin">
              <button className="text-center btn-sign-out">Sign In</button>
            </Link>
          </div>

      </nav>
    </>
  );
}

export default NavbarHome;
