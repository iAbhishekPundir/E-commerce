import "./App.css";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Header } from "./frontend/components/Header/Header";
import { Home } from "./frontend/pages/Home/Home";
import { ProductListing } from "./frontend/pages/ProductListing/ProductListing";
import { CategoriesListing } from "./frontend/pages/CategoriesListing/CategoriesListing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/productListing" element={<ProductListing/>}/>
        <Route path="/categoryListing" element={<CategoriesListing />}/>
      </Routes>
    </>
  );
}

export default App;
