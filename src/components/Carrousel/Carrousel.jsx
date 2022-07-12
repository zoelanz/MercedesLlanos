
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

      {/* <Splide
        className="splide"
        aria-label={works.name}
        options={{
          rewind: true,
          gap: "1rem",
          speed: 500,
          height: "32rem",
          width: "100%",
          perPage: 1,
          start: 0,
        }}
      >
        {works.img.map((img) => (
          <SliderImg img={img} />
        ))}
      </Splide> */}

      <Carousel>
        {works.img.map((img) => (
          <Carousel.Item >
          <img className="d-block w-100" src = {img} />
        </Carousel.Item>
          // <Nose img={img} />
        ))}
            
      </Carousel>
    </div>
  );
}

export default Carrousel;
