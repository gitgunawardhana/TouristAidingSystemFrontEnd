import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ROADSIGN from "../../Assets/ROADSIGN.png";
import useMediaQuery from "../useMediaQuery";
import "./Footer.css";

function Footer() {
  const matches = useMediaQuery("(min-width: 887px)");

  return (
    <>
      <div className="footer">
        <div className="footer-content footer-log">
          <Link to="/">
            <img src={ROADSIGN} alt="ROADSIGN" />
          </Link>
        </div>
        <div className="footer-content contact-us">
          <p>info@roadsign.lk</p>
          <p>07123456789</p>
          <p>01134567898</p>
          <p>102/5, Test Road, Test City, Colombo 10</p>
        </div>
        <div className="footer-content footer-nav-link">
          <p>
            <Link to="/" className="footer-navi-link">
              Home
            </Link>
          </p>
          <p>
            <Link to="/trip-planners" className="footer-navi-link">
              Trip Planner
            </Link>
          </p>
          <p>
            <Link to="/location" className="footer-navi-link">
              Location
            </Link>
          </p>
          <p>
            <Link to="/accommodations" className="footer-navi-link">
              Accommodation
            </Link>
          </p>
          <p>
            <Link to="/vehicles" className="footer-navi-link">
              Vehicle
            </Link>
          </p>
        </div>
        {matches ? (
          ""
        ) : (
          <hr
            style={{
              color: " #004145",
              backgroundColor: "#004145",
              height: 2,
              width: "90%",
            }}
          />
        )}
        <div className="footer-content social-media-link">
          <Link to="#" className="icon-social-media">
            <i class="FaFacebookSquare">
              <FaFacebookSquare
                size={18}
                className="icon"
                onMouseOver={({ target }) => (target.style.color = "#4267B2")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </i>
          </Link>
          <Link to="#" className="icon-social-media">
            <i class="FaYoutube">
              <FaYoutube
                size={18}
                className="icon"
                onMouseOver={({ target }) => (target.style.color = "#FF0000 ")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </i>
          </Link>
          <Link to="#" className="icon-social-media">
            <i class="FaInstagramSquare">
              <FaInstagramSquare
                size={18}
                className="icon"
                onMouseOver={({ target }) => (target.style.color = "#fb3958")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </i>
          </Link>
          <Link to="#" className="icon-social-media">
            <i class="FaLinkedin">
              <FaLinkedin
                size={18}
                className="icon"
                onMouseOver={({ target }) => (target.style.color = "#0072b1 ")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </i>
          </Link>
          <Link to="#" className="icon-social-media">
            <i class="FaTwitter">
              <FaTwitter
                size={18}
                className="icon"
                onMouseOver={({ target }) => (target.style.color = "#00acee ")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
            </i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
