import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import styles from "./index.css";
import Guides from "./pages/Guides/Guides";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
