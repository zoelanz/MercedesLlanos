import React from "react";
import ExtLink from "../ExtLink/ExtLink";
import "./About.scss";

function About() {
  return (
    <div>
      <div className="about">
        <img
          className="aboutImg"
          src="https://i.imgur.com/3Bv3oHO.jpg"
          alt=""
        />
        <div className="aboutText">
          <p>
            Mercedes Llanos (b.1992, Argentina) is a figurative painter, drawer
            and muralist based in New York City. She graduated with an MFA from
            CUNY Hunter College in 2021 and is a grantee of The Elizabeth
            Greenshields Foundation Grant for figurative painting. Her practice
            deals with the surreal aspect of dreams as they concern with waking
            life issues, mainly focusing on power-roles in domestic partnerships
            embedded in a South American Patriarchal upbringing. In her dreams,
            she subconsciously navigates the repression of freedom firsthand
            experienced, and that of the transgenerational woman collective. Her
            works not only show tension between two opposing forces, but also
            love and care, confusing the viewer as to whether the events
            portrayed are pleasurable or painful, loving or hateful.
          </p>
          <a
            className="button"
            href="https://docs.google.com/document/d/1z-_LImVuLFon0gXyNGiwlEPiKS0CXGSSeQhd83P6iQ4/edit?usp=sharing"
            target="_blank"
          >
            MERCEDES LLANOS CV
          </a>
        </div>
      </div>
      <div className="press">
        <h5>PRESS</h5>
        <h6>Selected Interviews and writing:</h6>
        <div className="links">
          <ExtLink link="https://blog.utc.edu/news/2022/04/creativity-in-sleep-alum-artist-finds-inspirations-in-dreams/" />
          <ExtLink link="https://academicworks.cuny.edu/hc_sas_etds/801/" />
          <ExtLink link="https://www.mineralhousemedia.com/media/mercedesllanos" />
          <ExtLink link="https://www.instagram.com/p/BfL4mVXgLmK/" />
          <ExtLink link="http://www.chattanoogapulse.com/arts_entertainment/entertainment-news/the-south-american-art-of-mercedes-llanos/" />
          <ExtLink link="https://articleswithsachaqa.wordpress.com/2017/03/30/transformation-mercedes-llanos-interview/" />
        </div>
      </div>
    </div>
  );
}

export default About;
