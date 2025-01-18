import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";
import { CartIdProvider } from "./context/cartIds";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <GoogleOAuthProvider clientId="854940596531-pe3tvrsec94arejuc24fbl0ie44dn0kk.apps.googleusercontent.com">
      <SearchProvider>
        <CartProvider>
          <CartIdProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartIdProvider>
        </CartProvider>
      </SearchProvider>
    </GoogleOAuthProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
