import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SuggestionBox from "./suggestionBox";
const SearchBox = () => {
  const [showSuggetionBox, setShowSuggetionBox] = useState(false);
  return (
    <>
      <div className="position-search ">
        <div className="search-bar">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onFocus={() => setShowSuggetionBox(true)}
            />
            <button className="btn" type="submit">
              {" "}
              <BiSearch />{" "}
            </button>
          </form>
        </div>

        <div
          className="suggestion-box-container"
          onClick={() => setShowSuggetionBox(true)}
        >
          {showSuggetionBox && <SuggestionBox />}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
