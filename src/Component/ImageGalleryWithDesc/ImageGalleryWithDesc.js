import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import "./ImageGalleryWithDesc.css";

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
            <div className="img-card-2 text-left">
              <img src={image} alt="" className="img-location-2" />
              <div className="desc">
                <h3 className="place-name text-left">
                  {id} {title}
                </h3>
                <div className="favorite">
                  {favorite} <MdFavorite className="fav-icon" />
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas natus perferendis ducimus ad voluptate quasi!
                  </p>
                </div>
                <div className="view-location text-right">
                  <a
                    href="#"
                    class="btn btn-dark text-center btn-view-location"
                  >
                    View Location
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopLocation;
