import React from 'react'
import { SplideSlide } from "@splidejs/react-splide";
import "./SliderImg.scss";



function SliderImg({img}) {
  return (
    <SplideSlide>
  <img className="imgCarrousel" src={img}  />
  </SplideSlide>
  )
}

export default SliderImg