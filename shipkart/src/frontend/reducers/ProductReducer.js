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
  const { wishlist,  cart} = state;
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
      const addedCartProduct = state.products.find((product)=> product.id === action.payload);
      console.log(addedCartProduct);
      return {...state, cart: [...cart, addedCartProduct]};
    case "ADD_TO_WISHLIST":
      const addedWishlistProduct = state.products.find((product)=> product.id === action.payload);
      console.log(addedWishlistProduct);
      return {...state, wishlist: [...wishlist, addedWishlistProduct]}
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
