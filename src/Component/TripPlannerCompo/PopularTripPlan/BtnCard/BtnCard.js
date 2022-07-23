import Button from "@mui/material/Button";
import React from "react";
import Ella from "../../../../Assets/TopLocation/ella.png";
import Galle from "../../../../Assets/TopLocation/galle.png";
import Kandy from "../../../../Assets/TopLocation/kandy.png";
import Mirissa from "../../../../Assets/TopLocation/mirissa.png";
import "./BtnCard.css";

function BtnCard(props) {
  const titles = [
    { id: 1, title: "10 Days in Ella", image: Mirissa },
    { id: 2, title: "5 Days in Colombo", image: Kandy },
    { id: 3, title: "12 Days in Nuwara Eliya", image: Ella },
    { id: 4, title: "8 Days in Kandy", image: Galle },
  ];

  return (
    <div className="text-center btn-container-div">
      {titles.slice(props.startP, props.endP).map((item) => {
        return (
          <div
            className="card crd-main-div"
            style={{
              width: "18rem",
            }}
          >
            <img
              src={item.image}
              className="card-img-top"
              alt={item.title.split(" ")[-1]}
              style={{ opacity: "0.4" }}
            />
            <div className="card-img-overlay">
              <div className="center-crd">
                <div className="center-crd-about">
                  <h4
                    className="center-crd-h-tag"
                    style={{ fontWeight: "400" }}
                  >
                    {item.title}
                  </h4>
                </div>

                <div className="center-crd-btn">
                  <Button
                    onClick={props.onClick}
                    fullWidth
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#1e3d3eed",
                      color: "white",
                      borderRadius: "50px",
                      width: "150px",
                      padding: "10px",
                      marginBottom: "-60px",
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
        );
      })}
    </div>
  );
}

export default BtnCard;
