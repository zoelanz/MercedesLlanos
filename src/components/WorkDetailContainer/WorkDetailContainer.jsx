import React from "react";
import WorkDetail from "../WorkDetail/WorkDetail";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function WorkDetailContainer() {

  const [detailWorks, setDetailWorks] = useState([]);

  const { detailId } = useParams();

  const productNotFound = useNavigate();

  console.log(detailId)
  
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "works", detailId);
    console.log("jueputa")

    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && productNotFound("Not found", { replace: true });
        setDetailWorks({ ...resp.data(), id: resp.id});
      })
      .catch((err) => console.log(err));
  }, [productNotFound]);

  return (
    <div>
      <WorkDetail works={detailWorks} />  
    </div>
  );
}


export default WorkDetailContainer;
