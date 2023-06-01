import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TechniqueCard } from "./TechniqueCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Techniques = () => {
  const techniques = [
    {
      title: "Chest Voice",
      description: "Singing with chest voice",
      imgUrl: "https://www.youtube.com/embed/JpeuM2I6muU",
    },
    {
      title: "Head Voice",
      description: "Singing with head voice",
      imgUrl: "https://www.youtube.com/embed/YoUb3bfN1Ds",
    },
    {
      title: "Mixed Voice",
      description: "Mixing head voice and chest voice",
      imgUrl: "https://www.youtube.com/embed/rVtMzoyhoHw",
    },
    {
      title: "Falsetto",
      description: "Singin with falsetto",
      imgUrl: "https://www.youtube.com/embed/JO90JuACe6U",
    },
    {
      title: "Whistle Register",
      description: "The highest voice register",
      imgUrl: "https://www.youtube.com/embed/MiH0N5Rn61M",
    },
    {
      title: "Vocal Fry",
      description: "Add fry to the voice",
      imgUrl: "https://www.youtube.com/embed/EwCPJtm1NnQ",
    },
    {
      title: "Fry Scream",
      description: "Scream with fry",
      imgUrl: "https://www.youtube.com/embed/7jiBQTQr4iE",
    },
    {
      title: "Raspy",
      description: "Add grit to the voice",
      imgUrl: "https://www.youtube.com/embed/U8O_-CexarQ",
    },
    {
      title: "False Cord",
      description: "Scream using false cord",
      imgUrl: "https://www.youtube.com/embed/aDCAp8xIrJs",
    },
  ];

  return (
    <section className="technique" id="techniques">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Singing Techniques</h2>
                  <p>
                    Here are some examples of the different singing techniques
                    you can learn with me.
                  </p>
                  <Tab.Container id="techniques-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item style={{ display: "none" }}>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ display: "none" }}>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ display: "none" }}>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {techniques.map((technique, index) => {
                            return <TechniqueCard key={index} {...technique} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
