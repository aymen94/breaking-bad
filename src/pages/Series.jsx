import React, { Component } from "react";
import { API_EPISODES } from "../common/GlobalVariable";
import { Table, Spinner, Row, Col } from "react-bootstrap";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadData: false,
      episodes: [],
    };
  }

  fetchCharacters() {
    fetch(API_EPISODES)
      .then((response) => response.json())
      .then((episodeResponse) => {
        this.setState({ episodes: episodeResponse, loadData: true });
      });
  }

  componentDidMount() {
    if (!this.state.loadData) {
      this.fetchCharacters();
    }
  }

  render() {
    if (this.state.loadData) {
      let episodes = this.state.episodes;
      return (
        <Col md={12}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Season</th>
                <th>Episode</th>
                <th>title</th>
                <th>series</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((ep) => (
                <tr key={ep.episode_id}>
                  <td>{ep.season}</td>
                  <td>{ep.episode}</td>
                  <td>{ep.title}</td>
                  <td>{ep.series}</td>
                  <td>{ep.air_date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
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

export default Series;
