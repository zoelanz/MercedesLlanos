import React from "react";
import WorkYear from "../WorkYear/WorkYear";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  
} from "firebase/firestore";

import "./WorkYearContainer.scss";
import Loader from "../Loader/Loader";

function WorkYearContainer() {
  //FILTERING WORKS BY YEAR AND CATEGORY//

  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category, year } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "works");

    const queryCollectionFilter = query(
      queryCollection,
      where("category", "==", category),
      where("year", "==", Number(year))
    );

    getDocs(queryCollectionFilter)
      .then((resp) =>
        setWorks(resp.docs.map((work) => ({ ...work.data(), id: work.id })))
      )
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      );
  }, [category, year]);

  return (
    <div className="workYear">
      {loading ? <Loader /> : <WorkYear data={works} />}
    </div>
  );
}

export default WorkYearContainer;
