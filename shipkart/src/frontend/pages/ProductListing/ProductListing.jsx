import React, { useContext } from 'react'
import { ProductDataContext } from '../../contexts/Data/ProductDataContext'
import {ProductCard} from "../../components/ProductCard/ProductCard";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
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
        state.products && 
            <Grid container >
            {
                state.products.map((product)=>(
                    <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                ))
            }
            </Grid>
       
    }
    </>
  )
}
