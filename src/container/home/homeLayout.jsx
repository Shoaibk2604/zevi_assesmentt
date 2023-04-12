import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchBox from "./component/searchBar";
function HomeLayout() {
  return (
    <div className="home-bg">
      <div className="home-container">
        <div className="product-page-btn">
          <Link to="/productpage">
            <h6>
              <BiCart /> SHOP ALL
            </h6>
          </Link>
        </div>
        <SearchBox />
      </div>
    </div>
  );
}

export default HomeLayout;
