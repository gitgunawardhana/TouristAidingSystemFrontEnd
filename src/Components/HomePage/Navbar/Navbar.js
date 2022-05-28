import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars" style={{ color: "#fff" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="navi-item">
                <a className="navi-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="navi-item">
                <a className="navi-link" href="/tripplanner">
                  Trip Planner
                </a>
              </li>
              <li className="navi-item">
                <a className="navi-link" href="/location">
                  Location
                </a>
              </li>
              <li className="navi-item">
                <a className="navi-link" href="/accommodation">
                  Accommodation
                </a>
              </li>
              <li className="navi-item">
                <a className="navi-link" href="/vehicle">
                  Vehicle
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
