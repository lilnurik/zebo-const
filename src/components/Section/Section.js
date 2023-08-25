import React from "react";
import "./Section.scss";
// import  {aboutRef}  from '../Navbar/Navbar'

const Section = () => {
  return (
    <div className="container" id="section" >
      <div className="div-section">
        <h1>Welcome to the“Zebo Construction LTD”</h1>
        <div className="div-text">
          <h5>
            Zebo Construction is a real estate company that specializes in
            construction and development projects. With a focus on residential
            and commercial properties, Zebo Construction is known for delivering
            high-quality construction solutions.
          </h5><br/>
          <div className="div-about">
            <p>
              The company offers a wide range of services, including building
              design, project management, construction, renovation, and
              remodeling. Zebo Construction works closely with clients to
              understand their specific needs and bring their vision to life.
            </p>
            <p className="secondBlock">
              Zebo Construction takes pride in using the latest construction
              techniques and materials to ensure durability, energy efficiency,
              and aesthetic appeal in their buildings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
