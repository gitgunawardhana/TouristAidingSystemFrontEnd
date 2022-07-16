import { useParams } from "react-router-dom";
import AllLocationCardView from "../../Component/AllLocationCardView/AllLocationCardView";
import allLocationDataList from "../../Component/AllLocationDataList";
import Description from "../../Component/Description/Description";
import ImageSlider from "../../Component/ImageSlider/ImageSlider";
import Navbar from "../../Component/Navbar/Navbar";
import locationDataList from "../../Component/TopLocationDataList";
import "./Place.css";

function Place() {
  const { id } = useParams();

  const filteredResult = locationDataList.find((e) => e.id == id);
  console.log(filteredResult);

  const coverImages = [
    filteredResult.coverImg0,
    filteredResult.coverImg1,
    filteredResult.coverImg2,
    filteredResult.title,
  ];

  return (
    <div>
      <Navbar></Navbar>
      <ImageSlider covers={coverImages}></ImageSlider>
      <Description description={filteredResult.description}></Description>
      <div className="container container-bottom">
        <div className="row mt-5 mx-2">
          <div className="col-md-3 filter-part">
            <div className="container filter-heading">
              <h4 id="filter-heading">Filter Locations</h4>
            </div>
          </div>
          <div className="col-md-9 filter-result-part">
            <div className="container filter-result-heading">
              <h4 id="filter-result-heading">All Locations</h4>
            </div>
            <AllLocationCardView
              dataList={allLocationDataList}
            ></AllLocationCardView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
