import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col>
            <ul className="list-inline text-center Footer-ul">
              <li className="list-inline-item">
                <a href="/">About Us</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Contact Us</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="/">FAQ</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Video</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Recipe Partners</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Tips</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} MyFoodBook</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
