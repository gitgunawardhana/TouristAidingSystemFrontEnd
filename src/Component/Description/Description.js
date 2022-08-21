import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Description.css";

function Description(props) {
  const [desc, setDesc] = useState(props.description);
  const [title, setTitle] = useState(props.title);
  const [display, setDisplay] = useState(props.display);

  useEffect(() => {
    setDesc(props.description);
    setTitle(props.title);
    setDisplay(props.display);
  });

  return (
    <div>
      <div className="container container-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div
          className={
            display === "none"
              ? "btn btn-primary btn-map btn-fit-content-cls btn-display-none"
              : "btn btn-primary btn-map btn-fit-content-cls "
          }
        >
          <div className="span text-center">
            <div>MAP&nbsp;</div>
            <div className="btn-value">
              <FaMapMarkerAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
