import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

function Tile(props) {
  return (
    <Col xs={4} md={3} lg={2} style={{ padding: "3px" }}>
      <Card
        onClick={() => props.onSelect(props.name)}
        style={{ cursor: "pointer" }}
      >
        {/* {console.log(props.name)} */}
        <Card.Img
          variant="top"
          src={props.src}
          style={{ height: "10rem", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Tile;
