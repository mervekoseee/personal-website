import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaChrome, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}> <span className="purple"> Sei ein Teil davon! </span> </h1>
            <p className="home-about-body">
            
              <i>
                 Offene Sportangebote  <b className="purple">Kostenlos</b> in der Heuenhalle!
              </i>
              <br />
              <br />
              Sport verbindet!  &nbsp;
              <i>
              Mit Sportangeboten für alle Altersgruppen wollen wir erreichen, dass jeder in unserer Nachbarschaft Spaß haben kann.
              </i>
              <br />  
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Kontaktiere uns</h1>
            Können sie uns über die unten aufgeführten Kontaktdaten kontaktieren.
            <br/>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/opensportssvgo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto: info@svgo-bremen.de"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMailBulk />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
