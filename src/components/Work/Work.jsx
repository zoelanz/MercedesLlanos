import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Work.scss";

function Work({ name, img1, workId }) {
  return (
    <div className="work">
      <Card className="card" style={{ width: "17rem" }}>
        <Link to={`/detail/${workId}`}>
          <Card.Img className="imgWork" variant="top" src={img1} />
        </Link>
        <Card.Body>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Work;
