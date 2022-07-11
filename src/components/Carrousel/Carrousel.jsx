import { Splide, SplideSlide } from "@splidejs/react-splide";

import SliderImg from "../SliderImg/SliderImg"

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

import "./Carrousel.scss";


function Carrousel({works}) {

  return (
    <div className="splide__slide">
     <h6 className="name">
       {works.name}, {works.year}
     </h6>
     <p className="description">
       {works.technique} {works.size}
     </p>
     <Splide
       className="splide"
       aria-label={works.name}
       options={{
         rewind: true,
         gap: "1rem",
         speed: 500,
         height: "32rem",
         width: "100%",
        //  padding: "10px",
         perPage: 1,
         start: 0
        }}
        >
{works.img.map((img)=><SliderImg img={img}/>)
}
       </Splide>
       </div>
  );
}

export default Carrousel;
