import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "./workDetail.scss"

function WorkDetail({ works }) {
  return (
 
      <Splide aria-label={works.name}
      options={ {
        rewind: true,
        gap   : '1rem',
        type     : 'loop',
        height   : '37rem',
        focus    : 'center',
        autoWidth: true,  
      } }>
        
        <SplideSlide>
          <img className="imgDetail" src={works.img1}  />
        </SplideSlide>
        <SplideSlide>
          <img src={works.img2} />

        </SplideSlide>
        <SplideSlide>
          <img src={works.img3} />

        </SplideSlide>
      </Splide>
      
    
  );
}

export default WorkDetail;
