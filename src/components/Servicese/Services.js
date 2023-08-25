import React from "react";
import "./Services.scss";
import FirstData from "./FirstData";
import img from "../../img/img.png";
// import {servicesRef} from '../Navbar/Navbar'


const Services = () => {
  return (
    <div className="container" id="service" >
    <div className="div-services">
      <img src={img} alt="" className="imgSer" />
      <div className="first-block">
        {FirstData.slice(0, 4).map((item, index) => (
          <div className="item" key={index}>
            <div className="div-num">{item.num}</div>
            <div className="div-info">{item.info}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="second-block">
          <div className="item">
            <div className="div-num">{FirstData[4].num}</div>
            <div className="div-info">{FirstData[4].info}</div>
          </div>
          <div className="item">
            <div className="div-num">{FirstData[5].num}</div>
            <div className="div-info">{FirstData[5].info}</div>
          </div>
        </div>
        <div className="second-block">
          <div className="item">
            <div className="div-num">{FirstData[6].num}</div>
            <div className="div-info">{FirstData[6].info}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Services;
