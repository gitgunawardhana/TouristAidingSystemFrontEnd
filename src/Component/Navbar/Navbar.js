import { Link, useLocation } from "react-router-dom";
import ROADSIGN from "../../Assets/ROADSIGNnavbar.png";
import "./Navbar.css";

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
                        currentPath.includes("tripplanners")
                          ? "nav-link item-color navi-link active"
                          : "nav-link item-color navi-link"
                      }
                      to="/tripplanners"
                    >
                      Trip Planner
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        currentPath.includes("location")
                          ? "nav-link item-color navi-link active"
                          : "nav-link item-color navi-link"
                      }
                      to="/locations"
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
            <div className="dropdown mr-3">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded profile-pic"
                  height="50"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/accountSettings">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Notifications --> */}
            <div className="notification-bel">
              <div className="dropdown">
                <Link
                  className="text-reset me-3 dropdown-toggle align-items-center hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Some news
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another news
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
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
