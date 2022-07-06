import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Work.scss";

function Work({ name, img1, category, year, workId }) {

  return (
    <div className="work">
      <Card className="card" style={{ width: "16rem" }}>
        <Card.Img className="imgWork" variant="top" src={img1} />
        <Card.Body>
          <Card.Title>NAME: {name}</Card.Title>
          <Card.Title>CATEGORY: {category}</Card.Title>
          <Card.Title>YEAR: {year}</Card.Title>
          <Card.Title>ID: {workId}</Card.Title>
          <Link to={`/detail/${workId}`}>
          <button>DETAIL</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Work;
