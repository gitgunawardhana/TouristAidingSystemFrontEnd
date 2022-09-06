import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import cover3 from "../../Assets/Cover/cover3.png";
// import cover4 from "../../Assets/Cover/cover4.png";
// import cover5 from "../../Assets/Cover/cover5.png";
import RecommendedAccommodations from "../../Component/Accommodation/RecommendedAccommodations/RecommendedAccommodations";
import AttractionCards from "../../Component/AttractionCards/AttractionCards";
// import DatasetForAttraction from "../../Component/DatasetForAttractionCards";
import Description from "../../Component/Description/Description";
import Navbar from "../../Component/Navbar/Navbar";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Attraction.css";

function Attraction() {
  const { id } = useParams();

  const [datasetForAttraction, setDatasetForAttraction] = useState([]);
  const [cover0, setCover0] = useState();
  const [cover1, setCover1] = useState();
  const [cover2, setCover2] = useState();
  const [locationId, setLocationId] = useState();
  const [filteredResult, setFilteredResult] = useState({});
  const [mainImage, setMainImage] = useState();
  const [allLocationAttractionDataList, setAllLocationAttractionDataList] =
    useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/location/attractions")
      .then((res1) => {
        setAllLocationAttractionDataList(res1.data.body);
        setFilteredResult(res1.data.body.find((e) => e.id == id));
        setMainImage(
          res1.data.body.find((e) => e.id == id).locationAttractionPictures[0]
        );
        setCover0(
          res1.data.body.find((e) => e.id == id).locationAttractionPictures[0]
        );
        setCover1(
          res1.data.body.find((e) => e.id == id).locationAttractionPictures[1]
        );
        setCover2(
          res1.data.body.find((e) => e.id == id).locationAttractionPictures[2]
        );
        setLocationId(res1.data.body.find((e) => e.id == id).locationId);
      })
      .catch((err1) => {
        console.log("err1", err1);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/public-user/location/${locationId}/three-attractions`
      )
      .then((res3) => {
        if (datasetForAttraction != []) {
          setDatasetForAttraction(res3.data.body);
        }
      })
      .catch((err3) => {
        console.log("err3", err3);
      });
  });

  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="row mt-5 mx-2 header-slider">
        <div className="col-md-9 main-im">
          <img src={mainImage} alt={filteredResult.name} height="100%" />
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
              src={cover0}
              alt={filteredResult.name}
              onClick={() => setMainImage(cover0)}
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
              src={cover1}
              alt={filteredResult.name}
              onClick={() => setMainImage(cover1)}
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
              src={cover2}
              alt={filteredResult.name}
              onClick={() => setMainImage(cover2)}
            />
          </div>
        </div>
      </div>
      <Description
        title={filteredResult.name}
        description={filteredResult.description}
        display={"none"}
      ></Description>
      <div data-aos="fade-up" className="container top-attraction-dist">
        <h4 id="filter-heading" style={{ marginBottom: "15px" }}>
          Explore other attractions in {filteredResult.name}
        </h4>
        <AttractionCards dataList={datasetForAttraction}></AttractionCards>
      </div>
      <div className="container-fluid attraction-page-recommended-acco">
        <RecommendedAccommodations></RecommendedAccommodations>
      </div>
    </div>
  );
}

export default Attraction;
