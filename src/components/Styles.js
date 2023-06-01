import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Styles = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 840 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 840, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="style" id="styles">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="style-bx wow zoomIn">
              <h2>Styles</h2>
              <p>
                Different musical styles require different singing techniques.
                <br></br> Here are some of the styles I have taught to my
                students.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme style-slider"
              >
                <div className="item">
                  <h5>Pop</h5>
                  <li>belting</li>
                  <li>whistle & falsetto</li>
                  <li>vocal range</li>
                  <li>mixed voice</li>
                </div>
                <div className="item">
                  <h5>Jazz</h5>
                  <li>improvisation skills</li>
                  <li>vibratos</li>
                  <li>phrasing</li>
                  <li>musical hearing</li>
                </div>
                <div className="item">
                  <h5>Metal</h5>
                  <li>vocal fry & raspy</li>
                  <li>fry scream & false cord</li>
                  <li>belting</li>
                  <li>vocal range</li>
                </div>
                <div className="item">
                  <h5>Classic</h5>
                  <li>speech quality</li>
                  <li>range</li>
                  <li>solfeo</li>
                  <li>projection</li>
                </div>
                <div className="item">
                  <h5>Rock</h5>
                  <li>mixed voice & falsetto</li>
                  <li>belting</li>
                  <li>vocal fry</li>
                  <li>raspy</li>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
