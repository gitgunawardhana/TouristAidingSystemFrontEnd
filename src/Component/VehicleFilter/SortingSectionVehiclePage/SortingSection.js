import React, { useState } from "react";
import "./SortingSection.css";

function SortingSection() {
  const [best, setBest] = useState(true);
  const [review, setReview] = useState(false);
  const [distance, setDistance] = useState(false);
  const [lowPrice, setLowPrice] = useState(false);
  const [highPrice, setHighPrice] = useState(false);

  return (
    <div className="sorting-section sorting-section-div">
      <div
        className={
          best
            ? "price-sort-div sorting-section-single-selected"
            : "price-sort-div sorting-section-single"
        }
        onClick={() => {
          setBest(true);
          setReview(false);
          setDistance(false);
          setLowPrice(false);
          setHighPrice(false);
        }}
      >
        BEST PRICE
      </div>
      <div
        className={
          lowPrice
            ? "price-sort-div sorting-section-single-selected"
            : "price-sort-div sorting-section-single"
        }
        onClick={() => {
          setBest(false);
          setReview(false);
          setDistance(false);
          setLowPrice(true);
          setHighPrice(false);
        }}
      >
        LOWEST PRICE
      </div>
    </div>
  );
}

export default SortingSection;
