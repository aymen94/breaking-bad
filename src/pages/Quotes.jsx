import React, { Component } from "react";
import { API_QUOTES } from "../common/GlobalVariable";
import { Table, Spinner, Row, Col } from "react-bootstrap";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadData: false,
      quotes: [],
    };
  }

  fetchCharacters() {
    fetch(API_QUOTES)
      .then((response) => response.json())
      .then((qisodeResponse) => {
        this.setState({ quotes: qisodeResponse, loadData: true });
      });
  }

  componentDidMount() {
    if (!this.state.loadData) {
      this.fetchCharacters();
    }
  }

  render() {
    if (this.state.loadData) {
      let quotes = this.state.quotes;
      return (
        <Col md={12}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>author</th>
                <th>quote</th>
                <th>series</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((q) => (
                <tr key={q.quote_id}>
                  <td>{q.author}</td>
                  <td>{q.quote}</td>
                  <td>{q.series}</td>
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

export default Quotes;
