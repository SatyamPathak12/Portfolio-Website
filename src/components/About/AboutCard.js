import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, My name Satyam Pathak 
            and i am from Varanasi Uttar Pradesh India.
            <br />
            <br/>
            I am currently pursuing my Bachelor's degree in Electronics and Communication Engineering from Madan Mohan Malaviya University of Technology, Gorakhpur.
            <br />
            <br />
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
