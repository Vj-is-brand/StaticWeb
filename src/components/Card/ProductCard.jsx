import React from "react";
import "./ProductCard.scss";
import ReactStars from "react-stars";
import { PiCaretDownLight } from "react-icons/pi";

const ProductCard = ({
  id,
  imageSrc,
  title,
  heading,
  description,
  highlights,
  rating,
  review,
  additionalInfo,
  discount,
  fixedRating,
}) => {
  return (
    <div className="card-container">
      <button className="id">{id}</button>
      <div className="card-image-container">
        <img src={imageSrc} alt="product" />
        <p>{title}</p>
      </div>
      <div className="card-info-container">
        <p>
          <b>{heading}</b>- {description}
          {discount && <button className="discount-btn">{discount}</button>}
        </p>
        {highlights && (
          <div className="card-highlight-container">
            <p className="card-highlight-title">
              <b>Main highlights</b>
            </p>
            <div>
              {/* Render highlights */}
              {Array.isArray(highlights) ? (
                // Render highlights as an array of objects
                highlights.map((highlight, index) => (
                  <div key={index} className="card-highlight-content">
                    <p className="card-highlight-point-add ">
                      <button>{highlight.rating}</button> {highlight.title}
                    </p>
                  </div>
                ))
              ) : (
                // Render single highlight
                <div className="card-highlight-content">
                  <p className="card-highlight-point">{highlights}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {additionalInfo && Array.isArray(additionalInfo) && (
          <div className="additional-info-container">
            <p className="additional-info-title">
              <b>Additional Information</b>
            </p>
            <div>
              {/* Render additional information */}
              {additionalInfo.map((info, index) => (
                <div key={index} className="additional-info-content">
                  <p>{info}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="card-more-details">
          Show more <PiCaretDownLight />
        </p>
      </div>
      <div className="card-review-container">
        <div className="card-review-ratings">
          <p className="card-rating">{rating}</p>
          <p className="card-rating-review">{review}</p>
          <ReactStars
            className="card-rating-star"
            starCount={5}
            value={fixedRating}
            readOnly={true}
            half={true}
            edit={false}
          />
        </div>
        <button className="card-view-btn">View</button>
      </div>
    </div>
  );
};

export default ProductCard;
