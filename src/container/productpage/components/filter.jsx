import { Rating } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProductData } from "../../../Redux/productSlice";

const Filter = () => {
  const { productData, orignalData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // FILTER function
  const filterHandler = (e) => {
    if (e.target.value === "all") {
      dispatch(saveProductData(orignalData));
      return;
    }
    const filterData = orignalData.filter(
      (item) => e.target.value === item.category
    );
    dispatch(saveProductData(filterData));
  };
  const priceHandler = (e) => {
    if (e.target.value === "UNDER 300") {
      const priceData = orignalData.filter((item) => item.price < 300);
      dispatch(saveProductData(priceData));
    } else {
      const priceData = orignalData.filter((item) => item.price > 300);
      dispatch(saveProductData(priceData));
    }
  };
  const ratingHandle = (e) => {
    if (e.target.value == 5) {
      const ratingData = orignalData.filter(
        (item) => Math.round(item.rating.rate) == 5
      );
      dispatch(saveProductData(ratingData));
    } else if (e.target.value == 4) {
      const ratingData = orignalData.filter(
        (item) => Math.round(item.rating.rate) == 4
      );
      dispatch(saveProductData(ratingData));
    } else if (e.target.value == 3) {
      const ratingData = orignalData.filter(
        (item) => Math.round(item.rating.rate) == 3
      );
      dispatch(saveProductData(ratingData));
    } else if (e.target.value == 2) {
      const ratingData = orignalData.filter(
        (item) => Math.round(item.rating.rate) == 2
      );
      dispatch(saveProductData(ratingData));
    } else {
      const ratingData = orignalData.filter(
        (item) => Math.round(item.rating.rate) == 1
      );
      dispatch(saveProductData(ratingData));
    }
  };

  // FILTER END
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={{ border: "0px" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              FILTER BY CATEGORY
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div
              className="accordion-body"
              style={{ borderBottom: "0.1px solid lightgrey" }}
            >
              <div className="checkClass">
                <input
                  type="radio"
                  name="ok"
                  id="all"
                  value="all"
                  onChange={filterHandler}
                  defaultChecked
                />
                <label htmlFor="all">ALL </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="ok"
                  id="electronic"
                  value="electronics"
                  onChange={filterHandler}
                />
                <label htmlFor="electronic">ELECTRONICS </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="ok"
                  id="women"
                  value="women's clothing"
                  onChange={filterHandler}
                />
                <label htmlFor="women"> WOMEN's CLOATHING </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="ok"
                  id="men"
                  value="men's clothing"
                  onChange={filterHandler}
                />
                <label htmlFor="men"> MEN's CLOATHING </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "0px" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              PRICE RANGE
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div
              className="accordion-body"
              style={{ borderBottom: "0.1px solid lightgrey" }}
            >
              <div className="checkClass">
                <input
                  type="radio"
                  name="price"
                  value="UNDER 300"
                  id="lowprice"
                  onChange={priceHandler}
                />
                <label htmlFor="lowprice"> 1 RS - 300 RS </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="price"
                  value="ABOVE 300"
                  id="highprice"
                  onChange={priceHandler}
                />
                <label htmlFor="highprice"> 300 RS - 999 RS </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "0px" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              RATINGS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div
              className="accordion-body"
              style={{ borderBottom: "0.1px solid lightgrey" }}
            >
              <div className="checkClass">
                <input
                  type="radio"
                  name="rate"
                  id="rating5"
                  value="5"
                  onChange={ratingHandle}
                />
                <label htmlFor="rating5">
                  <Rating name="read-only" value={5} readOnly />
                </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="rate"
                  id="rating4"
                  value="4"
                  onChange={ratingHandle}
                />
                <label htmlFor="rating4">
                  <Rating name="read-only" value={4} readOnly />
                </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="rate"
                  id="rating3"
                  value="3"
                  onChange={ratingHandle}
                />
                <label htmlFor="rating3">
                  <Rating name="read-only" value={3} readOnly />
                </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="rate"
                  id="rating2"
                  value="2"
                  onChange={ratingHandle}
                />
                <label htmlFor="rating2">
                  <Rating name="read-only" value={2} readOnly />
                </label>
              </div>
              <div className="checkClass">
                <input
                  type="radio"
                  name="rate"
                  id="rating1"
                  value="1"
                  onChange={ratingHandle}
                />
                <label htmlFor="rating1">
                  <Rating name="read-only" value={1} readOnly />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
