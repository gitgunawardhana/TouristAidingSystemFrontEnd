import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import "./ImageGalleryWithDescription.css";

function TopLocation(props) {
  // const [categories, setCategories] = useState(allCategoriesLink);
  const [menuItems, setMenuItems] = useState(props.dataList);
  // setMenuItems(locationData);
  return (
    <>
      <div className="card-list-2">
        {menuItems.slice(0, props.visibleValue).map((items) => {
          const { id, category, image, title, link1, link2, text, favorite } =
            items;
          return (
            <>
              <div className="container-custom">
                <div className="d-lg-flex">
                  <div className="card border-0 me-lg-4 mb-lg-0 mb-4 card-custom">
                    <div className="backgroundEffect"></div>
                    <div className="pic">
                      <img className="" src={image} alt="" />
                      <div className="date">
                        <span className="day">{id}</span>{" "}
                        {/* <span className="month"> {favorite}</span>
                    <span className="year">
                      <MdFavorite classNameName="fav-icon" />
                    </span> */}
                      </div>
                    </div>
                    <div className="content">
                      <p className="h-1 mt-4">
                        {id} {title}
                      </p>
                      <p className="text-muted mt-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas natus perferendis ducimus ad voluptate quasi!
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <div className="btn btn-primary">
                          Read More<span className="fas fa-arrow-right"></span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center foot">
                          <p className="admin">
                            <MdFavorite classNameName="fav-icon" />
                          </p>
                          <p className="ps-3 icon text-muted">{favorite}</p>
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
