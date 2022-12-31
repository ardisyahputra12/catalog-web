import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import NewsApp from "./apps/news-app/NewsApp";
// import CounterApp from "./apps/counter-app/CounterApp";
// import MyForm from "./apps/my-form-app/MyFormApp";
import App from "./apps/spa-react-router/App";
// import CatalogApp from "./apps/catalog-app/CatalogApp";
// import ContactApp from "./apps/contact-app/ContactApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Change this element for other app */}
      <App />

    </BrowserRouter>
  </React.StrictMode>
);
