import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ImageGalleryWithDescription.css";

function TopLocation(props) {
  // const [categories, setCategories] = useState(allCategoriesLink);
  const [menuItems, setMenuItems] = useState(props.dataList);
  // setMenuItems(locationData);

  useEffect(() => {
    setMenuItems(props.dataList);
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="card-list-2 container-fluid">
        {menuItems.slice(0, props.visibleValue).map((items, keyId) => {
          return (
            <>
              <div key={keyId} data-aos="fade-up" className="container-custom">
                <div className="d-lg-flex">
                  <div className="card border-0 me-lg-4 mb-lg-0 mb-4 card-custom">
                    <div className="backgroundEffect"></div>
                    <div className="pic">
                      <Link
                        className="nav-to-place"
                        to={`/attraction/${items.id}`}
                      >
                        <img
                          className=""
                          src={items.locationAttractionPictures[0]}
                          alt=""
                        />
                      </Link>
                      <div className="date">
                        <span className="day">{keyId + 1}</span>{" "}
                        {/* <span className="month"> {favorite}</span>
                    <span className="year">
                      <MdFavorite classNameName="fav-icon" />
                    </span> */}
                      </div>
                    </div>
                    <div className="content">
                      <Link
                        className="nav-to-place-bottom"
                        to={`/attraction/${items.id}`}
                      >
                        <h5 className="h-1 mt-4 text-center">{items.name}</h5>
                      </Link>
                      <p
                        className="text-muted mt-3"
                        style={{ height: "130px" }}
                      >
                        {items.description}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <Link
                          className="nav-to-place"
                          to={`/attraction/${items.id}`}
                        >
                          <div className="btn btn-primary">
                            Read More
                            <span className="fas fa-arrow-right"></span>
                          </div>
                        </Link>
                        <div className="d-flex align-items-center justify-content-center foot">
                          <p className="admin">
                            <MdFavorite classNameName="fav-icon" />
                          </p>
                          <p className="ps-3 icon text-muted">
                            {items.favorite}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TopLocation;
