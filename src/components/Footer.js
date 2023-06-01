import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo mic.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Logo"
              style={{
                borderRadius: "50%",
                maxWidth: "60px",
                marginTop: "15px",
              }}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/eugerader1/?hl=en">
                <img src={navIcon3} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/eugenia.rader">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
            </div>
            <p style={{ display: "none" }}>
              Copyright 2022. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
