import React, {useState} from "react";
import "./SortingSection.css";

function SortingSection() {
    const [best, setBest] = useState(true);
    const [review, setReview] = useState(false);
    const [distance, setDistance] = useState(false);
    const [lowPrice, setLowPrice] = useState(false);
    const [highPrice, setHighPrice] = useState(false);

    return (
        <div className="sorting-section">
            <div className={best ? "sorting-section-single-selected" : "sorting-section-single"}
                 onClick={() => {
                     setBest(true);
                     setReview(false);
                     setDistance(false);
                     setLowPrice(false);
                     setHighPrice(false);
                 }}>
                BEST OPTIONS
            </div>
            <div className={review ? "sorting-section-single-selected" : "sorting-section-single"}
                 onClick={() => {
                     setBest(false);
                     setReview(true);
                     setDistance(false);
                     setLowPrice(false);
                     setHighPrice(false);
                 }}>
                TOP REVIEWED
            </div>
            <div className={distance ? "sorting-section-single-selected" : "sorting-section-single"}
                 onClick={() => {
                     setBest(false);
                     setReview(false);
                     setDistance(true);
                     setLowPrice(false);
                     setHighPrice(false);
                 }}>
                DISTANCE FROM CITY
            </div>
            <div className={lowPrice ? "sorting-section-single-selected" : "sorting-section-single"}
                 onClick={() => {
                     setBest(false);
                     setReview(false);
                     setDistance(false);
                     setLowPrice(true);
                     setHighPrice(false);
                 }}>
                LOWEST PRICE
            </div>
            <div className={highPrice ? "sorting-section-single-selected" : "sorting-section-single"}
                 onClick={() => {
                     setBest(false);
                     setReview(false);
                     setDistance(false);
                     setLowPrice(false);
                     setHighPrice(true);
                 }}>
                HIGHEST PRICE
            </div>
        </div>
    );
}

export default SortingSection;