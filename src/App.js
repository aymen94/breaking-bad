import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Routing from "./routing/Routing";
import MenuNavbar from "./components/navbar/MenuNavbar";

function App() {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Container>
        <Routing />
      </Container>
    </BrowserRouter>
  );
}

export default App;
