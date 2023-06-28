import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import teens from "../../Assets/Projects/Teens.png";
import Dance from "../../Assets/Projects/TurkishDance.png";
import kids from "../../Assets/Projects/Kids.png";
import family from "../../Assets/Projects/FamilyDay.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Unsere <strong className="purple"> Sportangebot </strong>
        </h1>
        <p style={{ color: "white" }}>
          Wir heißen alle Interessierten willkommen!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dance}
              isBlog={false}
              title="Türkische Volkstänze für Frauen und Kinder"
              description="Ein spezielles Angebot für Frauen mit Volkstänzen, die ein Teil der Türkischen Kultur und Tradition sind."
              time="Kinder - Montags: 18.30 - 20.00 Uhr  "
              time2="Frauen - Montags: 20.00 - 21.30 Uhr" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kids}
              isBlog={false}
              title="Ballsport für Kids"
              description="Komm und spiel mit! Wir haben eine gute Zeit, die den Kindern Spaß macht."
              time= "Samstags 11.00 - 13-00 Uhr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teens}
              isBlog={false}
              title="Ballsport für Teens"
              description="Ein kostenloses Angebot für junge Menschen, die sich für alle Formen von Ballsport interessieren. "
             time= "Donnerstags 17.00 - 18.30 Uhr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={family}
              isBlog={false}
              title="Family Day"
              description="Kommt und bewegt euch mit uns! Alle Familien sind zum kostenlosen Kinderturnen eingeladen."
             time= "Sonntags 10.00 - 13.00 Uhr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
