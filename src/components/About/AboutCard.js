import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ghanshyam Kumar</span> from <span className="purple">Kanpur, India.</span>
            <br />
            Computer Science undergraduate at Pranveer Singh Institute of Technology, Kanpur (CGPA: 7.8).
            <br />
            Experienced in software development, data structures, and algorithms. Developed web applications and APIs using the MERN stack, and worked with embedded systems. Solved 500+ DSA problems on LeetCode.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building and testing electronics projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving coding challenges (500+ DSA problems on LeetCode)
            </li>
            <li className="about-activity">
              <ImPointRight /> Leading and organizing team activities (House Captain in school)
            </li>
          </ul>

          <h5 style={{ marginTop: "1em" }}>Experience</h5>
          <ul>
            <li>
              <strong>Optiqo</strong> - Full Stack Developer (Jan 2024 – Apr 2024)
              <ul>
                <li>Built a full-stack web application using React.js, Node.js, Express.js, and MongoDB.</li>
                <li>Designed RESTful APIs with optimized queries, improving response time by 30%.</li>
                <li>Enhanced application accessibility with responsive design and cross-platform compatibility.</li>
              </ul>
            </li>
          </ul>

          <h5 style={{ marginTop: "1em" }}>Achievements & Certifications</h5>
          <ul>
            <li>Solved 500+ DSA problems on LeetCode (top percentile)</li>
            <li>HackerRank: Top certificates in Python, C++, Problem Solving (Top 2%)</li>
            <li>Udemy: Full-Stack Web Development, Python for Data Science & Machine Learning, Complete Python Developer</li>
            <li>HackerRank: Problem Solving Certificate</li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to solve real-world problems and build impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Ghanshyam Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
