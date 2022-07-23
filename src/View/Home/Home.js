import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonBar from "../../Component/ButtonBar/ButtonBar";
import ButtonBarResponsive from "../../Component/ButtonBar/ButtonBarResponsive";
import HomePageHeader from "../../Component/HomePageHeader/HomePageHeader";
import HomePageNavbar from "../../Component/HomePageNavbar/HomePageNavbar";
import TopLocation from "../../Component/ImageGallery/ImageGallery";
import topLocationDataList from "../../Component/TopLocationDataList";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Home.css";
import Footer from "../../Component/Footer/Footer";

function Home() {
  const matches = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
      <>
    <div className="bg">
      <HomePageNavbar></HomePageNavbar>
      <HomePageHeader></HomePageHeader>
      {matches ? (
        <ButtonBar></ButtonBar>
      ) : (
        <ButtonBarResponsive></ButtonBarResponsive>
      )}
      <div data-aos="fade-up">
        <h2 className="headings-home">TOP LOCATION</h2>
        <TopLocation
          visibleValue={topLocationDataList.length}
          dataList={topLocationDataList}
        ></TopLocation>
      </div>
      <div style={{ height: "200px" }}></div>

    </div>
    <Footer/>
    </>
  );
}

export default Home;
