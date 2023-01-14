import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-g.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}> <span className="purple"> SİZLERE KENDİMİ TANITAYIM </span> </h1>
            <p className="home-about-body">
            
              <i>
                <b className="purple"> HTML, CSS, Javascript, C# </b>  ile ilgilenmekteyim.
              </i>
              <br />
              <br />
              Web tasarımı ve web programlamayı Javascript kütüphanesi olan &nbsp;
              <i>
                <b className="purple">React </b> teknolojisi kullanarak yapmaktayım.{" "}
                <b className="purple">
                  Bootstrap {""}
                </b>
                kullanarak tasarımları özelleştiriyorum.
              </i>
              <br />
              <br />
              Mümkün olduğunca <b className="purple">Node.js</b> ve
              <i>
                <b className="purple">
                  {" "}
                 MongoDB
                </b>
              </i>
              &nbsp; ile veritabanı bağlantısı sağlamaktayım.
             
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
            <h1>Benimle İletişime Geçmek İçin</h1>
   
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mervekoseee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/merve-mira%C3%A7-k%C3%B6se-4906301a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
