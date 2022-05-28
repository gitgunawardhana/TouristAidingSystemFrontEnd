import React from "react";
import ROADSIGN from "../../../Assets/ROADSIGN.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
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
            <i className="fas fa-bars"></i>
          </button>



              <a className="navbar-brand mt-2 mt-lg-0" href="/">
                <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy" />
              </a>
          <br/>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*<a className="navbar-brand mt-2 mt-lg-0" href="/">*/}
            {/*  <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy" />*/}
            {/*</a>*/}
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link item-color" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link item-color" href="/tripplanner">
                  Trip Planner
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link item-color" href="/location">
                  Location
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link item-color" href="/accommodation">
                  Accommodation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link item-color" href="/vehicle">
                  Vehicle
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            {/*<a className="text-reset me-3" href="#">*/}
            {/*  <i className="fas fa-shopping-cart"></i>*/}
            {/*</a>*/}

            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/accountSettings">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}

export default Navbar;
