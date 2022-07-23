import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import HeaderImg from "../../../Assets/TripPlannerAssets/Header/HeaderImg.png";
import "./Header.css";

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    classNm: undefined,
  });

  function rClassNm() {
    if (window.innerWidth >= 1618) {
      return "col-md-4";
    } else if (window.innerWidth >= 1336) {
      return "col-md-5";
    } else if (window.innerWidth >= 1099) {
      return "col-md-6";
    } else if (window.innerWidth >= 779) {
      return "col-md-7";
    } else {
      return "col-md-12";
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        classNm: rClassNm(),
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function Header() {
  const size = useWindowSize();

  return (
    <div>
      <div
        class="card text-bg-dark"
        style={{
          padding: "0px",
          margin: "-2px",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <img
          src={HeaderImg}
          class="card-img"
          alt="Roadsign Header"
          style={{
            padding: "0px",
            marginLeft: "-1px",
            marginRight: "-1px",
            width: "max-content",
            opacity: "0.4",
          }}
        />
        <div class="card-img-overlay">
          <div className="container-fluid bottom-left-hdr">
            <div className={size.classNm}>
              <h1 class="card-title crd-title-h1">
                The New Way to plan your next trip
              </h1>
            </div>
            <div className="col-md-12">
              <p class="card-text crd-txt-p">
                Create a fully customized day by day itinerary for free.
              </p>
            </div>
            <div className="col-md-4">
              <Button
                fullWidth
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "50px",
                  width: "150px",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "#1e3d3eed",
                    color: "white",
                  },
                }}
              >
                Start Planing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
