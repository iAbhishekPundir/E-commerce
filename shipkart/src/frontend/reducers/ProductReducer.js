import React from 'react'
export const initialState = {
  isLoading: true,
  error: null,
  categories: [],
  products: [],
  cart: [],
  wishlist: [],
  filters: {
    searchValue: null,
    sort: null,
    selectedCategories: [],
    selectedSizes: [],
    rating: null,
    price: null,
    byStock: true,
  },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES":
      console.log(action.payload);
      return { ...state, isLoading: false, categories: action.payload };
    case "INITIALIZE_PRODUCTS":
      console.log(action.payload);
      return { ...state, isLoading: false, products: action.payload };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "ADD_TO_CART":
      const addedProduct = state.products.find((product)=> product.id === action.payload);
      console.log(addedProduct);
      return {...state, cart: addedProduct}
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
