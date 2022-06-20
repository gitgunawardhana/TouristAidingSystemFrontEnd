import { Link } from "react-router-dom";
import ROADSIGN from "../../Assets/ROADSIGN.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="pa">
      <div className="customize-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
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
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy" />
            </Link>
            <br />

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
                  <Link className="nav-link item-color" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link item-color" to="/tripplanners">
                    Trip Planner
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link item-color" to="/locations">
                    Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link item-color" to="/accommodations">
                    Accommodation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link item-color" to="/vehicles">
                    Vehicle
                  </Link>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
              {/* <!-- Icon --> */}
              {/*<Link className="text-reset me-3" to="#">*/}
              {/*  <i className="fas fa-shopping-cart"></i>*/}
              {/*</a>*/}

              {/* <!-- Notifications --> */}
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
              {/* <!-- Avatar --> */}
              <div className="dropdown">
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
                    className="rounded-circle"
                    height="25"
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
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
