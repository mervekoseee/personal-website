import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.time}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.time2}
        </Card.Text>

        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
