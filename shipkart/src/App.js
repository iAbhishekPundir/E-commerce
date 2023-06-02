// import "./App.css";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Header } from "./frontend/components/Header/Header";
import { Home } from "./frontend/pages/Home/Home";
import { ProductListing } from "./frontend/pages/ProductListing/ProductListing";
import { CategoriesListing } from "./frontend/pages/CategoriesListing/CategoriesListing";
import { ProductDetail } from "./frontend/components/ProductDetail/ProductDetail";
import { Cart } from "./frontend/pages/Cart/Cart";
import { Wishlist } from "./frontend/pages/Wishlist/Wishlist";
import { SignIn } from "./frontend/pages/Login/SignIn";
import { Footer } from "./frontend/pages/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <SignIn /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/productListing" element={<ProductListing/>}/>
        <Route path="/categoryListing" element={<CategoriesListing />}/>
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route  path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
