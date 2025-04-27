import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, My name is Satyam Pathak, currently pursuing Bachelor's degree in Electronics and Communication Engineering from Madan Mohan Malaviya University of Technology, Gorakhpur 
            and i am from Varanasi Uttar Pradesh India.
            <br />
            <br/>
            I am a Competitive Programmer and MERN Stack Developer passionate about building fast, scalable, and modern web applications.

Skilled in C, C++, Java, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and frontend technologies like HTML, CSS, and Bootstrap, I have a strong foundation in Data Structures and Algorithms, having solved over 500 problems across various coding platforms.
<br/>
<br/>
Driven by a love for problem-solving and performance optimization, I am always eager to learn new technologies and create impactful digital experiences.
            
          
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
