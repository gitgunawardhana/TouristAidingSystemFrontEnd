import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Description.css";

function Description(props) {
  const [desc, setDesc] = useState(props.description);
  return (
    <div>
      <div className="container container-desc">
        <h3>Description</h3>
        <p>{desc}</p>
        <div className="btn btn-primary btn-map">
          <div>MAP&nbsp;</div>
          <div className="btn-value">
            <FaMapMarkerAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
