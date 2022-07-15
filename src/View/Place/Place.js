import { useParams } from "react-router-dom";
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
      <Description description={filteredResult.description}></Description> Place
      {filteredResult.title}
    </div>
  );
}

export default Place;
