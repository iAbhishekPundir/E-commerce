import React from 'react'
import "./CategoryCard.css"
import "../../pages/CategoriesListing/CategoriesListing.css"
export const CategoryCard = ( {category} ) => {
    const {image, categoryName, description} = category;
  return (
    <>
        <div className='category-card'>
                    <div className='image-div'>
                        <img src={image} alt={categoryName} />
                    </div>
                    <div className='category-name'>
                        <h2>{categoryName}</h2>
                    </div>
                    <div className='category-description'>
                        <p>{description}</p>
                    </div>
                </div>
    </>
  )
}
