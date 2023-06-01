import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import logo from "../../src/Assets/svgo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copywright">
        <img src={logo}  alt="avatar" />
          <h3>Open Sports wird von der SVGO organisiert. {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.instagram.com/opensportssvgo/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaInstagram/>
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
  );
}

export default Footer;
