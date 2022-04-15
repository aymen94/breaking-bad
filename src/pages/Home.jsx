import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <div className="BreakingBad">
          <div className="logo">
            <p>
              <span className="element">
                Br<span className="number">35</span>
              </span>
              eaking
            </p>
            <p>
              <span className="element">
                Ba<span className="number">56</span>
              </span>
              d
            </p>
          </div>
          <footer>
            <p>by Aymen</p>
          </footer>
        </div>
      </Container>
    );
  }
}

export default Home;
