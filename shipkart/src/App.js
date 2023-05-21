import "./App.css";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Landing } from "./Landing";
function App() {
  return (
    <>
      <h1>Header</h1>
      <Routes>
        <Route path="/" element={<Landing/ >} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
