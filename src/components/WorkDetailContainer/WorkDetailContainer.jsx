import React from "react";

import WorkDetail from "../WorkDetail/WorkDetail";
import Loader from "../Loader/Loader";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function WorkDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [detailWorks, setDetailWorks] = useState();

  const { detailId } = useParams();

  const productNotFound = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "works", detailId);

    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && productNotFound("Not found", { replace: true });
        setDetailWorks({ ...resp.data(), id: resp.id });
      })
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, [productNotFound]);

  return <div>{loading ? <Loader /> : <WorkDetail works={detailWorks} />}</div>;
}

export default WorkDetailContainer;
