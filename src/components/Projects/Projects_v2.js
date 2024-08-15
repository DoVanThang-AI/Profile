import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Onchainblock from "../../Assets/Projects/onchainblock.jpg";
import Tapspace from "../../Assets/Projects/Logo.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Onchainblock}
              isBlog={false}
              title="OnchainBlock"
              description={`
                I'm Core Dev Project 
                on infrastructure and raise 20K STRK tokens ~ $60K by 2024
              `}
              ghLink="https://www.starknet-ecosystem.com/projects/e6d336fd-f243-4e35-95be-74d9c6bdc929"
              demoLink="https://x.com/OnchainBlock"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tapspace}
              isBlog={false}
              title="Tapspace"
              description={`
                I'm a Lead Team for project Game of Tapspace
              `}
              ghLink="https://tap-space.com/"
              demoLink="https://tap-space.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
