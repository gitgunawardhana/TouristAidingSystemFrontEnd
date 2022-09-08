import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AttractionCards.css";

function AttractionCards(props) {
  const [menuItems, setMenuItems] = useState(props.dataList);

  useEffect(() => {
    setMenuItems(props.dataList);
  });

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {menuItems.map((item) => {
          return (
            <div class="col">
              <div class="card h-100 card-transition">
                <img
                  src={item.locationAttractionPictures[0]}
                  class="card-img-top crd-im"
                  alt={item.name}
                  height="250px"
                  style={{ overflow: "hidden", objectFit: "cover" }}
                />
                <div class="card-body">
                  <Link className="nav-to-place" to={`/attraction/${item.id}`}>
                    <h5
                      class="card-title text-center"
                      style={{ color: "#004145", cursor: "pointer" }}
                      onClick="window.location.reload();"
                    >
                      {item.name}
                    </h5>
                  </Link>
                  <p
                    class="card-text text-center card-dsc"
                    style={{ marginBottom: "20px" }}
                  >
                    {item.description.slice(0, 330)}...
                  </p>
                  <Link className="nav-to-place" to={`/attraction/${item.id}`}>
                    <p
                      class="card-text text-center card-btn"
                      onClick="window.location.reload();"
                      style={{
                        bottom: "15px",
                        position: "absolute",
                        width: "-webkit-fill-available",
                        marginLeft: "-33px",
                      }}
                    >
                      View
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AttractionCards;
