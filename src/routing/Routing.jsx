import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Characters from "../pages/Characters";
import Series from "../pages/Series";
import Home from "../pages/Home";
import Quotes from "../pages/Quotes";
import Error404 from "../components/error/404";
import About from "../pages/About";

class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="characters" element={<Characters />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    );
  }
}
export default Routing;
