import React from "react";
import ProductCard from "./ProductCard";
import products from "./Products";
import imageSrc from "../../image/download1.png"
import "./RenderCard.scss";

const RenderCard = () => {
  return (
    <>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={imageSrc}
            title={product.title}
            heading={product.heading}
            description={product.description}
            highlights={product.highlights}
            additionalInfo={product.additionalInfo}
            discount={product.discount}
            rating={product.rating}
            review={product.review}
            fixedRating={product.fixedRating}
          />
        ))}
      </div>
    </>
  );
};

export default RenderCard;
