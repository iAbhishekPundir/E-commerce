import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const {
    _id,
    trending,
    title,
    size,
    reviews,
    rating,
    price,
    original_price,
    in_stock,
    image,
    id,
    description,
    delivery_time,
    category,
  } = product;
  return (
    <>
      <div className="child-container">
        <div className="image-div"><img src={image} alt={title} /></div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </>
  )
};
