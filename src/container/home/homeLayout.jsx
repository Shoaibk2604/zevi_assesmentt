import React from "react";
import SearchBox from "./component/searchBar";
import SuggestionBox from "./component/suggestionBox";
function HomeLayout() {
  return (
    <div className="home-bg">
      <div className="container">
        <SearchBox />
      <SuggestionBox />
      </div>
    </div>
  );
}

export default HomeLayout;
