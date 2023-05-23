// import React from 'react'
export const initialState = {
    isLoading: true,
    error: null,
    categories: [],
    products: [],
    cart:[],
    wishlist:[],
    filters: {
        searchValue: null,
        sort: null,
        selectedCategories: [],
        selectedSizes: [],
        rating: null,
        price:null,
        byStock:true
    }
}
export const productReducer = (state, action) => {

    switch(action.type) {

        case "INITIALIZE_CATEGORIES":
            console.log(action.payload);
            return {...state, categories: action.payload}
        case "INITIALIZE_PRODUCTS":
            console.log(action.payload);
            return {...state, products: action.payload}
    }
}
