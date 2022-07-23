import React from "react";
import Icon2 from "../../../Assets/TopLocation/galle.png";
import Icon1 from "../../../Assets/TopLocation/kandy.png";
import "./VenderTypeCard";

function VenderTypeCard() {
  const dataList = [
    {
      id: 1,
      image: Icon1,
      title: "Hotel or Building Manager",
      description:
        "Manage one or more multi-unit buildings such as a hotel, bed & breakfast, serviced apartment, or rentable condominium buildings",
    },
    {
      id: 2,
      image: Icon2,
      title: "Vehical  Manager",
      description:
        "Manage one or more multi-unit buildings such as a hotel, bed & breakfast, serviced apartment, or rentable condominium buildings",
    },
  ];
  return (
    <div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {dataList.map((item) => {
            return (
              <div class="card" style="width: 18rem;">
                <img src={item.image} class="card-img-top" alt={item.title} />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VenderTypeCard;
