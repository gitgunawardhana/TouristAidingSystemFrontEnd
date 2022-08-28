import { useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [dataForSearchDataset, setDataForSearchDataset] = useState([]);
  const [dataForSearchDataset2, setDataForSearchDataset2] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  console.log("props.locateDataSet", props.locateDataSet);
  console.log("props.attractDataSet", props.attractDataSet);

  useEffect(() => {
    setDataForSearchDataset(props.locateDataSet);
    setDataForSearchDataset2(props.attractDataSet);
  });

  console.log("dataForSearchDataset", dataForSearchDataset);

  const onChangeHandler = (text) => {
    let matches = [];
    let matches2 = [];
    if (text.length > 0) {
      matches = dataForSearchDataset.filter((aLocation) => {
        const regex = new RegExp(`${text}`, "gi");
        return aLocation.name.match(regex);
      });
      matches2 = dataForSearchDataset2.filter((aLocation) => {
        const regex = new RegExp(`${text}`, "gi");
        return aLocation.name.match(regex);
      });
    }

    const matchesAll = matches.concat(matches2);
    setSuggestions(matchesAll);
    setSearchText(text);
  };

  const onSuggestHandler = (text) => {
    setSearchText(text);
    setSuggestions([]);
  };

  const onResultSearchHandler = (text) => {
    let textDetails = {
      placeType: "",
      locationId: "",
      attractionId: "",
    };

    var selectedItem = dataForSearchDataset.find((item) => item.name === text);
    if (selectedItem != null) {
      window.location = `/location/${selectedItem.id}`;
    } else {
      selectedItem = dataForSearchDataset2.find((item) => item.name === text);
      window.location = `/attraction/${selectedItem.id}`;
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center search-bar-custom">
        <div className="searchBox-with-suggestions container" style={{}}>
          <div class="input-group rounded search-div-css ">
            <input
              type="search"
              class="form-control rounded search-input-css"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => onChangeHandler(e.target.value)}
              value={searchText}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([]);
                }, 100);
              }}
            />
            <span
              class="input-group-text border-0 search-btn-css"
              id="search-addon"
              onClick={() => onResultSearchHandler(searchText)}
            >
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div className="suggestion-box container p-0 anyClass">
            {suggestions &&
              suggestions.map((suggestion, keyId) => (
                <div
                  key={keyId}
                  className="suggestion-item justify-content-md-center"
                  onClick={() => onSuggestHandler(suggestion.name)}
                >
                  {suggestion.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
