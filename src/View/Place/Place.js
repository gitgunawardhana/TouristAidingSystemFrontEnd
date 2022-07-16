import React, { useCallback, useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useParams } from "react-router-dom";
import AllLocationCardView from "../../Component/AllLocationCardView/AllLocationCardView";
import allLocationDataList from "../../Component/AllLocationDataList";
import CheckBox from "../../Component/CheckBox/CheckBox";
import provincesCategory from "../../Component/CheckBox/ProvincesCategory";
import thingsToDoCategory from "../../Component/CheckBox/ThingsToDoCategory";
import Description from "../../Component/Description/Description";
import ImageSlider from "../../Component/ImageSlider/ImageSlider";
import Navbar from "../../Component/Navbar/Navbar";
import locationDataList from "../../Component/TopLocationDataList";
import useMediaQuery from "../../Component/useMediaQuery";
import "./Place.css";

function Place() {
  const matches = useMediaQuery("(min-width: 768px)");

  const { id } = useParams();

  const filteredResult = locationDataList.find((e) => e.id == id);
  // console.log(filteredResult);

  const coverImages = [
    filteredResult.coverImg0,
    filteredResult.coverImg1,
    filteredResult.coverImg2,
    filteredResult.title,
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
            provincesCategory: [...filter.provincesCategory, item.province],
          });
          break;
        case "THINGSTODO":
          setFilter({
            ...filter,
            thingsToDoCategory: [...filter.thingsToDoCategory, item.thingsToDo],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "PROVINCE":
          const newProvinceCategory = filter.provincesCategory.filter(
            (e) => e !== item.province
          );
          setFilter({ ...filter, provincesCategory: newProvinceCategory });
          break;
        case "THINGSTODO":
          const newThingsToDoCategory = filter.thingsToDoCategory.filter(
            (e) => e !== item.thingsToDo
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
      temp = temp.filter((e) => filter.provincesCategory.includes(e.province));
    }

    if (filter.thingsToDoCategory.length > 0) {
      temp = temp.filter((e) => {
        const check = e.thingsToDo.find((thingsToDo) =>
          filter.thingsToDoCategory.includes(thingsToDo)
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
      {/* {console.log(filter)} */}
      {console.log("filter", locations)}
      <Navbar></Navbar>
      <ImageSlider covers={coverImages}></ImageSlider>
      <Description description={filteredResult.description}></Description>
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
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("PROVINCE", input.checked, item)
                    }
                    checked={filter.provincesCategory.includes(item.province)}
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
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <div className="container filter-heading">
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
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("PROVINCE", input.checked, item)
                      }
                      checked={filter.provincesCategory.includes(item.province)}
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
                      Reset
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
    </div>
  );
}

export default Place;
