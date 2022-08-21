import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import emptyImage from "../../Assets/emptyImage.png";
import "./AllLocationCardView.css";

function AllLocationCardView(props) {
  const [locationDataList, setLocationDataList] = useState(props.dataList);
  // console.log(covers);

  useEffect(() => {
    setLocationDataList(props.dataList);
  });

  return (
    <div>
      {props.dataList.length === 0 ? (
        <div>
          <div
            className="card ml-3 mb-3 card-shadow"
            style={{ width: "50px;" }}
          >
            <div className="row no-gutters">
              <div className="col-sm-5">
                <img
                  className="card-img"
                  src={emptyImage}
                  alt="Empty Results"
                />
              </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title empty-card-title">
                    There is no any results...
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        props.dataList.map((item) => {
          return (
            <div
              className="card ml-3 mb-3 card-shadow"
              style={{ width: "50px;" }}
            >
              <div className="row no-gutters card-transition">
                <div className="col-sm-5">
                  <Link className="nav-to-place" to={`/location/${item.id}`}>
                    <div className="crd-img-div-size">
                      <img
                        className="card-img"
                        src={`http://localhost:8080/file/images/location/location-id/${
                          item.id
                        }/${1}`}
                        alt={item.name}
                        onClick="window.location.reload();"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-sm-7">
                  <div className="card-body">
                    <Link className="nav-to-place" to={`/location/${item.id}`}>
                      <h5
                        className="card-title"
                        onClick="window.location.reload();"
                      >
                        {item.name}
                      </h5>
                    </Link>
                    <p className="card-text">
                      {item.description.slice(0, 100) + "..."}
                      <Link
                        className="nav-to-place"
                        to={`/location/${item.id}`}
                      >
                        <span
                          className="read-more"
                          onClick="window.location.reload();"
                        >
                          &nbsp;Read more
                        </span>
                      </Link>
                    </p>
                    <hr />
                    <div className="btn btn-primary btn-map btn-fit-content-cls">
                      <div className="span text-center">
                        <div>MAP&nbsp;</div>
                        <div className="btn-value">
                          <FaMapMarkerAlt />
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default AllLocationCardView;
