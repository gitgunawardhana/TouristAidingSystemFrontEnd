import React, {useState} from "react";
import imageData from "./Data";
import "./BackgroundImageSet.css";

function BackgroundImageSet() {
    const [images, setImages] = useState(imageData);
    return (
        <>
            <div className="background-img-container">
                {images.map((items) => {
                    const {id, image} = items;
                    return (
                        <img src={image} alt="background image" className="background-img"/>
                    );
                })}
            </div>

        </>
    );
}

export default BackgroundImageSet;