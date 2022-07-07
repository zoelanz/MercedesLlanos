import React from "react";
import Work from "../Work/Work";
import "./WorkYear.scss";

function WorkYear({ data }) {
  return (
    <div className="workContainer">
      {data.map((work) => (
        <div key={work.id}>
          <Work
            workId={work.id}
            name={work.name}
            img={work.img1}
            category={work.category}
            year={work.year}
          />
        </div>
      ))}
    </div>
  );
}

export default WorkYear;
