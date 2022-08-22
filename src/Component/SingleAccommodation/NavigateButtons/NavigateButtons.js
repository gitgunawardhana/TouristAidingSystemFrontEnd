import React, { useState } from "react";
import "./NavigateButtons.css";

function SortingSection() {
  const [best, setBest] = useState(true);
  const [review, setReview] = useState(false);
  const [distance, setDistance] = useState(false);
  const [lowPrice, setLowPrice] = useState(false);
  const [highPrice, setHighPrice] = useState(false);

  return (
    <div className="sorting-section">
      <div
        className={
          best ? "sorting-section-single-selected" : "sorting-section-single"
        }
        onClick={() => {
          setBest(true);
          setReview(false);
          setDistance(false);
          setLowPrice(false);
          setHighPrice(false);
        }}
      >
        DETAILS
      </div>
      <div
        className={
          review ? "sorting-section-single-selected" : "sorting-section-single"
        }
        onClick={() => {
          setBest(false);
          setReview(true);
          setDistance(false);
          setLowPrice(false);
          setHighPrice(false);
        }}
      >
        LOCATION
      </div>
      <div
        className={
          distance
            ? "sorting-section-single-selected"
            : "sorting-section-single"
        }
        onClick={() => {
          setBest(false);
          setReview(false);
          setDistance(true);
          setLowPrice(false);
          setHighPrice(false);
        }}
      >
        AVAILABILITY
      </div>
      <div
        className={
          lowPrice
            ? "sorting-section-single-selected"
            : "sorting-section-single"
        }
        onClick={() => {
          setBest(false);
          setReview(false);
          setDistance(false);
          setLowPrice(true);
          setHighPrice(false);
        }}
      >
        FACILITIES
      </div>
      <div
        className={
          highPrice
            ? "sorting-section-single-selected"
            : "sorting-section-single"
        }
        onClick={() => {
          setBest(false);
          setReview(false);
          setDistance(false);
          setLowPrice(false);
          setHighPrice(true);
        }}
      >
        HOUSE RULES
      </div>
    </div>
  );
}

export default SortingSection;
