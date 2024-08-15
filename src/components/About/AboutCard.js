import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Stevendo </span>
            from <span className="purple"> HCMC, VietNam.</span>
            <br />
            I am currently employed as a software developer at GrindyTechnology.
            <br />
            I completed my Bachelor's degree in Computer Science at Ho Chi Minh City University of Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Investing in Cryptocurrency Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> A Coin Holder
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Tea Ceremony and Fish Watching
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)"  }}>
            "Strive to build things that make a difference! <br></br>
             Strive to create things that bring positive change!"{" "}
          </p> */}
          <p style={{
            color: "rgb(155 126 172)",
            fontSize: "1.2em", // Tăng kích thước chữ
            fontWeight: "bold", // Đậm chữ
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Đổ bóng
          }}>
            "Strive to build things that make a difference! <br />
            Strive to create things that bring positive change!"
          </p>
          
  
          <footer className="blockquote-footer">Stevendo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
