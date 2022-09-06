import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonBar from "../../Component/ButtonBar/ButtonBar";
import ButtonBarResponsive from "../../Component/ButtonBar/ButtonBarResponsive";
import HomePageHeader from "../../Component/HomePageHeader/HomePageHeader";
import HomePageNavbar from "../../Component/HomePageNavbar/HomePageNavbar";
import TopLocation from "../../Component/ImageGallery/ImageGallery";
// import topLocationDataList from "../../Component/TopLocationDataList";
import Footer from "../../Component/Footer/Footer";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Home.css";

function Home() {
  const matches = useMediaQuery("(min-width: 600px)");

  const [topLocationDataList, setTopLocationDataList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/location/top-locations")
      .then((res) => {
        console.log(res.data.body)
        setTopLocationDataList(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <Footer />
    </>
  );
}

export default Home;
