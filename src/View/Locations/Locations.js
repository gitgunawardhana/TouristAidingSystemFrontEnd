import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbArrowBarDown, TbArrowBarUp } from "react-icons/tb";
import Carousel from "../../Component/Carousel/Carousel";
import CarouselRecommended from "../../Component/Carousel/CarouselRecommended";
import favoriteDataList1 from "../../Component/FavoriteDataList";
import Footer from "../../Component/Footer/Footer";
import FavoritePlaces from "../../Component/ImageGalleryWithDescription/ImageGalleryWithDescription";
import Navbar from "../../Component/Navbar/Navbar";
// import RecommendedDataList from "../../Component/RecommendedDataList";
import SearchBar from "../../Component/SearchBar/SearchBar";
import "./Locations.css";

function Location() {
  const [visible, setVisible] = useState(8);
  const [disableAll, setDisableAll] = useState(true);
  const [disableLess, setDisableLess] = useState(true);

  const [thingsToDoDataList, setThingsToDoDataList] = useState([]);
  const [recommendedDataList, setRecommendedDataList] = useState([]);
  const [favoriteDataList, setFavoriteDataList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/activity")
      .then((res1) => {
        setThingsToDoDataList(res1.data.body);
      })
      .catch((err1) => {
        console.log(err1);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/location")
      .then((res2) => {
        setRecommendedDataList(res2.data.body);
        setFavoriteDataList(res2.data.body);
      })
      .catch((err2) => {
        console.log(err2);
      });
  }, []);

  const seeAll = () => {
    setVisible((prevValue) => {
      if (favoriteDataList.length <= prevValue) {
        setDisableAll(false);
        return favoriteDataList.length;
      } else {
        setDisableLess(true);
        return prevValue + 4;
      }
    });
  };

  const seeLess = () => {
    setVisible((prevValue) => {
      if (8 >= prevValue) {
        setDisableLess(false);
        return 8;
      } else {
        setDisableAll(true);
        if (prevValue === favoriteDataList.length) {
          return prevValue - (favoriteDataList.length % 4);
        }
        return prevValue - 4;
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="loaction-page">
      {console.log(favoriteDataList1)}
      {console.log(favoriteDataList)}
      <Navbar></Navbar>
      <h1 className="heading main-heading" style={{ "margin-top": "60px" }}>
        Places to Visit in <span className="sp-sri-lanka">Sri Lanka</span>
      </h1>
      <div className="search-bar-custom">
        <SearchBar></SearchBar>
      </div>
      <Carousel
        slidesToShowScroll={4}
        heading="Things To Do"
        subHeading=""
        dataList={thingsToDoDataList}
      ></Carousel>
      <CarouselRecommended
        slidesToShowScroll={3}
        heading="Recommended Locations"
        subHeading="Lorem ipsum dolor, sit amet consectetur adipisic."
        dataList={recommendedDataList}
      ></CarouselRecommended>
      <div
        data-aos="fade-up"
        className="container-fluid"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div className="container-fluid fv-location">
          <div className="custom-head">
            <h1
              className="text-center"
              style={{ color: "black", paddingTop: "50px", fontSize: "28px" }}
            >
              Top Attractions in Sri Lanka
            </h1>
            <FavoritePlaces
              visibleValue={visible}
              dataList={favoriteDataList}
            ></FavoritePlaces>
            <div className="text-center">
              <button
                type="button"
                class="text-center btn-see"
                onClick={seeLess}
                disabled={!disableLess}
              >
                <TbArrowBarUp></TbArrowBarUp>
              </button>
              <button
                type="button"
                class="text-center btn-see"
                onClick={seeAll}
                disabled={!disableAll}
              >
                <TbArrowBarDown></TbArrowBarDown>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <FavoritePlaces
        visibleValue={visible}
        dataList={FavoriteDataList}
      ></FavoritePlaces>
      <button
        type="button"
        class="btn btn-dark text-center btn-see-all"
        onClick={seeAll}
      >
        See all
      </button> */}
      <Footer />
    </div>
  );
}

export default Location;
