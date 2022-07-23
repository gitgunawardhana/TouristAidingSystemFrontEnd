import React from "react";
import Icon1 from "../../../../Assets/TripPlannerAssets/Icon/Icon1.png";
import Icon2 from "../../../../Assets/TripPlannerAssets/Icon/Icon2.png";
import Icon3 from "../../../../Assets/TripPlannerAssets/Icon/Icon3.png";
import Icon4 from "../../../../Assets/TripPlannerAssets/Icon/Icon4.png";
import "./EasyUseCard.css";

function EasyUse(props) {
  const dataList = [
    {
      id: 1,
      icon: Icon1,
      title: "Get a personalized trip",
      description: "A full day by day itinerary based on your preferences",
    },
    {
      id: 2,
      icon: Icon2,
      title: "Customize it",
      description: "Refine your trip. We'll find the best routes and schedules",
    },
    {
      id: 3,
      icon: Icon3,
      title: "Book it",
      description: "Choose from the best hotels and activities. Up to 50% off",
    },
    {
      id: 4,
      icon: Icon4,
      title: "Manage it",
      description: "Everything in one place. Everyone on the same page.",
    },
  ];
  return (
    <div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {dataList.slice(props.startP, props.endP).map((item) => {
            return (
              <div class="col col-trip-planner">
                <div class="h-100 card-transition">
                  <div className="img-icon">
                    <img
                      src={item.icon}
                      class="card-img-top crd-im"
                      alt={item.title}
                    />
                  </div>

                  <div class="card-body">
                    <h5
                      class="card-title trip-planner-crd-title"
                      style={{ color: "#004145", cursor: "pointer" }}
                      onClick="window.location.reload();"
                    >
                      {item.title}
                    </h5>
                    <p class="card-text text-center card-dsc trip-planner-crd-desc">
                      {item.description}
                    </p>
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
