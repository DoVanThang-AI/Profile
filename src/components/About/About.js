import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/aboutv2.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      {/* <Row
        style={{
          justifyContent: "center",
          padding: "10px",
          backgroundImage: `url(${laptopImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px" // Màu nền trắng với độ trong suốt để văn bản dễ đọc hơn
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I'M</strong>
          </h1>
          <Aboutcard />
        </Col>
      </Row> */}
      <Row
        style={{
          justifyContent: "center",
          padding: "10px",
          backgroundImage: `url(${laptopImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "#FFFFFF" // Màu trắng cho văn bản
        }}
      >
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px", // Nền bán trong suốt để làm nổi bật văn bản
            color: "#FFFFFF" // Màu trắng cho văn bản
          }}
        >
          <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I'M</strong>
          </h1>
          <Aboutcard />
        </Col>
      </Row>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
