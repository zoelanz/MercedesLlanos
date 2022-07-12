
import { Carousel } from "react-bootstrap";

import "./Carrousel.scss";

function Carrousel({ works }) {
  return (
    <div className="slide">
      <h6 className="name">
        {works.name}, {works.year}
      </h6>
      <p className="description">
        {works.technique} {works.size}
      </p>
      <Carousel>
        {works.img.map((img) => (
          <Carousel.Item >
          <img className="d-block w-100" src = {img} />
        </Carousel.Item>
        ))}
            
      </Carousel>
    </div>
  );
}

export default Carrousel;
