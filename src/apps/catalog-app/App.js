import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import GuestBook from "./pages/GuestBook";
import AskMe from "./pages/AskMe";
import Faq from "./pages/faq";
import Layout from "./layouts/Layout";
import './index.css';

class CatalogApp extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="guest-book" element={<GuestBook />} />
            <Route path="ask-me" element={<AskMe />} />
            <Route path="ask-me" element={<AskMe />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default CatalogApp;
