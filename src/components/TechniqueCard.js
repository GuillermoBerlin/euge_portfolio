import { Col } from "react-bootstrap";

export const TechniqueCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="vid-imgbx">
        <iframe
        rel="preconnect"
          width="340"
          height="240"
          src={imgUrl}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div style={{ width: "100%" }}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
