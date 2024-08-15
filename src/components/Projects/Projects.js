import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sql_certi from "../../Assets/Projects/sql_certi.jpeg";
import database_postgres from "../../Assets/Projects/database_postgresql.jpeg";
import google from "../../Assets/Projects/google.jpeg";
import google1 from "../../Assets/Projects/gooole1.jpeg";
import google2 from "../../Assets/Projects/google_certi2.jpeg";
import google3 from "../../Assets/Projects/google_certi3.jpeg";
import blockchain from "../../Assets/Projects/blockchain.jpeg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Certification <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql_certi}
              isBlog={false}
              title="Scripting with Python and SQL for Data Engineering"
              description="Extract data from different sources and map it to Python data structures.
              Design Scripts to connect and query a SQL database from within Python.
              Apply scraping techniques to read and extract data from a website."
              ghLink="https://coursera.org/share/85d18d87713f84cc1e9a7edf51a289af"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database_postgres}
              isBlog={false}
              title="Database Design and Basic SQL in PostgreSQL"
                description="Utilize psql and SQL commands to implement CRUD operations for tables in a PostgreSQL database.
              Identify and utilize the functions of primary, logical, and foreign keys within a database. 
              Build and differentiate between one-to-many and many-to-many relationships within PostgreSQL"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Building Resilient Streaming Analytics Systems on Google Cloud"
                description="Interpret use-cases for real-time streaming analytics.
                Interoperate Dataflow, BigQuery and Pub/Sub for real-time streaming and analysis.
                Write streaming pipelines and run transformations where necessary.
                Manage data events using the Pub/Sub asynchronous messaging service."
              ghLink="https://www.coursera.org/account/accomplishments/verify/BUZMTMT8X875?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google1}
              isBlog={false}
              title="Building Batch Data Pipelines on Google Cloud"
                description="Review different methods of data loading: EL, ELT and ETL and when to use what
                Run Hadoop on Dataproc, leverage Cloud Storage, and optimize Dataproc jobs.
                Build your data processing pipelines using Dataflow.
                Manage data pipelines with Data Fusion and Cloud Composer"
              ghLink="https://coursera.org/share/0f6c268d003773abde34fdaec4b0a6cc"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google2}
              isBlog={false}
              title="Modernizing Data Lakes and Data Warehouses with Google Cloud"
                description="Differentiate between data lakes and data warehouses.
                Explore use-cases for each type of storage and the available data lake and warehouse solutions on Google Cloud..
                Discuss the role of a data engineer and the benefits of a successful data pipeline to business operations."
              ghLink="https://coursera.org/share/7800450ba03658804eb61469fbfa55d8"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google3}
              isBlog={false}
              title="Google Cloud Big Data and Machine Learning Fundamentals"
                description="Identify the data-to-AI lifecycle on Google Cloud and the major products of big data and machine learning.
                Design streaming pipelines with Dataflow and Pub/Sub and dDesign streaming pipelines with Dataflow and Pub/Sub.
                Discuss the role of a data engineer and the benefits of a successful data pipeline to business operations."
              ghLink="https://coursera.org/share/8626f807a6ef0768a7660d661dcd35e6"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Blockchain: Foundations and Use Cases"
                description=""
              ghLink="https://coursera.org/share/8626f807a6ef0768a7660d661dcd35e6"
              
            />
          </Col>
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
