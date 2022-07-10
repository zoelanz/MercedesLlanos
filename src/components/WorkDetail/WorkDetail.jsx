import React, { useEffect, useState } from "react";
import Carrousel from "../Carrousel/Carrousel";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "./WorkDetail.scss";


function WorkDetail({ works }) {

  const [module, setModule] = useState();

  useEffect(() => {

    if(works !== undefined){
      setModule(<Carrousel works={works}/>)
    }else{
      setModule(<div class="progress-loader">
      <div class="progress"></div>
  </div>)
    }
  },[works])

  return (
    <>
     {module}
      </>
  );
}

export default WorkDetail;



/* 

= crear modulo loading 
= const [load, setLoad] = useState(modulo de loading);
= quitas linea 19 (else)


*/