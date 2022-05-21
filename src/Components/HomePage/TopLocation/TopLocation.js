import React, { useState } from "react";
import locationData from "../TopLocation/Data";
import "./TopLocation.css";
function TopLocation() {
  // const [categories, setCategories] = useState(allCategoriesLink);
  const [menuItems, setMenuItems] = useState(locationData);
  // setMenuItems(locationData);
  return (
    <>
      <div className="card-list">
        {menuItems.map((items) => {
          const { id, category, image, title, link1, link2, text } = items;
          return (
            <div className="img-card">
              <div className="title">
                <h3>{title}</h3>
              </div>
              <img src={image} alt="" className="img-location" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopLocation;
