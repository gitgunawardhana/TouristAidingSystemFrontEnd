import React from "react";
import Icon3 from "../../../../Assets/TopLocation/ella.png";
import Icon2 from "../../../../Assets/TopLocation/galle.png";
import Icon1 from "../../../../Assets/TopLocation/kandy.png";
import Icon4 from "../../../../Assets/TopLocation/mirissa.png";
import "./TrendingDestinationsCard.css";

function EasyUse(props) {
  const dataList = [
    {
      id: 1,
      image: Icon1,
      title: "Anuradapura",
    },
    {
      id: 2,
      image: Icon2,
      title: "Gale Fort",
    },
    {
      id: 3,
      image: Icon3,
      title: "Jungle Beach",
    },
    {
      id: 4,
      image: Icon4,
      title: "Mirissa",
    },
  ];
  return (
    <div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {dataList.slice(props.startP, props.endP).map((item) => {
            return (
              <div class="col col-trip-planner col-trending-destination">
                <div class="h-100">
                  <div className="img-trending-destination">
                    <img
                      src={item.image}
                      class="card-img-top crd-im"
                      alt={item.title}
                    />
                  </div>

                  <div class="card-body">
                    <h5
                      class="card-title trip-planner-crd-title"
                      onClick="window.location.reload();"
                    >
                      {item.title}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EasyUse;
