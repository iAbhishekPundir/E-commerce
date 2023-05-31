import React, { createContext, useEffect, useReducer } from 'react'
import { productReducer, initialState } from '../../reducers/ProductReducer';
export const ProductDataContext = createContext();

export const ProductDataProvider = ( {children}) => {
  
    const [state, dispatch] = useReducer(productReducer, initialState);

    const getCategories= async () => {
        try {
            const response = await fetch("/api/categories");
            const {categories} = await response.json();
            // console.log(categories);
            dispatch({type:"INITIALIZE_CATEGORIES", payload: categories});
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_ERROR", payload: error});
        }
    }

    const getProducts = async () => {
        try {
            const response = await fetch("/api/products");
            const {products} = await response.json();
            console.log(products);
            dispatch({type:"INITIALIZE_PRODUCTS", payload: products})
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_ERROR", payload: error});
        }
    }

    const getCart = async () => {
        try {
            const response = await fetch("/api/user/cart", {
                method:"GET",
                headers:{
                    authorization:localStorage.getItem("encodedToken")
                }
            })
            const data= await response.json();
            console.log(data.cart);
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_ERROR", payload: error});
        }
    }

    useEffect(() => {
        getCategories();
        getProducts();
        getCart();
    }, []);

  return (
    <>
        <ProductDataContext.Provider value={{state}}>
            {children}
        </ProductDataContext.Provider>
    </>
  )
}
