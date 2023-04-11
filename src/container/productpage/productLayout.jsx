import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Filter from "./components/filter";
import ProductCard from "./components/productCard";
const ProductLayout = () => {
  return (
    <div className="container">
      <div className="product-search">
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
          <div className="search-result">

            <h4>Search Result :-)</h4>
      <div className="row">
        <div className="col-md-3">
            <Filter />
          </div>
        <div className="col-md-9">
            <ProductCard/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductLayout;
