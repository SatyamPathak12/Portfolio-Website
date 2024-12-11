import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
<Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          ALLOW ME TO <span className="purple"> INTRODUCE MYSELF </span> 
        </h1>
        <p className="home-about-body">
          I am a final-year B.Tech student specializing in ECE from <b className="purple">MMMUT Gorakhpur.</b>. 🎓
          <br />
          <br />
          I have a strong command of programming languages such as 
          <i>
            <b className="purple"> C++ </b> and <b className="purple"> JavaScript. </b>
          </i>
          <br />
          <br />
          My primary interests lie in developing innovative 
          <i>
            <b className="purple"> Web technologies and products. </b>
          </i>
          <br />
          <br />
          I am passionate about creating solutions using <b className="purple">Node.js</b>, and I love working with modern JavaScript frameworks and libraries like 
          <i>
            <b className="purple"> React.js and Next.js.</b>
          </i>
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
        <h1>CONNECT WITH ME</h1>
        <p>
          I’m always open to making new connections! Feel free to reach out.
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/satyampathak12"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/satyampathak164"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/satyampathak12/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/beingspandit"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
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
