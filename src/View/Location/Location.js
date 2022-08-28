import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useParams } from "react-router-dom";
import AllLocationCardView from "../../Component/AllLocationCardView/AllLocationCardView";
import AttractionCards from "../../Component/AttractionCards/AttractionCards";
import CheckBox from "../../Component/CheckBox/CheckBox";
// import DatasetForAttraction from "../../Component/DatasetForAttractionCards";
import Description from "../../Component/Description/Description";
import ImageSlider from "../../Component/ImageSlider/ImageSlider";
import Navbar from "../../Component/Navbar/Navbar";

import Footer from "../../Component/Footer/Footer";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Location.css";

function Place() {
  const matches = useMediaQuery("(min-width: 768px)");
  const { id } = useParams();
  console.log("id", id);

  const [allLocationDataList, setAllLocationDataList] = useState([]);
  const [filteredResult, setFilteredResult] = useState({});
  const [provincesCategory, setProvincesCategory] = useState([]);
  const [thingsToDoCategory, setThingsToDoCategory] = useState([]);
  const [datasetForAttraction, setDatasetForAttraction] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/location/all-locations")
      .then((res1) => {
        setAllLocationDataList(res1.data.body);
        setFilteredResult(res1.data.body.find((e) => e.id == id));
      })
      .catch((err1) => {
        console.log("err1", err1);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/province")
      .then((res2) => {
        setProvincesCategory(res2.data.body);
      })
      .catch((err2) => {
        console.log("err2", err2);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/activity/all-activities")
      .then((res3) => {
        setThingsToDoCategory(res3.data.body);
      })
      .catch((err3) => {
        console.log("err3", err3);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/public-user/location/${id}/rand-three-attractions`
      )
      .then((res4) => {
        setDatasetForAttraction(res4.data.body);
      })
      .catch((err4) => {
        console.log("err4", err4);
      });
  }, []);

  const coverImages = [
    [filteredResult.id, 0],
    [filteredResult.id, 1],
    [filteredResult.id, 2],
    filteredResult.name,
  ];

  // filtering data
  const initFilter = {
    provincesCategory: [],
    thingsToDoCategory: [],
  };

  const locationList = allLocationDataList;

  const [locations, setLocations] = useState(locationList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "PROVINCE":
          setFilter({
            ...filter,
            provincesCategory: [...filter.provincesCategory, item.id],
          });
          break;
        case "THINGSTODO":
          setFilter({
            ...filter,
            thingsToDoCategory: [...filter.thingsToDoCategory, item.id],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "PROVINCE":
          const newProvinceCategory = filter.provincesCategory.filter(
            (e) => e !== item.id
          );
          setFilter({ ...filter, provincesCategory: newProvinceCategory });
          break;
        case "THINGSTODO":
          const newThingsToDoCategory = filter.thingsToDoCategory.filter(
            (e) => e !== item.id
          );
          setFilter({ ...filter, thingsToDoCategory: newThingsToDoCategory });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateLocations = useCallback(() => {
    let temp = locationList;

    if (filter.provincesCategory.length > 0) {
      temp = temp.filter((e) =>
        filter.provincesCategory.includes(e.provinceId)
      );
    }

    if (filter.thingsToDoCategory.length > 0) {
      temp = temp.filter((e) => {
        const check = e.locationActivitiesId.find((id) =>
          filter.thingsToDoCategory.includes(id)
        );
        return check !== undefined;
      });
    }
    setLocations(temp);
  }, [filter, locationList]);

  useEffect(() => {
    updateLocations();
  }, [updateLocations]);

  return (
    <div>
      {/* {console.log("datasetForAttraction", datasetForAttraction)} */}
      <Navbar></Navbar>
      <ImageSlider covers={coverImages}></ImageSlider>
      <Description
        title={filteredResult.name}
        description={filteredResult.description}
        display={"block"}
      ></Description>

      {/* <div className="container-fluid" id="top-attraction-dist"> */}
      <div className="container top-attraction-dist">
        <h4 id="filter-heading" style={{ marginBottom: "15px" }}>
          Top attractions in {filteredResult.name}
        </h4>
        <AttractionCards dataList={datasetForAttraction}></AttractionCards>
      </div>
      {/* </div> */}

      <div className="container container-bottom">
        <div className="row mt-5 mx-2">
          <div className="col-md-3 mb-3 filter-part">
            {matches ? (
              <div className="container filter-heading">
                <h4 id="filter-heading">Filter Locations</h4>
                <hr />
                <h5>Provinces</h5>
                {provincesCategory.map((item, index) => (
                  <CheckBox
                    label={item.name}
                    onChange={(input) =>
                      filterSelect("PROVINCE", input.checked, item)
                    }
                    checked={filter.provincesCategory.includes(item.id)}
                  ></CheckBox>
                ))}
                <hr />
                <h5>Things To Do</h5>
                {thingsToDoCategory.map((item, index) => (
                  <CheckBox
                    label={item.activityName}
                    onChange={(input) =>
                      filterSelect("THINGSTODO", input.checked, item)
                    }
                    checked={filter.thingsToDoCategory.includes(item.id)}
                  ></CheckBox>
                ))}
                <hr />
                <div className="clear-filter">
                  <button className="btn-clear-filter" onClick={clearFilter}>
                    RESET
                  </button>
                </div>
              </div>
            ) : (
              <div className="container filter-heading filter-heading-mobile">
                <div
                  className="filter-heading-btn"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <h4
                    id="filter-heading"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Filter Locations
                  </h4>
                  <div
                    className="btn-arrow"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <BsArrowDownShort size={30}></BsArrowDownShort>
                  </div>
                </div>
                <div class="collapse" id="collapseExample">
                  <hr />
                  <h5>Provinces</h5>
                  {provincesCategory.map((item, index) => (
                    <CheckBox
                      label={item.name}
                      onChange={(input) =>
                        filterSelect("PROVINCE", input.checked, item)
                      }
                      checked={filter.provincesCategory.includes(item.id)}
                    ></CheckBox>
                  ))}
                  <hr />
                  <h5>Things To Do</h5>
                  {thingsToDoCategory.map((item, index) => (
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("THINGSTODO", input.checked, item)
                      }
                      checked={filter.thingsToDoCategory.includes(
                        item.thingsToDo
                      )}
                    ></CheckBox>
                  ))}
                  <hr />
                  <div className="clear-filter">
                    <button className="btn-clear-filter" onClick={clearFilter}>
                      RESET
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-9 filter-result-part">
            <div className="container filter-result-heading">
              <h4 id="filter-result-heading">All Locations</h4>
            </div>

            <AllLocationCardView dataList={locations}></AllLocationCardView>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Place;
