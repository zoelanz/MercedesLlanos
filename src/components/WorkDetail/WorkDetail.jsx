import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

import "./WorkDetail.scss";

function WorkDetail({ works }) {
  return (
    <div className="splide__slide">
      <h6 className="name">{works.name}, {works.year}</h6>
      <p className="name">{works.technique} {works.size}</p>
      <Splide
        className="splide"
        aria-label={works.name}
        options={{
          rewind: true,
          gap: "1rem",
          // type: "loop",
          // focus: "center",
          // autoWidth: true,
          speed: 500,
          height: "32rem",
          width: "100%",
          padding: 0,
          perPage:1,
        }}
      >
        <SplideSlide>
          <img className="imgCarrousel" src={works.img1} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img2} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img3} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img4} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img5} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img6} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img7} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img8} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img9} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img10} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img11} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img12} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img13} />
        </SplideSlide>
        <SplideSlide>
          <img className="imgCarrousel" src={works.img14} />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default WorkDetail;
