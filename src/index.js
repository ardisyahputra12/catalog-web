import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Catalog from "./Catalog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <h2 className="pb-2 mb-4 border-bottom">Our Books</h2>
      <div className="row">
        <Catalog />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
