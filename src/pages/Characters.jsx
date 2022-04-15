import React, { Component } from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import { API_CHARACTER } from "../common/GlobalVariable";
import Character from "../common/Character";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadData: false,
      users: [],
    };
  }

  fetchCharacters() {
    fetch(API_CHARACTER)
      .then((response) => response.json())
      .then((episodeResponse) => {
        this.setState({ users: episodeResponse, loadData: true });
      });
  }

  componentDidMount() {
    if (!this.state.loadData) {
      this.fetchCharacters();
    }
  }
  render() {
    if (this.state.loadData) {
      let users = this.state.users;
      let characters = users.map((user) => (
        <Character user={user} key={user.char_id} />
      ));
      return (
        <Row md={12} className="justify-content-md-center">
          {characters}
        </Row>
      );
    }
    return (
      <Row className="mt-4 justify-content-md-center">
        <Col md="auto">
          <Spinner animation="grow" variant="success" />
        </Col>
      </Row>
    );
  }
}

export default Characters;
