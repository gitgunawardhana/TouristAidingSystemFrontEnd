import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div class="input-group rounded search-div-css">
          <input
            type="search"
            class="form-control rounded search-input-css"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span
            class="input-group-text border-0 search-btn-css"
            id="search-addon"
          >
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
