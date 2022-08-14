import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./ImageModel.css";

import imageCover4 from "../../../Assets/SingleAccommodation/252324192.png";
import imageCover1 from "../../../Assets/SingleAccommodation/252324202.png";
import imageCover3 from "../../../Assets/SingleAccommodation/252324209.png";
import imageCover6 from "../../../Assets/SingleAccommodation/252324213.png";
import imageCover7 from "../../../Assets/SingleAccommodation/252324215.png";
import imageCover5 from "../../../Assets/SingleAccommodation/252324226.png";
import imageCover2 from "../../../Assets/SingleAccommodation/2523242991.png";

const imgList = [
  imageCover1,
  imageCover2,
  imageCover3,
  imageCover4,
  imageCover5,
  imageCover6,
  imageCover7,
  imageCover2,
  imageCover3,
  imageCover4,
  imageCover5,
  imageCover6,
  imageCover7,
  imageCover2,
  imageCover3,
  imageCover4,
  imageCover5,
  imageCover6,
  imageCover7,
  imageCover2,
  imageCover3,
  imageCover4,
  imageCover5,
  imageCover6,
  imageCover7,
];

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="tumbnail">
      {arr.map((imgsrc, i) => (
        <img
          style={{ objectFit: "cover" }}
          key={i}
          height="50"
          width="100"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? "active" : ""}
        />
      ))}
    </div>
  );
};

const Slideshow = ({ imgs, currentIndex }) => {
  const [index, setIndex] = useState(currentIndex);
  console.log(index);

  useEffect(() => {
    setIndex(currentIndex);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img
        className="mainImg"
        src={imgs[index]}
        width={1500}
        height={750}
        style={{ objectFit: "cover" }}
      />
      <div className="actions">
        <button onClick={prev}>
          <IoIosArrowDropleftCircle
            style={{ color: "#1E3D3E", fontSize: "25px" }}
          ></IoIosArrowDropleftCircle>
        </button>
        <button onClick={next}>
          <IoIosArrowDroprightCircle
            style={{ color: "#1E3D3E", fontSize: "25px" }}
          ></IoIosArrowDroprightCircle>
        </button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1e3d3e57",
  border: "1px solid #000",
  boxShadow: 24,
  p: 0,
};

const ImageModel = ({
  open,
  handleClose,
  clickedImg,
  setClickedImg,
  currentIndex,
}) => {
  let index = imgList.findIndex((imgList) => imgList === clickedImg);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Slideshow imgs={imgList} currentIndex={index} />
        </Box>
      </Modal>
    </>
  );
};

export default ImageModel;
