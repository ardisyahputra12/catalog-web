import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Catalog from "./Catalog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>
);

reportWebVitals();
