import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Character extends Component {
  render() {
    let user = this.props.user;
    return (
      <Card bg="dark" border="white" text="white" style={{ width: "20rem" }} className="m-1 roundBorder">
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
          <ListGroupItem variant="dark">Nickname: {user.nickname}</ListGroupItem>
          <ListGroupItem variant="dark">Birthday: {user.birthday}</ListGroupItem>
          <ListGroupItem variant="dark">Actor: {user.portrayed}</ListGroupItem>
          <ListGroupItem variant="dark"> 
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
