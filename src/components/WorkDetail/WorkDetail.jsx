import React, { useEffect, useState } from "react";

import Carrousel from "../Carrousel/Carrousel";
import Loader from "../Loader/Loader";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

function WorkDetail({ works }) {
  const [module, setModule] = useState();

  useEffect(() => {
    if (works !== undefined) {
      setModule(<Carrousel works={works} />);
    } else {
      setModule(<Loader />);
    }
  }, [works]);

  return <>{module}</>;
}

export default WorkDetail;


