import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import emptyImage from "../../Assets/emptyImage.png";
import "./AllLocationCardView.css";

function AllLocationCardView(props) {
  // useEffect(() => {
  //   console.log(props.dataList);
  // }, [props.dataList]);

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
                    <img
                      className="card-img"
                      src={item.image}
                      alt={item.title}
                      onClick="window.location.reload();"
                    />
                  </Link>
                </div>
                <div className="col-sm-7">
                  <div className="card-body">
                    <Link className="nav-to-place" to={`/location/${item.id}`}>
                      <h5
                        className="card-title"
                        onClick="window.location.reload();"
                      >
                        {item.title}
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
                          read more
                        </span>
                      </Link>
                    </p>
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
        })
      )}
    </div>
  );
}

export default AllLocationCardView;
