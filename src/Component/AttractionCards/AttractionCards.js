import React from "react";
import { Link } from "react-router-dom";
import "./AttractionCards.css";

function AttractionCards(props) {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {props.dataList.map((item) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={item.image} class="card-img-top crd-im" alt={item.title} />
                <div class="card-body">
                  <Link className="nav-to-place" to={`/attraction/${item.id}`}>
                    <h5
                      class="card-title"
                      style={{ color: "#004145", cursor: "pointer" }}
                      onClick="window.location.reload();"
                    >
                      {item.title}
                    </h5>
                  </Link>
                  <p class="card-text text-center card-dsc">
                    {item.description}
                  </p>
                  <Link className="nav-to-place" to={`/attraction/${item.id}`}>
                    <p
                      class="card-text text-center card-btn"
                      onClick="window.location.reload();"
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
