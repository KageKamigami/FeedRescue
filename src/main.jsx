import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FindFood from "./pages/FindFood";
import SignIn from "./pages/SignIn";
import RestaurantForm from "./pages/RestaurantForm";
import Email from "./pages/Email";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/FindFood" element={<FindFood />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RestaurantForm" element={<RestaurantForm />} />
        <Route path="/Email" element={<Email />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
