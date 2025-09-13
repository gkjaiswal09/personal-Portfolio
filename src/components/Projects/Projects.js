import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ObstacleX – Autonomous Obstacle-Avoiding Car"
              description="Achieved 95% obstacle detection accuracy using ultrasonic sensors and motor drivers. Conducted 50+ field tests, reducing collisions by 90%. Optimized sensor polling and motor control pipeline, improving decision speed by 20%."
              ghLink="https://github.com/gkjaiswal09/ObstacleX"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Holidify – Full-Stack Travel Platform"
              description="Designed REST APIs with 30% lower latency under load testing. Implemented JWT-based authentication and secure CRUD, boosting engagement by 25%. Applied responsive design, improving accessibility and retention."
              ghLink="https://github.com/gkjaiswal09/Holidify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Drum Kit Simulation – Interactive Web App"
              description="Built interactive audio app generating 200 daily plays. Engineered DOM event handling with sub-50ms latency. Enhanced UI/UX via animations, raising session duration by 40%."
              ghLink="https://github.com/gkjaiswal09/DrumKit"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
