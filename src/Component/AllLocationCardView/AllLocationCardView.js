import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./AllLocationCardView.css";

function AllLocationCardView(props) {
  const [allDataList, setAllDataList] = useState(props.dataList);
  return (
    <div>
      {allDataList.map((item) => {
        return (
          <div
            className="card ml-3 mb-3 card-shadow"
            style={{ width: "50px;" }}
          >
            <div className="row no-gutters">
              <div className="col-sm-5">
                <img
                  className="card-img"
                  src={item.image}
                  alt="Suresh Dasari Card"
                />
              </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="btn btn-primary btn-map">
                    <div>MAP&nbsp;</div>
                    <div className="btn-value">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllLocationCardView;
