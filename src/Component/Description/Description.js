import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Description.css";

function Description(props) {
  const [desc, setDesc] = useState(props.description);
  const [title, setTitle] = useState(props.title);
  const [display, setDisplay] = useState(props.display);

  return (
    <div>
      <div className="container container-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div
          className={
            display === "none"
              ? "btn btn-primary btn-map btn-display-none"
              : "btn btn-primary btn-map "
          }
        >
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
