import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../API/api";
import { saveOrignalData, saveProductData } from "../../Redux/productSlice";
import Filter from "./components/filter";
import ProductCard from "./components/productCard";
const ProductLayout = () => {
  const { productData } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetchProductData();
      dispatch(saveProductData(data.data));
      dispatch(saveOrignalData(data.data));
    })();
  }, []);
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
            <div className="row">

            {productData &&
              productData.map((item, index) => {
                return (
                  <div className="col-md-3 only-product-three" key={item.id}> 
                 <ProductCard item={item}  />;
            </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
