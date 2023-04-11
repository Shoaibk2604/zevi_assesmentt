import React, { useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import productimg from "../../../Assests/model3.jpg";
const ProductCard = () => {
  const[wishlist,setWishList]= useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card-wrapper">
              <div className="product-image">
                  <img src={productimg} alt="" width={100} />
                  <div className="product-wishlist-btn">
                  <span>{wishlist?<AiFillHeart onClick={()=>setWishList(!wishlist)}/>:<AiOutlineHeart onClick={()=>setWishList(!wishlist)}/>}</span>
                  </div>
                <div className="product-btn">
                <button className="btn">View Product</button>
                </div>
              </div>
              <div className="product-detail">
                <div className="product-title">
                  <h6>Round Neck Cotton Tee</h6>
                </div>
                <div className="product-price">
                  <span className="price">Rs 599</span><span className="offer-price"> Rs 499</span>
                </div>
                <div className="product-rating">
                  <div className="checkClass d-flex align-items-center">
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <AiFillStar className="checked" />
                    <span>(150)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default ProductCard;
