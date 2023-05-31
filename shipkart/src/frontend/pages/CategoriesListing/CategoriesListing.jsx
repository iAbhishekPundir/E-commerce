import React, { useContext } from "react";
import { ProductDataContext } from "../../contexts/Data/ProductDataContext";
import "./CategoriesListing.css";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import cover from "../CategoriesListing/cover.png";

export const CategoriesListing = () => {
  const { state } = useContext(ProductDataContext);
  console.log(state.categories);
  return (
    <>
      <section className="category-container ">
        <img className="homeImg" src={cover} alt="cover" />
      </section>
      <section className="services-section">
        <div className="services-div">
          <p className="services">Free Shipping</p>
        </div>
        <div className="services-div">
          <p className="services">Ease Return</p>
        </div>
        <div className="services-div">
          <p className="services">Branded items</p>
        </div>
        <div className="services-div">
          <p className="services">Support 24 * 7</p>
        </div>
      </section>
        <div className="shop-by-category-div">
            <p>SHOP BY CATEGORY</p>
        </div>
      <div className="category-card-container">
        {state?.categories?.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </>
  );
};
