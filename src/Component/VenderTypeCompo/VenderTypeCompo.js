import React from "react";
import Hotel from "../../Assets/VenderTypeAssets/Hotel.png";
import Vehicle from "../../Assets/VenderTypeAssets/Vehicle.png";
import "./VenderTypeCompo.css";

function VenderType() {
  return (
    <>
      <div className="container card card-registration my-4 shadow-lg p-3 mb-5 bg-white rounded vender-type-rounded">
        <div className="row g-0">
          <div className="container-sm text-center vender-container">
            <div className="vender-type-header-section">
              <h2 className="vender-page-heading">
                Which of the following best describes you?
              </h2>
              <p>
                Select one, and we’ll take you to the next step for quick
                onboarding.
              </p>
            </div>
            <div className="vender-page-btns">
              <div className="vender-btn vender-btn-hotel">
                <img src={Hotel} alt="Hotel" />
              </div>
              <div className="vender-btn vender-btn-vehicle">
                <img src={Vehicle} alt="Vehicle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VenderType;
