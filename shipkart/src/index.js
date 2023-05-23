import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ProductDataProvider,
  ProductDataContext,
} from "./frontend/contexts/Data/ProductDataContext";
import {
  AuthProvider,
  AuthContext,
} from "./frontend/contexts/Auth/AuthContext";

export { ProductDataContext };
export { AuthContext };

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductDataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
