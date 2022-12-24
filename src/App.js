import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import GuestBook from "./pages/GuestBook";
import Layout from "./layouts/Layout";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="guest-book" element={<GuestBook />} />
          </Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
