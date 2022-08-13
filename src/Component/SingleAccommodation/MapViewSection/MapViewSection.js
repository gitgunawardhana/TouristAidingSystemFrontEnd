import Button from "@mui/material/Button";
import React from "react";

function MapViewSection() {
  return (
    <div>
      <h2 className="text-left" style={{ color: "black", paddingTop: "5px" }}>
        <b>Location</b>
      </h2>
      <div className="map-div">
        <iframe
          style={{ width: "100%", height: "450px" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <div class="centered">
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#03676E",
              color: "white",
              borderRadius: "5px",
              width: "150px",
              padding: "10px",
              marginTop: "60px",
              "&:hover": {
                backgroundColor: "#1e3d3eed",
                color: "white",
              },
            }}
          >
            <a
              href="https://www.google.com/maps/place/2880+Broadway,+New+York,+NY+10025/@40.805449,-73.965441,13z/data=!4m5!3m4!1s0x89c2f63c75af2d65:0xf45542f6cb090cc9!8m2!3d40.8054491!4d-73.9654415?hl=en-US"
              target="_blank"
            >
              Show in map
            </a>
          </Button>
        </div>
      </div>
      <br />
      <hr className="my-4" />
    </div>
  );
}

export default MapViewSection;
