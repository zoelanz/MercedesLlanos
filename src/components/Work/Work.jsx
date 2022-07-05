import { Card } from "react-bootstrap";
import "./Work.scss";

function Work({ name, img1, category, year }) {


  
  return (
    <div className="work">
      <Card style={{ width: "16rem" }}>
        <Card.Img className="imgWork" variant="top" src={img1} />
        <Card.Body>
          <Card.Title>NAME: {name}</Card.Title>
          <Card.Title>CATEGORY: {category}</Card.Title>
          <Card.Title>YEAR: {year}</Card.Title>
          <button>DETAIL</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Work;
