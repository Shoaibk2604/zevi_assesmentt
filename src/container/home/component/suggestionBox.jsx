import React from "react";
import outfit1 from "../../../Assests/model6.jpg";
import outfit2 from "../../../Assests/model7.jpg";
import outfit3 from "../../../Assests/model8.jpg";
import outfit4 from "../../../Assests/model4.jpg";
import outfit5 from "../../../Assests/model9.jpg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const SuggestionBox = () => {
  const navigate = useNavigate();
  return (
    <div className="sug-box-container ">
      <div className="sug-box-wrapper">
        <div className="container">
          <div className="latest-trends">
            <h5>Latest Trends</h5>
            <div className="row">
              <div className="col-md-2 product-five">
                <div className="trending-outfit">
                  <img
                    src={outfit1}
                    alt=""
                    width={100}
                    height="100%"
                    onClick={() => navigate("/productpage")}
                  />
                </div>
                <h6 className="text-center">Trend 1</h6>
              </div>
              <div className="col-md-2 product-five">
                <div className="trending-outfit">
                  <img
                    src={outfit2}
                    alt=""
                    width={100}
                    height="100%"
                    onClick={() => navigate("/productpage")}
                  />
                </div>
                <h6 className="text-center">Trend 2</h6>
              </div>
              <div className="col-md-2 product-five">
                <div className="trending-outfit">
                  <img
                    src={outfit3}
                    alt=""
                    width={100}
                    height="100%"
                    onClick={() => navigate("/productpage")}
                  />
                </div>
                <h6 className="text-center">Trend 3</h6>
              </div>
              <div className="col-md-2 product-five">
                <div className="trending-outfit">
                  <img
                    src={outfit4}
                    alt=""
                    width={100}
                    height="100%"
                    onClick={() => navigate("/productpage")}
                  />
                </div>
                <h6 className="text-center">Trend 1</h6>
              </div>
              <div className="col-md-2 product-five">
                <div className="trending-outfit">
                  <img
                    src={outfit5}
                    alt=""
                    width={100}
                    height="100%"
                    onClick={() => navigate("/productpage")}
                  />
                </div>
                <h6 className="text-center">Trend 1</h6>
              </div>
            </div>
          </div>
          <div className="popular-suggestions">
            <h5>Popular Suggestions</h5>
            <div className="outfit-title">
              <h6>
                <Link to="/productpage" className="link-title">
                  {" "}
                  Striped shirt dress
                </Link>
              </h6>
            </div>
            <div className="outfit-title">
              <h6>
                <Link to="/productpage" className="link-title">
                  {" "}
                  Satin shirts
                </Link>
              </h6>
            </div>
            <div className="outfit-title">
              <h6>
                <Link to="/productpage" className="link-title">
                  {" "}
                  Denim jumpsuit
                </Link>
              </h6>
            </div>
            <div className="outfit-title">
              <h6>
                <Link to="/productpage" className="link-title">
                  {" "}
                  Leather Dresses
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;
