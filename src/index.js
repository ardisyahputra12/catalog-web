import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import CatalogApp from "./apps/catalog-app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Change this element for other app */}
      <CatalogApp />

    </BrowserRouter>
  </React.StrictMode>
);
