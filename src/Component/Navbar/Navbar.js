import {Link} from "react-router-dom";
import ROADSIGN from "../../Assets/ROADSIGN.png";
import "./Navbar.css";


function Navbar() {
    return (
        <div className="main-navbar">
            <div className="customize-navbar ">
                <nav className="navbar navbar-expand-lg navbar-light bg-color">
                    <div className="container-fluid">
                        <button

                            class="navbar-toggler"
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
                            <img src={ROADSIGN} height="15" alt="MDB Logo" loading="lazy"/>
                        </Link>
                        <br/>

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
                                <a
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

                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end ul-item"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <div className="drop-item">
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
                                    </div>
                                </ul>
                            </div>

                            {/* <!-- Avatar --> */}
                            <div className="dropdown new-div" >
                                <a
                                    className="tdropdown-toggle d-flex align-items-center hidden-arrow"
                                    to="#"
                                    id="navbarDropdownMenuLink"
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
                                </a>



                                    <ul
                                        className="dropdown-menu dropdown-menu-end ul-item"
                                        aria-labelledby="navbarDropdownMenuAvatar"
                                    >
                                        <div className="drop-item">
                                            <li>
                                                <Link className="dropdown-item" to="/profile">
                                                    My profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/accountSetting">
                                                    Settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="logout">
                                                    Logout
                                                </Link>
                                            </li>
                                        </div>
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