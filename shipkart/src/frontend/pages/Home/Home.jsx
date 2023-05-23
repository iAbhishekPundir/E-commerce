import React from 'react'
import { ProductListing } from '../ProductListing/ProductListing';

export const Home= () => {
  const getData = async () => {
    try {
      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
      }
      const response = await fetch("api/auth/login", {
        method: 'POST',
        body: JSON.stringify(creds)
      });
      
      const fetchedData = await response.json();
      const {encodedToken} = fetchedData;
      localStorage.setItem("encodedToken", encodedToken);
      console.log(fetchedData);
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
    <div onClick={getData}>Home Page for E-commerce</div>
    <ProductListing/>
    </>
    
  )
}
