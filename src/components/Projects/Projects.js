import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import listtodo from "../../Assets/listtodo.png";
import weatherapp from "../../Assets/weatherapp.png.jpg";
import blogapp from "../../Assets/blogapp.png.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> My Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogapp}
              title="Blog-App"
              ghLink="https://github.com/satyampathak12/Blog-App-using-MERN"
              demoLink="https://blog-app-using-mern-2.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={listtodo}
            title="List-To-Do"
             ghLink="https://github.com/SatyamPathak12/LimeTray-Assignment"
            demoLink="https://lime-tray-assignment-xpiy-iyxkkrirn-satyam-pathaks-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={weatherapp}
             title="Weather-App"
             ghLink="https://github.com/satyampathak12/Weather-App"
             demoLink="https://weather-app-zeta-olive-25.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
