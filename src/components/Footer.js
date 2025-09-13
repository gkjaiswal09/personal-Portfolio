import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
            <Col md="4" className="footer-copywright">
              <h3>Designed and Developed by Ghanshyam Kumar</h3>
            </Col>
        <Col md="4" className="footer-copywright">
                <h3>Copyright © {year} Ghanshyam Kumar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/gkjaiswal09"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ghanshyam-kumar-969364261/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/Ghanshyam_jaiswal09/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* You can use a generic icon or LeetCode SVG here if available */}
                LeetCode
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
