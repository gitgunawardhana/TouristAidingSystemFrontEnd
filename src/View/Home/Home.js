import ButtonBar from "../../Component/ButtonBar/ButtonBar";
import ButtonBarResponsive from "../../Component/ButtonBar/ButtonBarResponsive";
import HomePageHeader from "../../Component/HomePageHeader/HomePageHeader";
import HomePageNavbar from "../../Component/HomePageNavbar/HomePageNavbar";
import TopLocation from "../../Component/ImageGallery/ImageGallery";
import topLocationDataList from "../../Component/TopLocationDataList";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Home.css";

function Home() {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className="bg">
      <HomePageNavbar></HomePageNavbar>
      <HomePageHeader></HomePageHeader>
      {matches ? (
        <ButtonBar></ButtonBar>
      ) : (
        <ButtonBarResponsive></ButtonBarResponsive>
      )}
      <h2 className="headings-home">TOP LOCATION</h2>
      <TopLocation
        visibleValue={topLocationDataList.length}
        dataList={topLocationDataList}
      ></TopLocation>
      <div style={{ height: "200px" }}></div>


    </div>
  );
}

export default Home;
