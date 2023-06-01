import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner photo1.webp";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h5> Hi! I am</h5>
                    <br></br>
                    <h1
                      className="euge"
                      style={{
                        color: "#b5a61f",
                        fontSize: "100px",
                        fontWeight: "500",
                      }}
                    >
                      Eugenia Rader
                    </h1>
                    <h1 style={{ marginTop: "-30px", fontSize: "50px" }}>
                      Vocal Coach
                    </h1>
                    <p>
                      I'm Eugenia Rader, a professional Vocal Coach. It doesn't
                      matter if you are a beginner or an advanced student, I
                      will improve your skills and take you to the next level.
                    </p>

                    <HashLink to="#connect" style={{ textDecoration: "none" }}>
                      <button onClick={() => console.log("connect")}>
                        Let’s Connect
                        <ArrowRightCircleFill size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      src={headerImg}
                      alt="Header Img"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
