import React from "react";
import Work from "../Work/Work";
import "./WorkYear.scss";

function WorkYear({ data }) {
  // const filterYear = data.filter( year => {
  //   return year === 2020
  // })

  return (
    <div className="workContainer">
      {data.map((work) => (
        <div /*key={item.id}*/>
          <Work
            name={work.name}
            img1={work.img1}
            category={work.category}
            year={work.year}
          />
        </div>
      ))}
    </div>
  );
}

export default WorkYear;
