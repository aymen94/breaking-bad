import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Character extends Component {
  render() {
    let user = this.props.user;
    return (
      <Card border="success" className="m-1" style={{ width: "20rem" }}>
        <Card.Img
          width={500}
          height={500}
          alt="500x500"
          variant="top"
          loading="lazy"
          src={user.img}
        />
        <Card.Header>
          <Card.Title>
            {user.char_id} -{" "}
            <span className="firstLetter">{user.name.charAt(0)}</span>
            {user.name.substring(1)}
          </Card.Title>
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Nickname: {user.nickname}</ListGroupItem>
          <ListGroupItem>Birthday: {user.birthday}</ListGroupItem>
          <ListGroupItem>Actor: {user.portrayed}</ListGroupItem>
          <ListGroupItem>
            Occupation:{" "}
            {user.occupation.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default Character;
