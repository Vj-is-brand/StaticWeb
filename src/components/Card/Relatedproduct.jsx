import React from "react";
import imageSrc from "../../image/download1.png";
import "./Relatedproduct.scss";

const Relatedproduct = () => {
  return (
    <div className="deals">
      <p className="dealTitle">Related deals you might like for</p>
      <div className="cardBox">
        <div className="relatedProductContainer">
          <img src={imageSrc} />
          <div className="contentBox">
            <button>20% off</button>
            <button>Limited Time</button>
            <div className="titlePrice">
              <p className="name">Webbuilder 1</p>
              <p className="details">Computer Modern clasic with wix support</p>
              <div className="price">
                <p>$39.96 </p>
                <div className="discountPrice">
                  <p className="mrp">$49.96 </p>
                  <p className="priceOff">(20% off )</p>
                </div>
              </div>

              <button className="viewBtn">View Deal</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cardBox">
        <div className="relatedProductContainer">
          <img src={imageSrc} />
          <div className="contentBox">
            <button>20% off</button>
            <button>Limited Time</button>
            <div className="titlePrice">
              <p className="name">Webbuilder 1</p>
              <p className="details">Computer Modern clasic with wix support</p>
              <div className="price">
                <p>$39.96 </p>
                <div className="discountPrice">
                  <p className="mrp">$49.96 </p>
                  <p className="priceOff">(20% off )</p>
                </div>
              </div>

              <button className="viewBtn">View Deal</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cardBox">
        <div className="relatedProductContainer">
          <img src={imageSrc} />
          <div className="contentBox">
            <button>20% off</button>
            <button>Limited Time</button>
            <div className="titlePrice">
              <p className="name">Webbuilder 1</p>
              <p className="details">Computer Modern clasic with wix support</p>
              <div className="price">
                <p>$39.96 </p>
                <div className="discountPrice">
                  <p className="mrp">$49.96 </p>
                  <p className="priceOff">(20% off )</p>
                </div>
              </div>

              <button className="viewBtn">View Deal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatedproduct;
