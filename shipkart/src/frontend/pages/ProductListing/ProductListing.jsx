import React, { useContext } from 'react'
import { ProductDataContext } from '../../contexts/Data/ProductDataContext'
import {ProductCard} from "../../components/ProductCard/ProductCard";
import "./ProductListing.css";
export const ProductListing = () => {
    const {state} = useContext(ProductDataContext);

    if(state.isLoading) {
        return <p>Loading...</p>
    }
    if(state.error) {
        return <p>Not found...</p>
    }

  return (
    <>
    {
        state.products && <div>
            {
                state.products.map((product)=>(
                    <div key={product.id} className='container'>
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    }
    </>
  )
}
