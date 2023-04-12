import { Rating } from "@mui/material";
import React, { useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import productimg from "../../../Assests/model4.jpg";
const ProductCard = ({ item }) => {
  const [wishlist, setWishList] = useState(false);
  return (
    <>
      <div className="product-card-wrapper">
        <div className="product-image">
          <img src={item.image} alt="" width={100} />
          <div className="product-wishlist-btn">
            <span title="Add to wishlist">
              {wishlist ? (
                <AiFillHeart
                  id="wish-btn-color"
                  onClick={() => setWishList(false)}
                />
              ) : (
                <AiOutlineHeart onClick={() => setWishList(true)} />
              )}
            </span>
          </div>
          <div className="product-btn">
            <button className="btn">View Product</button>
          </div>
        </div>
        <div className="product-detail">
          <div className="product-title ">
            <h6 className="text-short">{item.title}</h6>
          </div>
          <div className="product-price">
            <span className="price">Rs {item.price + 174}</span>
            <span className="offer-price"> Rs {item.price}</span>
          </div>
          <div className="product-rating">
            <div className="checkClass d-flex align-items-center">
              <Rating value={Math.round(item.rating.rate)} readOnly />
              <span>({item.rating.count})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
