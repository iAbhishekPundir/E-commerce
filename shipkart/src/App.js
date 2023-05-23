import "./App.css";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Header } from "./frontend/components/Header/Header";
import { Home } from "./frontend/pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
