import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import kandyCover3 from "../../Assets/Cover/kandyCover3.png";
import kandyCover4 from "../../Assets/Cover/kandyCover4.png";
import kandyCover5 from "../../Assets/Cover/kandyCover5.png";
import RecommendedAccommodations from "../../Component/Accommodation/RecommendedAccommodations/RecommendedAccommodations";
import allLocationDataList from "../../Component/AllLocationDataList";
import AttractionCards from "../../Component/AttractionCards/AttractionCards";
import DatasetForAttraction from "../../Component/DatasetForAttractionCards";
import Description from "../../Component/Description/Description";
import Navbar from "../../Component/Navbar/Navbar";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Attraction.css";

function Attraction() {
  const { id } = useParams();

  const filteredResult = allLocationDataList.find((e) => e.id == id);

  const coverImages = [
    filteredResult.coverImg0,
    filteredResult.coverImg1,
    filteredResult.coverImg2,
    filteredResult.title,
  ];

  const matches = useMediaQuery("(min-width: 768px)");

  const [mainImage, setMainImage] = useState(kandyCover4);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="row mt-5 mx-2 header-slider">
        <div className="col-md-9 main-im">
          <img src={mainImage} alt={filteredResult.title} />
        </div>
        <div
          className={
            matches ? "col-md-3 col-md-3-non-responsive" : "col-md-3-responsive"
          }
        >
          <div
            className={
              matches
                ? "sub-im sub-im-non-responsive"
                : "sub-im col-md-4 sub-im-responsive"
            }
          >
            <img
              src={kandyCover4}
              alt={filteredResult.title}
              onClick={() => setMainImage(kandyCover4)}
            />
          </div>
          <div
            className={
              matches
                ? "sub-im sub-im-non-responsive"
                : "sub-im col-md-4 sub-im-responsive"
            }
          >
            <img
              src={kandyCover3}
              alt={filteredResult.title}
              onClick={() => setMainImage(kandyCover3)}
            />
          </div>
          <div
            className={
              matches
                ? "sub-im sub-im-non-responsive"
                : "sub-im col-md-4 sub-im-responsive"
            }
          >
            <img
              src={kandyCover5}
              alt={filteredResult.title}
              onClick={() => setMainImage(kandyCover5)}
            />
          </div>
        </div>
      </div>
      <Description
        title={filteredResult.title}
        description={filteredResult.description}
        display={"none"}
      ></Description>
      <div data-aos="fade-up" className="container top-attraction-dist">
        <h4 id="filter-heading" style={{ marginBottom: "15px" }}>
          Explore other attractions in {filteredResult.title}
        </h4>
        <AttractionCards dataList={DatasetForAttraction}></AttractionCards>
      </div>
      <div className="container-fluid attraction-page-recommended-acco">
        <RecommendedAccommodations></RecommendedAccommodations>
      </div>
    </div>
  );
}

export default Attraction;
