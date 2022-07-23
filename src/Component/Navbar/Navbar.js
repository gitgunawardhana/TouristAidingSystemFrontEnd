import { Link, useLocation } from "react-router-dom";
import profile from "../../Assets/Profile/Profile-1.jpg";
import ROADSIGN from "../../Assets/ROADSIGNnavbar.png";
import "./Navbar.css";

import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navigationBar">
      <div className="customize-navbar bg-color">
        <div className="nav-logo">
          <div className="logo">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy" />
            </Link>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light nav-custom">
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
                <i className="fas fa-bars"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/*<Link className="navbar-brand mt-2 mt-lg-0" to="/">*/}
                {/*  <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy" />*/}
                {/*</a>*/}
                {/* <!-- Left links --> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link item-color navi-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        currentPath.includes("trip-planners")
                          ? "nav-link item-color navi-link active"
                          : "nav-link item-color navi-link"
                      }
                      to="/trip-planners"
                    >
                      Trip Planner
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        currentPath.includes("location") ||
                        currentPath.includes("attraction")
                          ? "nav-link item-color navi-link active"
                          : "nav-link item-color navi-link"
                      }
                      to="/location"
                    >
                      Location
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        currentPath.includes("accommodations")
                          ? "nav-link item-color navi-link active"
                          : "nav-link item-color navi-link"
                      }
                      to="/accommodations"
                    >
                      Accommodation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        currentPath.includes("vehicles")
                          ? "nav-link item-color navi-link active"
                          : "nav-link item-color navi-link"
                      }
                      to="/vehicles"
                    >
                      Vehicle
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div className="sign-out-mobile-view">
                      <button type="button" class="text-center btn-sign-out">
                        Sign out
                      </button>
                    </div>
                  </li>
                </ul>
                {/* <!-- Left links --> */}
              </div>
              {/* <!-- Collapsible wrapper --> */}
            </div>
          </nav>
        </div>
        <div className="notify">
          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            {/*<Link className="text-reset me-3" to="#">*/}
            {/*  <i className="fas fa-shopping-cart"></i>*/}
            {/*</a>*/}

            {/* <!-- Avatar --> */}
            <div className="dropdown mr-3 col-lg-6">
              <img
                src={profile}
                className="rounded profile-pic profile-icon"
                height="50"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
              <div className="dropdown-div ">
                <NavDropdown id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/profile" className="nav-item-link">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/paymentMethod" className="nav-item-link">
                      Payment Methods
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/security" className="nav-item-link">
                      Security
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/notificationSettings" className="nav-item-link">
                      Notifications
                    </Link>
                  </NavDropdown.Item>
                  {/*<NavDropdown.Divider/>*/}
                </NavDropdown>
              </div>

              {/*<ul*/}
              {/*  className="dropdown-menu dropdown-menu-end"*/}
              {/*  aria-labelledby="navbarDropdownMenuAvatar"*/}
              {/*>*/}
              {/*  <li>*/}
              {/*    <Link className="dropdown-item" to="#">*/}
              {/*      My profile*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link className="dropdown-item" to="/accountSettings">*/}
              {/*      Settings*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link className="dropdown-item" to="#">*/}
              {/*      Logout*/}
              {/*    </Link>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
            {/* <!-- Notifications --> */}
            <div className="notification-bel">
              <div className="dropdown">
                <Link
                  className="text-reset me-3 dropdown-toggle align-items-center hidden-arrow"
                  to=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="x"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </Link>

                {/*<ul*/}
                {/*  className="dropdown-menu dropdown-menu-end"*/}
                {/*  aria-labelledby="navbarDropdownMenuLink"*/}
                {/*>*/}
                {/*  <li>*/}
                {/*    <Link className="dropdown-item" to="#">*/}
                {/*      Some news*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link className="dropdown-item" to="#">*/}
                {/*      Another news*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link className="dropdown-item" to="#">*/}
                {/*      Something else here*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>

          {/* <!-- Right elements --> */}
          <div className="text-center sign-out-pc-view">
            <button type="button" class="text-center btn-sign-out">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
