import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

function SplideSlide(img) {
  return (
    <SplideSlide>
      <img className="imgCarrousel" src={img} />
    </SplideSlide>
  );
}

export default SplideSlide;
