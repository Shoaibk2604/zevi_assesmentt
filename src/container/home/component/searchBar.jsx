import React from "react";
import { BiSearch } from "react-icons/bi";
import SuggestionBox from "./suggestionBox";
const SearchBox = () => {
  return (
    <>
      <div className="position-search search-bar-size">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn" type="submit">
            {" "}
            <BiSearch />{" "}
          </button>
        </form>
      </div>
      <SuggestionBox />
    </>
  );
};

export default SearchBox;
