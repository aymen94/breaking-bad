import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <ListGroup className="list-group-flush roundBorder">
            <ListGroupItem>
              Repo:{" "}
              <a href="https://github.com/aymen94/breaking-bad">
                https://github.com/aymen94/breaking-bad
              </a>
            </ListGroupItem>
            <ListGroupItem variant="dark">
              Personal website:{" "}
              <a href="https://aymen94.github.io/">
                https://aymen94.github.io/
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default About;
