import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

function Carrousel({img}) {
  return (

    <SplideSlide>
      <img className="imgCarrousel" src={img} />
    </SplideSlide>
  );
}

export default Carrousel;
